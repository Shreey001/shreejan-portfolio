import React, { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import ReactDOMServer from "react-dom/server";

const FallingText = ({
  text = "",
  highlightWords = [],
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = "1rem",
  customElements,
  textColor = "inherit",
  contained = false,
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasContainerRef = useRef(null);

  const [effectStarted, setEffectStarted] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;

    if (customElements) {
      const elementsHTML = customElements
        .map(
          (element, index) =>
            `<span class="inline-block mx-[2px] select-none">${ReactDOMServer.renderToString(
              element
            )}</span>`
        )
        .join(" ");
      textRef.current.innerHTML = elementsHTML;
    } else {
      const words = text.split(" ");
      const newHTML = words
        .map((word) => {
          const isHighlighted = highlightWords.some((hw) =>
            word.startsWith(hw)
          );
          return `<span
            class="inline-block mx-[2px] select-none ${
              isHighlighted ? "text-cyan-500 font-bold" : ""
            }"
            style="color: ${!isHighlighted ? textColor : ""}"
          >
            ${word}
          </span>`;
        })
        .join(" ");
      textRef.current.innerHTML = newHTML;
    }
  }, [text, highlightWords, customElements, textColor]);

  useEffect(() => {
    if (trigger === "auto") {
      setEffectStarted(true);
      return;
    }
    if (trigger === "scroll" && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } =
      Matter;

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes,
      },
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };

    const floor = Bodies.rectangle(
      width / 2,
      contained ? height - 25 : height + 25,
      width,
      50,
      boundaryOptions
    );
    const leftWall = Bodies.rectangle(
      contained ? 25 : -25,
      height / 2,
      50,
      height,
      boundaryOptions
    );
    const rightWall = Bodies.rectangle(
      contained ? width - 25 : width + 25,
      height / 2,
      50,
      height,
      boundaryOptions
    );
    const ceiling = Bodies.rectangle(
      width / 2,
      contained ? 25 : -25,
      width,
      50,
      boundaryOptions
    );

    const wordSpans = textRef.current?.querySelectorAll("span");
    if (!wordSpans) return;

    const wordBodies = [...wordSpans].map((elem) => {
      const rect = elem.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: "transparent" },
        restitution: 0.5,
        frictionAir: 0.05,
        friction: 0.5,
      });

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2,
        y: 0,
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.02);

      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = "absolute";
      const offsetX = Math.max(
        body.bounds.max.x - body.bounds.min.x,
        elem.offsetWidth
      );
      const offsetY = Math.max(
        body.bounds.max.y - body.bounds.min.y,
        elem.offsetHeight
      );

      elem.style.left = `${body.position.x - offsetX / 2}px`;
      elem.style.top = `${body.position.y - offsetY / 2}px`;
      elem.style.transform = "none";
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });
    render.mouse = mouse;

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ceiling,
      mouseConstraint,
      ...wordBodies.map((wb) => wb.body),
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        const offsetX = Math.max(
          body.bounds.max.x - body.bounds.min.x,
          elem.offsetWidth
        );
        const offsetY = Math.max(
          body.bounds.max.y - body.bounds.min.y,
          elem.offsetHeight
        );

        elem.style.left = `${x - offsetX / 2}px`;
        elem.style.top = `${y - offsetY / 2}px`;
        elem.style.transform = `rotate(${body.angle}rad)`;
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [
    effectStarted,
    gravity,
    wireframes,
    backgroundColor,
    mouseConstraintStiffness,
    contained,
  ]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === "click" || trigger === "hover")) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative z-[1] w-full h-full cursor-pointer text-center pt-8 ${
        contained ? "overflow-hidden" : "overflow-visible"
      }`}
      onClick={trigger === "click" ? handleTrigger : undefined}
      onMouseOver={trigger === "hover" ? handleTrigger : undefined}
    >
      <div
        ref={textRef}
        className="inline-block"
        style={{
          fontSize,
          lineHeight: 1.4,
        }}
      />
      <div className="absolute top-0 left-0 z-0" ref={canvasContainerRef} />
    </div>
  );
};

export default FallingText;
