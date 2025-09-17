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

5. Create a file name lint.yml just copy & paste this `.github/workflows/lint.yml`

6. Inside lint.yml, paste this github action

```Lint
    name: Lint
    on: push: pull_request:

    jobs: 
        build: 
            runs-on: ubuntu-latest 
            steps: 
                - uses: actions/checkout@v5

                - name: Use Node.js
                  uses: oven-sh/setup-bun@v2
                  with:
                    bun-version: latest
                - run: bun install
                - run: bun lint
```

Why? see this link [lint-staged](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#why)

Note: If you encounter `Doctype must be declared before any non-comment content. (doctype-first)` just copy and paste this comment block `<!-- htmlhint doctype-first:false, tag-pair:false -->`, to have a hint for htmlhint linter to ignore this shtml file to have doctype and no tag pair since this a component/ssi file

If you have any concerns and suggestions, kindly file a Github issues.
