require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

// Construct required Supernova config. Config can be constructed using interactive setup
const supernovaConfig = {
    apiToken: process.env.SUPERNOVA_API_TOKEN,
    workspaceId: process.env.SUPERNOVA_WORKSPACE_ID,
    designSystemId: process.env.SUPERNOVA_DESIGN_SYSTEM_ID,
    designSystemVersionId: process.env.SUPERNOVA_DESIGN_SYSTEM_VERSION_ID
};

const { apiToken, workspaceId, designSystemId, designSystemVersionId } = supernovaConfig;

if (!apiToken || !workspaceId || !designSystemId || !designSystemVersionId) {
    throw new Error(
        "Supernova apiToken, workspaceId, designSystemId and designSystemVersionId must be provided."
    );
}

module.exports = {
    pathPrefix: "/gatsby-supernova-starter",
    siteMetadata: {
        title: "Supernova DS Documentation Starter",
        description: "Official Supernova Design System Documentation Starter for Gatsby",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-typegen",
            options: {
                outputPath: `types/index.d.ts`,
                emitSchema: {
                    'src/codegen/gatsby-introspection.json': true,
                },
                emitPluginDocuments: {
                    'src/codegen/gatsby-plugin-documents.graphql': true,
                },
            }
        },
        {
            resolve: "./plugins/supernova-gatsby-source",
            options: supernovaConfig,
        },
        {
            resolve: "gatsby-plugin-load-script",
            options: {
                src: "https://code.jquery.com/jquery-3.6.0.min.js",
                integrity: "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=",
                crossorigin: "anonymous",
                async: false,
            }
        },
        {
            resolve: "gatsby-plugin-load-script",
            options: {
                src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js",
                async: false,
            }
        },
        {
            resolve: "gatsby-plugin-load-script",
            options: {
                src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js",
                async: false,
            }
        },
        {
            resolve: "gatsby-plugin-load-script",
            options: {
                src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/normalize-whitespace/prism-normalize-whitespace.min.js",
                async: false,
            }
        }
    ],
};