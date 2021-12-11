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
        allDocumentationPage {
            nodes {
                id
                slug
            }
        }
    }      
    `)

    let posts = result.data.allDocumentationPage.nodes
    for (let page of posts) {
        createPage({
            path: `/docs/${page.slug}`,
            component: contentPage,
            context: {
                slug: page.slug
            },
        })
    }
}