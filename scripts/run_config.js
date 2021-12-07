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
const { Supernova } = require("@supernova-studio/supernova-sdk")
const { exit } = require("process")


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Command Runtime

async function configure() {

    // Intro message
    console.log(`
    
------ ${chalk.cyan("Supernova Interactive Setup")} ⭐

This setup will automatically connect your documentation site with this gatsby instance. 
You can use any documentation that you have created with Supernova.io editor. 
To start, make sure you have created workspace and design system first 
and then continue with this process.

To obtain the information you will be asked for:

The ${chalk.green("API Key")}
    | Go to ${chalk.white.yellow("Settings (left bar) > API Keys")} and generate one

The ${chalk.green("Workspace Handle")}
    | Go to your workspace > copy handle after "ws" path piece
    | For example: ${chalk.white.yellow("https://cloud.supernova.io/ws/rockets/...")} > your handle is ${chalk.white.yellow("ws")}

The ${chalk.green("Design System ID")}
    | Go to your design system > copy id after "ds" path piece
    | For example: ${chalk.white.yellow("https://cloud.supernova.io/ws/rockets/ds/1234-falcon...")} > your id is ${chalk.white.yellow("1234")}
    
Have all the info? Let's get you configured.
    `);

    // Prepare list of questions for the user
    const questions = [{
            name: "apiKey",
            message: "Your API Key"
        },
        {
            name: "workspaceHandle",
            message: "Your Workspace Handle",
        },
        {
            name: "designSystemId",
            message: "Design System Id",
        }
    ];

    // Fire of the question / answer sequence
    let data = await inquirer.prompt(questions)
    let error, workspace, designSystem, version = null
    let { apiKey, workspaceHandle, designSystemId } = data

    // Test from the user entry and retrieve proper data by fetching the workspace and design system
    try {
        let instance = new Supernova(apiKey)
        let workspaces = await instance.workspaces()
        console.log(`\n${chalk.green("✓")} API Key valid`)

        if (workspaces.length === 0) {
            throw Error(`Your profile doesn't have any workspace associted with it. Create the workspace first at cloud.supernova.io or get invited into already existing one before retrying this setup`)
        }
        let filteredWorkspaces = workspaces.filter(w => w.handle === workspaceHandle)
        if (filteredWorkspaces.length === 0) {
            throw Error(`Your profile is not associated with workspace under handle '${workspaceHandle}'`)
        }
        workspace = filteredWorkspaces[0]
        console.log(`${chalk.green("✓")} Workspace valid`)

        let designSystems = await workspace.designSystems()
        if (designSystems.length === 0) {
            throw Error(`Workspace ${workspace.name} doesn't have any design systems created just yet. Create design system first and run setup again!`)
        }
        let filteredDesignSystems = designSystems.filter(d => d.id === designSystemId)
        if (filteredDesignSystems.length === 0) {
            throw Error(`There is no design system for id ${designSystemId} registered under workspace ${workspace.name}`)
        }
        designSystem = filteredDesignSystems[0]
        console.log(`${chalk.green("✓")} Design System valid`)

        version = await designSystem.activeVersion()
        console.log(`${chalk.green("✓")} Design System version loaded and valid`)
    } catch (e) {
        // Error out for eny error encountered
        console.error(`Error encountered, aborting setup`)
        console.error(`${e}`)
        exit(1)
    }
    // sn.ZTE3XrTgJ7mQQ67z6n4GO1dcT9QyZ8wG1zNU249ql47oFLj6xdz0T69xuVrt39o8DkR3ywSCb22DrsslQ2daWpYgOkLCF1ri
    // Build configuration file for development and production envs
    let filePaths = [
        path.join(__dirname, "..", ".env.development"),
        path.join(__dirname, "..", ".env.production")
    ]

    const fileContent = `
# Everything defined inside this file will be made
# available to all gatsby entry points (gatsby-node.js etc.).

# API Token used to access Supernova data
SUPERNOVA_API_TOKEN='${apiKey}'
SUPERNOVA_WORKSPACE_ID='${workspace.id}'
SUPERNOVA_DESIGN_SYSTEM_ID='${designSystem.id}'
SUPERNOVA_DESIGN_SYSTEM_VERSION_ID='${version.id}'
    `

    // Write each file
    filePaths.forEach((file) => {
        writeFileSync(file, fileContent, "utf8");
        console.log(`${chalk.green("✓")} Config file ${chalk.yellow(file)} written`);
    });
    console.log(`\n${chalk.green("All set")}! Run or build your site with data from your connected design system 🚀`)
}

configure()