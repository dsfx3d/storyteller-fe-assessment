# Storyteller Web UI development test

## Table of Contents

- [Storyteller Web UI development test](#storyteller-web-ui-development-test)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)

## Prerequisites

You will need [pnpm](https://pnpm.io/) to run this project`

```bash
# install pnpm
npm i -g pnpm@9.15.2

# install dependencies
pnpm i
```

## Getting Started

Run production server on [http://localhost:3000](http://localhost:3000)

  ```bash
  # serves app on localhost:3000 and mock API on localhost:3001
  pnpm start
  ```

> If the server fails to startup, try running `pnpm mock-api` then `pnpm start:next` separately.

Run storybook on [http://localhost:6006](http://localhost:6006)

  ```bash
  pnpm storybook
  ```
