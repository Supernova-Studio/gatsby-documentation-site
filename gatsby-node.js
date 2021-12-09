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
}