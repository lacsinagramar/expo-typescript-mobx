## Expo Typescript Mobx

### File Structure

- `src` - Main codebase folder
  - `components` - stateless components
    - `{{componentName}}`
      - `index.tsx` - React component file
      - `components.ts` - collection of `styled-components` for the stateless component
  - `container` - technically screens (every screen has a folder)
    - `{{screenName}}`
      - `index.tsx` - React component file (UI - Level)
      - `components.ts` - collection of `styled-components` for the screen
      - `presenter.ts` - Presenter level of the screen
  - `store` - collection of stores
  - `utils` - collection of helper functions for the app
