## Setup important

In file `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/styles/**/*.{js,ts,jsx,tsx,mdx,css}', './src/pages/**/*.{js,ts,jsx,tsx,mdx,css}', './src/components/**/*.{js,ts,jsx,tsx,mdx,css}', './src/app/**/*.{js,ts,jsx,tsx,mdx,css}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            transitionProperty: {
                left: 'left',
                'margin-left': 'margin-left',
            },
        },
    },
    plugins: [],
};
export default config;
```

In this file config path file that tailwind compile in property `content`.

Config more global class in theme
