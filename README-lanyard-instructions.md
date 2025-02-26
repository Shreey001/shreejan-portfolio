# Lanyard 3D Card Component Setup

This document provides instructions for setting up the 3D lanyard card component in your project.

## Required Files

You need two essential files:

1. `card.glb` - The 3D model file for the card
2. `lanyard.png` - The texture for the lanyard's band

## File Location

These files should be placed in the following directory structure:

```
src/
  assets/
    lanyard/
      card.glb
      lanyard.png
```

## Getting the Files

You can obtain these files in one of these ways:

1. Download them from the [reactbits.dev components/lanyard](https://www.reactbits.dev/components/lanyard) repository
2. Create your own:
   - For `card.glb`, you can use [https://modelviewer.dev/editor/](https://modelviewer.dev/editor/) to edit or create a new one
   - For `lanyard.png`, use any image editor to create a band texture

## Customization

1. To customize the card's appearance, you can edit the `card.glb` file using the online editor linked above
2. To change the lanyard band design, edit the `lanyard.png` file in an image editor

## Additional Configuration

The project's Vite configuration has been updated to include support for .glb files with:

```javascript
assetsInclude: ["**/*.glb"];
```

## Required Libraries

This component requires the following dependencies:

```bash
npm install three meshline @react-three/fiber @react-three/drei @react-three/rapier
```

For TypeScript users, you may need to add type definitions as described in the documentation.
