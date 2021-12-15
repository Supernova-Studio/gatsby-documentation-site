const path = require('path')

exports.createPages = async({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Generate index page
    const indexPage = path.resolve('./src/pages/TemplatePageIndex.tsx')
    createPage({
        path: `/`,
        component: indexPage,
        context: {},
    })

    // Generate all other pages
    const contentPage = path.resolve('./src/pages/TemplatePageContent.tsx')
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
                path: `/docs/${item.slug}`,
                component: contentPage,
                context: {
                    slug: item.slug
                },
            })
        }
    }
}