# YODA

It's a foundation Design System based on the Storybook tutorial is a subset of the full [Storybook design system](https://github.com/storybookjs/design-system/), created as a learning resource for those interested in learning how to write and publish a design system using best in practice techniques.

Learn more in [Storybook tutorials](https://storybook.js.org/tutorials/).

## 📝 How it work

As a Design System foundation, we can import this package in another Design System that can inherit from foundation.

Or import directly in the product.

1.  **Installation.**

    ```shell
    # Install package
    yarn add -D @aantonio/yoda
    ```

2.  **Importation in another Storybook.**
    In `.storybook/preview.js`

    ```JS
    import React from 'react';

    // The styles imported from the design system.
    import { global as designSystemGlobal } from '@your-npm-username/learnstorybook-design-system';

    const { GlobalStyle } = designSystemGlobal;

    /*
    * Adds a global decorator to include the imported styles from the design system.
    * More on Storybook decorators at:
    * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
    */
    export const decorators = [
    Story => (
        <>
        <GlobalStyle />
        <Story />
        </>
    ),
    ];
    /*
    * More on Storybook parameters at:
    * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
    */
    export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    };
    ```

3.  **Classical importation.**

    ```JS
    import { Avatar } from '@aantonio/yoda';
    ```
