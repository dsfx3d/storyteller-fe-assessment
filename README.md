# Storyteller Web UI development test

## Table of Contents

- [Storyteller Web UI development test](#storyteller-web-ui-development-test)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Features](#features)

## Prerequisites

You will need [pnpm](https://pnpm.io/) to run this project

```bash
# install pnpm
npm i -g pnpm@9.15.2

# install dependencies
pnpm i
```

## Getting Started

Run production server on [http://localhost:3000](http://localhost:3000)

  ```bash
  pnpm start
  ```

Run storybook on [http://localhost:6006](http://localhost:6006)

  ```bash
  pnpm storybook
  ```

## Features

1. Responsive UI supporting small mobile (320px) to 4K displays.
2. Every interactive element is focusable and traversable with a keyboard.
3. When sidebar is expanded in drawer mode, the focus gets trapped within the drawer while traversing with a keyboard.
4. When the sidebar is collapsed, none of it's elements are focusable or traversable with a keyboard.
5. Mock API with pagination hosted as a next.js route.
6. Filters and pagination are 2-way binded with the URL search params. (no validation/all filters don't work).
7. Minimal ARIA tags to showcase accessability support for screen readers.
