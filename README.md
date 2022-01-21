<img src="https://github.com/Supernova-Studio/gatsby-documentation-site/blob/main/readme-icon.png?raw=true" alt="Supernova + Gatsby Starter Pack" style="max-width:100%; margin-bottom: 20px;" />

# Supernova Gatsby starter design system docs

Create custom design system documentations powered by design system supereditor, [Supernova.io](https://supernova.io). This template provides fully coded, fully customizable, typescript-enabled Gatsby site you can just connect to [Supernova](https://supernova.io), run and start customizing it to your liking!

## Features

This starter implements all functionality you might need for your design systems!

- [x] Full support for all Supernova content blocks, including custom blocks and ability to code your own blocks
- [x] Rendering of design tokens, assets, components, rich text, images + all other elements
- [x] All design is fully responsive
- [x] Integration with editor configuration

And of course, features that makes all developers happy!

- [x] Excellent, extendable code structure
- [x] Fully Typescript-enabled code
- [x] Fully Typescript-enabled Supernova GraphQL binding
- [x] Componentized design
- [x] `npm run dev` and all works out of the box

## Examples

Here are some examples what you get out of the box:

<img src="https://github.com/Supernova-Studio/gatsby-documentation-site/blob/main/readme-example.png?raw=true" alt="Supernova Site Examples" style="max-width:100%; margin-bottom: 20px;" />

## Getting Started 

First, create a design system in Supernova. [here is our official starting guide](https://learn.supernova.io/introduction/getting-started.html) that you can follow.

### Setting up source code
```
$ git clone https://github.com/Supernova-Studio/gatsby-documentation-site.git
$ npm install
```

You can optionally use the Gatsby CLI to achieve the same thing.

```
$ gatsby new my-design-system-docs https://github.com/Supernova-Studio/gatsby-documentation-site
```

### Configuring SDK access

Your site needs to know to what design system to use. This starter provides a simple way of configuring all neccessary information by running the following command:

```
npm run setup
```

This interactive setup will ask for API key first. Click on your `Supernova profile picture > Profile settings > Authentication` and generate one. Then, select workspace / design system / version you want to use from the interactive shell. Once completed, it will write following files from which the site draws the configuration:

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

As this is still beta, we are working on improving it hard before first official release. Following are areas we'd like to solve before general release:

- [ ] Better CSS structure, and cleaner styling, likely using SCSS or some other preprocessor
- [ ] Seamless integration with Algolia
- [ ] Several types of rendering modes for each DS elements like tokens or components
- [ ] SEO improvements like dynamic titles, header, descriptions, tw and fb tags and more


## Contributions

If you have additional ideas how to make this project better, let us know by opening an issue! You can also open pull requests if you worked on improving something yourself and would like to contribute back to the community. 

We will be reviewing feature-pull-requests on case-by-case basis, but in general, we are super open to your new ideas and we welcome them! And finally, thank you for your support! You are an amazing community.

Supernova Engineering Team