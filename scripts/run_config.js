//
//  run_config.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

const { writeFileSync } = require("fs");
const chalk = require("chalk");
const path = require("path");
const inquirer = require("inquirer");
const { Supernova } = require("@supernovaio/supernova-sdk")
const { exit } = require("process")


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Command Runtime

async function configure() {

    // ---- Intro message ---------------------------------------------------
    console.log(`
    
------ ${chalk.cyan("Supernova Interactive Setup")} ⭐

Welcome! This setup will configure everything you need to run this Gatsby site, nice and easy.
You can use any design system you have created with Supernova.io editor. To start, make sure 
you have created workspace and design system first and then proceed with configuration.

Let's start by providing your API key:
    `)

    // ---- API key section ---------------------------------------------------

    console.log(`
The ${chalk.green("API Key")}
    | Go to ${chalk.white.yellow("Profile (top menu) > Settings > Authentication")} and generate one
    `)

    // Inquire for key
    const p1questions = [{
        name: "apiKey",
        message: "Please provide your API Key"
    }];
    let p1data = await inquirer.prompt(p1questions)
    let { apiKey } = p1data

    // Fetch workspaces available to user or throw
    let instance = new Supernova(apiKey)
    let workspaces = null
    try {
        workspaces = await instance.workspaces()
    } catch (error) {
        console.log(`Provided ${chalk.white.redBright("API key is invalid or you are not connected to internet")}. Please run \`npm run setup\` again.`)
        exit(1)
    }
    console.log(`${chalk.green("✓")} API Key valid`)

    // ---- Workspace selection section ---------------------------------------------------

    if (workspaces.length === 0) {
        console.log(`You are not member of any workspace. Create one first and try \`npm run setup\` again.`)
        exit(1)
    }

    // Inquire for workspace
    const p2questions = [{
        type: "list",
        name: "workspaceName",
        message: "Which workspace you would like to use?",
        choices: workspaces.map(w => w.name)
    }];
    let p2data = await inquirer.prompt(p2questions)
    let { workspaceName } = p2data

    console.log(`${chalk.green("✓")} Selected ${workspaceName} as your target workspace`)

    let selectedWorkspace = workspaces.filter(w => w.name === workspaceName)[0]

    // ---- Design System selection section ------------------------------------------------

    designSystems = await selectedWorkspace.designSystems()
    if (designSystems.length === 0) {
        console.log(`Selected workspace doesn't have any design systems. Create one first and try \`npm run setup\` again.`)
        exit(1)
    }

    // Inquire for design system
    const p3questions = [{
        type: "list",
        name: "designSystemName",
        message: `Which design system from ${workspaceName} you would like to use?`,
        choices: designSystems.map(d => d.name)
    }];
    let p3data = await inquirer.prompt(p3questions)
    let { designSystemName } = p3data

    console.log(`${chalk.green("✓")} Selected ${designSystemName} as your target design system`)

    let selectedDesignSystem = designSystems.filter(d => d.name === designSystemName)[0]

    // ---- Version section ----------------------------------------------------------------

    // TODO: Interactive selection? For now, we default to latest version of the editor

    activeVersion = await selectedDesignSystem.activeVersion()
    console.log(`${chalk.green("✓")} Loaded active design system version`)


    // ---- Write to file system -----------------------------------------------------------

    let filePaths = [
        path.join(__dirname, "..", ".env.development"),
        path.join(__dirname, "..", ".env.production")
    ]

    const fileContent = `
# Everything defined inside this file will be made
# available to all gatsby entry points (gatsby-node.js etc.).

# API Token used to access Supernova data
SUPERNOVA_API_TOKEN='${apiKey}'
SUPERNOVA_WORKSPACE_ID='${selectedWorkspace.id}'
SUPERNOVA_DESIGN_SYSTEM_ID='${selectedDesignSystem.id}'
SUPERNOVA_DESIGN_SYSTEM_VERSION_ID='${activeVersion.id}'
    `

    // Write each file
    filePaths.forEach((file) => {
        writeFileSync(file, fileContent, "utf8");
        console.log(`${chalk.green("✓")} Config file ${chalk.yellow(file)} written`);
    });
    console.log(`\n${chalk.green("All set")}! ${chalk.greenBright("npm run dev")} to see your site in action 🚀`)
}

configure()