# YODA (npm: @aantonio/yoda)

It's a foundation Design System based on the Storybook tutorial is a subset of the full [Storybook design system](https://github.com/storybookjs/design-system/), created as a learning resource for those interested in learning how to write and publish a design system using best in practice techniques.

Learn more in [Storybook tutorials](https://storybook.js.org/tutorials/).

## 🚅 Quick start

1.  **Install the dependencies.**

    Navigate into directory and install the necessary dependencies.

    ```shell
    # Navigate to the directory
    cd yoda/

    # Install the dependencies
    yarn install
    ```

2.  **Run project.**

    Navigate into directory and run storybook.

    ```shell
    # Navigate to the directory
    cd yoda/

    # Run storybook
    yarn storybook
    ```

## 🔎 What's inside?

A quick look at the top-level files and directories included with this template.

    .
    ├── .github
    ├── .storybook
    ├── node_modules
    ├── dist
    ├── public
    ├── src
    ├── .gitignore
    ├── .env
    ├── CHANGELOG.md
    ├── package.json
    ├── yarn.lock
    └── README.md

1.  **`.github`**: This directory contains github CI actions.

2.  **`.storybook`**: This directory contains the storybook initialisation and entry point.

3.  **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages).

4.  **`public`**: This directory will contain the development and production build of the Design System.

5.  **`src`**: This directory will contain all of the Design System stories and components code related to what you will see on your application.

6.  **`.env`**: This file will contain the necessary environment variables for your application.

7.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

8.  **`CHANGELOG.md`**: A text file containing change description about the project. Edit before publish.

9.  **`package.json`**: Standard manifest file for Node.js projects, which typically includes project specific metadata (such as the project's name, the author among other information). It's based on this file that npm will know which packages are necessary to the project.

10. **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(Do not change it manually).**

11. **`README.md`**: A text file containing useful reference information about the project.

## 🚀 How to ship NPM package?

Design System is automatically publish to NPM when we merge on `master` branch.

    ⚠️ To avoid running automatically GitHub workflows, we can add `[skip ci]` on commit message

1.  **Manually publish.**

    Edit `CHANGELOG.md` file like exemple bellow

    ```
    # vx.x.x (Tue Mar 09 2021)

    - Created first version of the design system, with `Avatar`, `Badge`, `Button`, `Icon` and `Link` components.

    #### Authors: 1

    - [your-username](https://github.com/your-username)
    ```

    ```shell
    # Add changelog and commit
    git add CHANGELOG.md
    git commit -m "Changelog for vx.x.x [skip ci]"

    # Publish
    npm --allow-same-version version 0.1.0 -m "Bump version to: %s [skip ci]"
    npm publish --access=public

    #Create release on GitHib with "Auto"
    git push --follow-tags origin main
    yarn auto release
    ```
