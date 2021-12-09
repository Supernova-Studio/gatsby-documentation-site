module.exports = {
    client: {
        name: 'supernova-gatsby-starter',
        tagName: 'graphql',
        includes: [
            './src/**/*.{ts,tsx}',
            './src/codegen/gatsby-plugin-documents.graphql',
        ],
        service: {
            name: 'GatsbyJS',
            localSchemaFile: './src/codegen/gatsby-schema.graphql',
        }
    },
}