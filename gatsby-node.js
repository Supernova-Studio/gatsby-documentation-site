const path = require('path')

exports.createPages = async({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Define a template for blog post
    const indexPage = path.resolve('./src/pages/TemplatePageIndex.tsx')
    createPage({
        path: `/`,
        component: indexPage,
        context: {},
    })
}