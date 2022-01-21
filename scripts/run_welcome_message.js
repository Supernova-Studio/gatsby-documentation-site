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
${chalk.green("Welcome to Supernova.io + Gatsby starter")}! Let's set you up, 
so you can customizing building your doc site right away. 

`)

// Show setup information
console.log(`
# 1. To setup project
     - Run ${chalk.yellow.bold("npm run setup")} once and follow instructions
     - Will create configuration file that you can change

# 2. To run project after setup
     - Run ${chalk.yellow.bold("npm run dev")} to start development server
     - Access development server at ${chalk.green("http://localhost:8000")}
     - Access GraphQL debugger at ${chalk.green("http://localhost:8000/___graphql")}

# 3. To build static package you can deploy to S3 etc.
     - Run ${chalk.yellow.bold("npm run build")} to build site
     - Locate static site and its assets at ${chalk.green("./release")}

# 4. To run production site
     - Run ${chalk.yellow.bold("npm run serve")}
     - Locate production version of the site at ${chalk.green("http://localhost:9000")}
`)