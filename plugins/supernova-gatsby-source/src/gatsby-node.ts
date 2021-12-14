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
import { SDKGraphQLBridge } from './qraphql/SDKGraphQLBridge'


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - GraphQL Node Processing

exports.sourceNodes = async ({ actions }: { actions: any }, pluginOptions: SupernovaPluginOptions) => {

  // Create Supernova instance, connect it and create data bridge
  let instance = new Supernova(pluginOptions.apiToken)
  let version = await instance.designSystemVersion(pluginOptions.designSystemId, pluginOptions.designSystemVersionId)
  if (!version) {
    throw Error("Unable to fetch design system version, please provide connect api key, documentation and version id")
  }

  let docs = await version.documentation()
  let bridge = new SDKGraphQLBridge(version, docs)

  // Create all documentation nodes
  let groupResult = await bridge.documentationGroups()
  groupResult.graphQLNodes.forEach(n => actions.createNode(n))

  let pageResult = await bridge.documentationPages(groupResult.sdkObjects)
  pageResult.graphQLNodes.forEach(n => actions.createNode(n))

  let configurationResult = await bridge.documentationConfiguration()
  actions.createNode(configurationResult.graphQLNode)

  return
}