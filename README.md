# starter-lint-template
this is starter template for linting html, js and css/scss

1. To get started, clone or fork this repo then kindly install `npm i -g bun`

2. To install dependencies:

```bash
bun install
```
3. Please run `bunx husky init`

The init command simplifies setting up husky in a project. It creates a pre-commit script in .husky/ and updates the prepare script in package.json. Modifications can be made later to suit your workflow.

4. After initialize, please go to .husky > pre-commit and put this command `bunx lint-staged`

Why? see this link [lint-staged](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#why)

If you have any concerns and suggestions, kindly file a Github issues.
