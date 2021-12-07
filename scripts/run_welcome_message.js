//
//  run_welcome_message.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

const chalk = require("chalk");


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Command Runtime

// Show welcome information
console.log(`
${chalk.green("Welcome to Supernova.io demo")} of design system documentation 
running on Gatsby. In order to use this project, you must first setup your
API access and then you are free to modify it to your liking!

`)

// Show setup information
console.log(`
# 1. To setup project
     - Run ${chalk.yellow.bold("npm run setup")} once
     - Will create configuration file that you can change

# 2. To run project after setup
     - Run ${chalk.yellow.bold("npm run dev")} to start development server
     - Access development server at ${chalk.green("http://localhost:8000")}
     - Access GraphQL debugger at ${chalk.green("http://localhost:8000/___graphql")}

# 3. To build production site
     - Run ${chalk.yellow.bold("npm run build")} to build site
     - Locate static site and its assets at ${chalk.green("./release")}

# 4. To release production site
     - TODO
`)