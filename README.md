# tailwindcss-yarn-pnp

how to run (from the root, you will need corepack):

```sh
yarn
```

from `./packages/vite-bundle`
```sh
yarn dev
```

then you can see that `p-10` is generated (because it's declared in `./packages/vite-bundle/main.tsx`) but other classed don't
```css
@layer utilities {
  .twp\:p-10 {
    padding: calc(var(--twp-spacing) * 10);
  }
}
```
