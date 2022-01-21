const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            fallback: {
                crypto: require.resolve('crypto-browserify'),
                stream: require.resolve("stream-browserify")
            },
        },
    })
}

exports.createPages = async({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Generate index page
    const indexPage = path.resolve('./src/templates/TemplatePageIndex.tsx')
    createPage({
        path: `/`,
        component: indexPage,
        context: {},
    })

    // Generate all other pages
    const contentPage = path.resolve('./src/templates/TemplatePageContent.tsx')
    const result = await graphql(`
    query {
        allDocumentationItem {
            nodes {
                id
                slug
                itemType
            }
        }
    }      
    `)

    let items = result.data.allDocumentationItem.nodes
    for (let item of items) {
        if (item.itemType === "Page") {
            createPage({
                path: `${item.slug}`,
                component: contentPage,
                context: {
                    slug: item.slug
                },
                key: item.id
            })
        }
    }
}