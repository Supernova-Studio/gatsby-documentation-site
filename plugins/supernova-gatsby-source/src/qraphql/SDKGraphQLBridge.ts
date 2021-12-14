//
//  SDKGraphQLBridge.ts
//  Supernova Gatsby Source
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { DesignSystemVersion } from "@supernova-studio/supernova-sdk/build/main/sdk/src/core/SDKDesignSystemVersion"
import { Documentation } from "@supernova-studio/supernova-sdk/build/main/sdk/src/core/SDKDocumentation"
import { DocumentationConfiguration } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationConfiguration"
import { DocumentationGroup } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationGroup"
import { DocumentationPage } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationPage"
import { SDKGraphQLObjectConvertor } from "./SDKGraphQLObjectConvertor"


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export class SDKGraphQLBridge {

  // --- Properties

  version: DesignSystemVersion
  documentation: Documentation
  convertor: SDKGraphQLObjectConvertor

  // --- Constructor

  constructor(version: DesignSystemVersion, documentation: Documentation) {
    this.version = version
    this.documentation = documentation
    this.convertor = new SDKGraphQLObjectConvertor()
  }

  // --- Data Bridge

  /** Build and convert SDK documentation pages */
  async documentationPages(groups: Array<DocumentationGroup>): Promise<{
    sdkObjects: Array<DocumentationPage>
    graphQLNodes: Array<any>
  }> {

    let pages = await this.documentation.pages()
    return {
      sdkObjects: pages,
      graphQLNodes: this.convertor.documentationPages(groups, pages)
    }
  }

  /** Build and convert SDK documentation groups */
  async documentationGroups(): Promise<{
    sdkObjects: Array<DocumentationGroup>
    graphQLNodes: Array<any>
  }> {

    let groups = await this.documentation.groups()
    return {
      sdkObjects: groups,
      graphQLNodes: this.convertor.documentationGroups(groups)
    }
  }

  /** Build and convert SDK documentation configuration */
  async documentationConfiguration(): Promise<{
    sdkObject: DocumentationConfiguration
    graphQLNode: any
  }> {
    let configuration = this.documentation.settings
    return {
      sdkObject: configuration,
      graphQLNode: this.convertor.documentationConfiguration(configuration)
    }
  }
}