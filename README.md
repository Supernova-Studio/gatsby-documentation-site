<img src="https://github.com/Supernova-Studio/gatsby-documentation-site/blob/main/readme-icon.png?raw=true" alt="Supernova + Gatsby Starter Pack" style="max-width:100%; margin-bottom: 20px;" />

# Supernova + Gatsby official documentation starter

Create custom design system documentation sites powered by the design system supereditor, [Supernova.io](https://supernova.io). This repository provides a fully coded, fully customizable, typescript-enabled Gatsby site you can just connect to [Supernova](https://supernova.io), run and start customizing it (or serving to your team) to your liking!

## Features

This starter implements all functionality you might need for your design system docs:

- [x] Full support for all Supernova content blocks, including custom blocks and ability to code your own blocks
- [x] Rendering of design tokens, assets, components, rich text, images + all other necessary elements
- [x] Responsive layout and 2 different ways how to structure your content
- [x] Integration with Supernova editor configuration options

And of course, features that make all developers happy!

- [x] Excellent, extendable code structure
- [x] Componentized design
- [x] Fully Typescript-enabled code
- [x] Fully Typescript-enabled Supernova GraphQL binding
- [x] Pre-defined set of useful GraphQL queries to get static data you need
- [x] Interactive command-line setup
- [x] `npm run dev` and all works out of the box

## What to expect

Right out of the box, your documentation site comes with a beautifully styled template and elements, which you can fully customize to your liking - or redo the site completely, should you want to.

<img src="https://github.com/Supernova-Studio/gatsby-documentation-site/blob/main/readme-example.png?raw=true" alt="Supernova Site Examples" style="max-width:100%; margin-bottom: 20px;" />

## Getting Started 

First, create a design system within Supernova. You can also optionally write a little bit of content for your documentation, use elements from Figma, connect Storybook or whatever you fancy. [Here is our official starting guide](https://learn.supernova.io/introduction/getting-started.html) that you can follow.

### Setting up source code
```
$ git clone https://github.com/Supernova-Studio/gatsby-documentation-site.git
$ npm install
```

You can optionally use the Gatsby CLI to achieve the same thing.

```
$ gatsby new my-design-system-docs https://github.com/Supernova-Studio/gatsby-documentation-site
```

### Requirements

This project uses on Gatsby version 4 so you can enjoy advanced new features like SSR, DSG, parallel querying and many more. However, this also means that you will need Node 14.15+ at minimum to run it. If you are still on previous versions, you can use [NVM](https://github.com/nvm-sh/nvm) to install the new one and freely switch between them.

### Running Gatsby with Node 17

If you are running Node 17 and above, you will likely encounter error when running any of `npm run` commands. The reason is [explained here](https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os) and is known "issue" for this version of Gatsby. From our testing, the best way to solve this issue is to replace commands in `package.json` with the following modification:

```json
    "scripts": {
        "dev": "export NODE_OPTIONS=--openssl-legacy-provider; gatsby develop",
        "build": "export NODE_OPTIONS=--openssl-legacy-provider; gatsby build",
    },
```


### Configuring SDK access

Your site needs to know to what design system to use. This starter provides a simple way of configuring all neccessary information by running the following command:

```
npm run setup
```

This interactive setup will ask for an API key first. Click on your `Supernova profile picture > Profile settings > Authentication` and generate one. Then, select workspace / design system / version you want to use from the interactive shell. Once completed, it will write the following files from which the site draws the configuration:

```
.env.development
.env.production
```

We have added `.gitignore` to ignore those generated files - you should never commit them as they contain your API key!

## Running the project

Once all is set, here are the commands you can use for various purposes

### `npm run dev`

Runs development version of the site with hot-reload enabled. The site can be found at:

```
http://localhost:8000/
```

Additionally, this spins up a GraphQL browser allowing you to browse your data which you can access at:

```
http://localhost:8000/___graphql
```

### `npm run build`

Creates production build that you put on any static hosting service (AWS S3 Bucket, Azure, GCP..)

### `npm run serve`

Runs production server locally with your site hosted on it. Run `npm run build` before you run the serve.

## What's next

As this is still beta, we are working hard on improving it before the first official release. The following are areas we'd like to solve before general release:

- [ ] Better CSS structure, and cleaner styling, likely using SCSS or some other preprocessor
- [ ] Seamless integration with Algolia
- [ ] Several types of rendering modes for each DS elements like tokens or components
- [ ] SEO improvements like dynamic titles, header, descriptions, tw and fb tags and more
- [ ] Fully customizable landing page with multiple options


## Contributions

If you have additional ideas about how to make this project better, let us know by opening an issue! You can also open pull requests if you've worked on improving something yourself and would like to contribute back to the community. 

We will be reviewing feature-pull-requests on case-by-case basis, but in general, we are super open to your new ideas and we welcome them! And finally, thank you for your support! You are an amazing community.

Supernova Engineering Team