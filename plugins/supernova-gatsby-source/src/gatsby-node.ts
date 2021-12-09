
import { Supernova } from '@supernova-studio/supernova-sdk'
import { SupernovaPluginOptions } from './types'
import crypto from 'crypto'

exports.sourceNodes = async ({ actions } : { actions: any}, pluginOptions: SupernovaPluginOptions) => {

  console.log(actions)
  console.log(`loading supernova data plugin with options:`)
  console.log(pluginOptions.apiToken)
  let instance = new Supernova(pluginOptions.apiToken)
  let version = await instance.designSystemVersion(pluginOptions.designSystemId, pluginOptions.designSystemVersionId)
  if (!version) {
    throw Error("Unable to fetch design system version")
  }

  let docs = await version.documentation()
  let pages = await docs.pages()

  // map into these results and create nodes
  for (let page of pages) {
    // Create page node object
    const pageNode = {
      // Required fields
      id: page.id,
      parent: `__SOURCE__`,
      internal: {
        type: `DocumentationPage`,
        contentDigest: null as any,
      },
      children: [],

      // Other fields that you want to query with graphQl
      title: page.title,
      blocks: page.blocks,
      persistentId: page.persistentId,
      type: page.type,
      slug: page.slug,
      userSlug: page.userSlug
    }
    console.log(`adding page`)

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(pageNode))
      .digest(`hex`)

    // Add it to userNode
    pageNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    actions.createNode(pageNode)
  }

  return
}