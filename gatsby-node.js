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

    // Generate documentation landing page
    const indexPage = path.resolve('./src/templates/LandingPageContent.tsx')
    createPage({
        path: `/`,
        component: indexPage,
        context: {},
    })

    // Fetch all documentation items which are of page type
    // We are only interested in very basic structure
    const contentPage = path.resolve('./src/templates/TemplatePageContent.tsx')
    const result = await graphql(`
    query {
        allDocumentationItem(filter: {itemType: {eq: "Page"}}) {
            nodes {
                id
                slug
                itemType
            }
        }
    }
    `)

    // Construct page out of each item
    let items = result.data.allDocumentationItem.nodes
    for (let item of items) {
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