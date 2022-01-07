//
//  SDKGraphQLObjectConvertor.ts
//  Supernova Gatsby Source
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { Supernova } from '@supernova-studio/supernova-sdk'
import { SupernovaPluginOptions } from './types'
import { SDKGraphQLBridge } from './gql/SDKGraphQLBridge'


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - GraphQL Node Processing

exports.sourceNodes = async ({ actions }: { actions: any }, pluginOptions: SupernovaPluginOptions) => {

  // Create Supernova instance, connect it and create data bridge
  let instance = new Supernova(pluginOptions.apiToken, null, null)
  // let designSystem = await instance.designSystem(pluginOptions.designSystemId)
  
  let version = await instance.designSystemVersion(pluginOptions.designSystemId, pluginOptions.designSystemVersionId)
  if (!version) {
    throw Error("Unable to fetch design system version, please provide connect api key, documentation and version id")
  }

  let docs = await version.documentation()
  let bridge = new SDKGraphQLBridge(version, docs)

  // Create all documentation nodes
  let groupResult = await bridge.documentationGroups()
  console.log(groupResult.graphQLNodes)
  groupResult.graphQLNodes.forEach(n => actions.createNode(n))

  let pageResult = await bridge.documentationPages(groupResult.sdkObjects)
  console.log(pageResult.graphQLNodes)
  pageResult.graphQLNodes.forEach(n => actions.createNode(n))

  let blockResult = await bridge.documentationBlocks(pageResult.sdkObjects)
  blockResult.graphQLNodes.forEach(n => actions.createNode(n))

  let assetResult = await bridge.assets()
  assetResult.graphQLNodes.forEach(n => actions.createNode(n))

  let configurationResult = await bridge.documentationConfiguration()
  actions.createNode(configurationResult.graphQLNode)

  return
}

exports.createSchemaCustomization = ({ actions }: { actions: any }) => {

  const { createTypes } = actions
  const typeDefs = `
    type DocumentationBlock implements Node @dontInfer {
      beginsTypeChain: Boolean!
      endsTypeChain: Boolean!
      blockIds: [String]!
      blockType: String!
      groupId: String
      showNestedGroups: Boolean
      text: DocumentationBlockText
      calloutType: String
      headingType: Int
      assets: [DocumentationBlockAsset]
      properties: DocumentationBlockProperties
      url: String
      size: Size
      caption: String
      codeLanguage: String
      alignment: String
      key: String
      block: DocumentationCustomBlock
      backgroundColor: String
      showCode: Boolean
      code: String
      packageJSON: String
      height: Int
      sandboxData: String
      sandboxType: String
      tokenIds: [String]
    }

    type DocumentationBlockText @dontInfer {
      spans: [DocumentationBlockTextSpan]
    }

    type DocumentationBlockTextSpan @dontInfer {
      text: String
      attributes: [DocumentationBlockTextSpansAttribute]
    }

    type DocumentationBlockTextSpansAttribute @dontInfer {
      link: String
      type: String
    }

    type DocumentationBlockAsset @dontInfer {
      assetId: String!
      title: String
      description: String
      backgroundColor: String
      previewUrl: String
    }

    type DocumentationBlockProperties @dontInfer {
      color: String
      alignment: String
      layout: String
      markdownUrl: String
    }

    type Size @dontInfer {
      width: Int
      height: Int
    }

    type DocumentationCustomBlock @dontInfer {
      key: String!
      title: String!
      category: String
      description: String
      iconUrl: String
      properties: [DocumentationCustomBlockProperty]
    }

    type DocumentationCustomBlockProperty @dontInfer {
      label: String
      key: String
      type: String
      default: String
    }

    type Asset implements Node @dontInfer {
      brandId: String!
      thumbnailUrl: String
      name: String
      description: String
      componentId: String
      previouslyDuplicatedNames: Int
    }
  `

  createTypes(typeDefs)
}