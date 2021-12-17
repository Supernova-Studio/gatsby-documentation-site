//
//  SDKGraphQLObjectConvertor.ts
//  Supernova Gatsby Source
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { DocumentationConfiguration } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationConfiguration"
import { DocumentationGroup } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationGroup"
import { DocumentationPage } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationPage"

import crypto from 'crypto'
import { UtilsUrls } from "./convenience/UtilsUrls"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Definitions

type NodeInternals = {
  type: string,
  contentDigest: string | null
}

const PARENT_SOURCE: string = "__SOURCE__"


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export class SDKGraphQLObjectConvertor {

  // --- Documentation objects

  documentationPages(sdkGroups: Array<DocumentationGroup>, sdkPages: Array<DocumentationPage>): Array<any> {

    let graphQLNodes: Array<any> = []
    for (let page of sdkPages) {
      const pageNode = {
        id: page.persistentId,
        parent: PARENT_SOURCE,
        internal: this.nodeInternals("DocumentationItem"),
        children: [],
        itemType: page.type,

        slug: UtilsUrls.documentationObjectSlug(page),
        firstPageSlug: UtilsUrls.documentationObjectSlug(page), // Note: For page, first page slug is always the page slug itself
        parentGroupId: page.parent?.id ?? null,
        parentGroupChain: UtilsUrls.groupChainUntilRoot(page),

        title: page.title,
        blockIds: page.blocks.map(b => b.id),
        configuration: { // TODO
          showSidebar: true 
        }
      }
      pageNode.internal.contentDigest = this.nodeDigest(pageNode)
      graphQLNodes.push(pageNode)
    }

    return graphQLNodes
  }

  documentationGroups(sdkGroups: Array<DocumentationGroup>): Array<any> {

    let graphQLNodes: Array<any> = []
    for (let group of sdkGroups) {
      const pageNode = {
        id: group.persistentId,
        parent: PARENT_SOURCE,
        internal: this.nodeInternals("DocumentationItem"),
        children: [],
        itemType: group.type,
      
        slug: UtilsUrls.documentationObjectSlug(group),
        firstPageSlug: UtilsUrls.firstPageObjectSlug(group),
        parentGroupId: group.parent?.id ?? null,
        parentGroupChain: UtilsUrls.groupChainUntilRoot(group),

        subpageIds: group.pages.map(p => p.id),
        subgroupIds: group.subgroups.map(g => g.id),
        subitemIds: group.childrenIds,

        title: group.title,
        isRoot: group.isRoot
      }
      pageNode.internal.contentDigest = this.nodeDigest(pageNode)
      graphQLNodes.push(pageNode)
    }

    return graphQLNodes
  }

  documentationConfiguration(sdkConfiguration: DocumentationConfiguration): any {

    let configurationNode = {
      id: "configuration",
      parent: PARENT_SOURCE,
      internal: this.nodeInternals("DocumentationConfiguration"),
      children: [],
      tabbedNavigation: sdkConfiguration.tabbedNavigation,
      storybookError: sdkConfiguration.storybookError,
      packageJson: sdkConfiguration.packageJson
    }

    configurationNode.internal.contentDigest = this.nodeDigest(configurationNode)
    return configurationNode
  }

  // --- Convenience

  nodeInternals(type: string): NodeInternals {
    return {
      type: type,
      contentDigest: null
    }
  }

  nodeDigest(node: Object): string {
    let content = JSON.stringify(node)
    return crypto.createHash(`md5`).update(content).digest(`hex`)
  }
}