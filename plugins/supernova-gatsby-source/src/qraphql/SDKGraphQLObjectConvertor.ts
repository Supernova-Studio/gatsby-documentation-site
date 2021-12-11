//
//  SDKGraphQLObjectConvertor.ts
//  Supernova Gatsby Source
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

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
        id: page.id,
        parent: PARENT_SOURCE,
        internal: this.nodeInternals("DocumentationPage"),
        children: [],
        title: page.title,
        blocks: page.blocks,
        slug: UtilsUrls.pageSlug(page),
        parentGroupId: page.parent?.id ?? null
      }
      pageNode.internal.contentDigest = this.nodeDigest(pageNode)
      graphQLNodes.push(pageNode)
    }

    return graphQLNodes
  }

  documentationGroups(sdkGroups: Array<DocumentationGroup>): Array<any> {

    // TODO: groups
    let graphQLNodes: Array<any> = []
    return graphQLNodes
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