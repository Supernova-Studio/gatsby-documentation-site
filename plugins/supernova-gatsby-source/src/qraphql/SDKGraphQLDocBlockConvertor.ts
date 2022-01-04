//
//  SDKGraphQLDocBlockConvertor.ts
//  Supernova Gatsby Source
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { DocumentationPage } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationPage"
import { DocumentationPageBlock } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationPageBlock"
import { DocumentationPageBlockType } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/enums/SDKDocumentationPageBlockType"
import { DocumentationPageBlockText } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockText"
import { DocumentationPageBlockHeading } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockHeading"
import { DocumentationPageBlockCode } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockCode"
import { DocumentationPageUnorderedList } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockUnorderedList"
import { DocumentationPageOrderedList } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockOrderedList"
import { DocumentationPageBlockQuote } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockQuote"
import { DocumentationPageBlockCallout } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockCallout"
import { DocumentationPageBlockDivider } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockDivider"
import { DocumentationPageBlockImage } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockImage"
import { DocumentationPageBlockToken } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockToken"
import { DocumentationPageBlockTokenList } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockTokenList"
import { DocumentationPageBlockTokenGroup } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockTokenGroup"
import { DocumentationPageBlockShortcuts } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockShortcuts"
import { DocumentationPageBlockShortcut } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockShortcut"
import { DocumentationPageBlockEmbedLink } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockEmbedLink"
import { DocumentationPageBlockEmbedFigma } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockEmbedFigma"
import { DocumentationPageBlockEmbedYoutube } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockEmbedYoutube"
import { DocumentationPageBlockEmbedStorybook } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockEmbedStorybook"
import { DocumentationPageBlockEmbedGeneric } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockEmbedGeneric"
import { DocumentationPageBlockFrames } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockFrames"
import { DocumentationPageBlockFrame } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockFrame"
import { DocumentationPageBlockRenderCode } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockRenderCode"
import { DocumentationPageBlockCustom } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockCustom"
import { DocumentationPageBlockAssets } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockAssets"
import { DocumentationPageBlockAsset } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/blocks/SDKDocumentationPageBlockAsset"

import { PARENT_SOURCE, SDKGraphQLObjectConvertor } from "./SDKGraphQLObjectConvertor"
import { DocumentationRichText } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/SDKDocumentationRichText"
import { Size } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/support/SDKSize"
import { FrameLayout } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/enums/SDKFrameLayout"
import { DocumentationCustomBlock } from "@supernova-studio/supernova-sdk/build/main/sdk/src/model/documentation/custom_blocks/SDKDocumentationCustomBlock"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Definitions

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Convertor

export class SDKGraphQLDocBlockConvertor {

  // --- Documentation blocks conversion

  documentationPageBlocks(sdkPage: DocumentationPage): Array<any> {

    let graphQLNodes: Array<any> = []
    let blocks = this.flattenedBlocksOfPage(sdkPage)
    for (let block of blocks) {
        graphQLNodes.push(this.convertBlockToGraphQL(block))
    }

    console.log(graphQLNodes)
    return graphQLNodes
  }

  convertBlockToGraphQL(block: DocumentationPageBlock): any {

    // Convert base information about blocks
    const blockDescription = {
        id: block.id,
        parent: PARENT_SOURCE,
        internal: SDKGraphQLObjectConvertor.nodeInternals("DocumentationBlock"),
        children: [],
        beginsTypeChain: block.beginsTypeChain,
        endsTypeChain: block.endsTypeChain,
        blockIds: block.children.map(b => b.id),
        configuration: { // TODO
          showSidebar: true 
        }
    } as any
      
    // Convert and write block-unique attributes
    let blockSpecificAttributes = this.convertBlockDetailsToGraphQL(block)
    for (let [key, value] of Object.entries(blockSpecificAttributes)) {
      blockDescription[key] = value
    }

    // Checksum
    blockDescription.internal.contentDigest = SDKGraphQLObjectConvertor.nodeDigest(blockDescription)

    return blockDescription
  }
  
  // --- Block specifics
  
  convertBlockDetailsToGraphQL(block: DocumentationPageBlock): Object {

    switch (block.type) {
      case DocumentationPageBlockType.text:
        return this.convertBlockTextDetailsToGraphQL(block as DocumentationPageBlockText)
      case DocumentationPageBlockType.heading:
        return this.convertBlockHeadingDetailsToGraphQL(block as DocumentationPageBlockHeading)
      case DocumentationPageBlockType.code:
        return this.convertBlockCodeDetailsToGraphQL(block as DocumentationPageBlockCode)
      case DocumentationPageBlockType.unorderedList:
        return this.convertBlockUnorderedListDetailsToGraphQL(block as DocumentationPageUnorderedList)
      case DocumentationPageBlockType.orderedList:
        return this.convertBlockOrderedListDetailsToGraphQL(block as DocumentationPageOrderedList)
      case DocumentationPageBlockType.quote:
        return this.convertBlockQuoteDetailsToGraphQL(block as DocumentationPageBlockQuote)
      case DocumentationPageBlockType.callout:
        return this.convertBlockCalloutDetailsToGraphQL(block as DocumentationPageBlockCallout)
      case DocumentationPageBlockType.divider:
        return this.convertBlockDividerDetailsToGraphQL(block as DocumentationPageBlockDivider)
      case DocumentationPageBlockType.image:
        return this.convertBlockImageDetailsToGraphQL(block as DocumentationPageBlockImage)
      case DocumentationPageBlockType.token:
        return this.convertBlockTokenDetailsToGraphQL(block as DocumentationPageBlockToken)
      case DocumentationPageBlockType.tokenList:
        return this.convertBlockTokenListDetailsToGraphQL(block as DocumentationPageBlockTokenList)
      case DocumentationPageBlockType.tokenGroup:
        return this.convertBlockTokenGroupDetailsToGraphQL(block as DocumentationPageBlockTokenGroup)
      case DocumentationPageBlockType.shortcuts:
        return this.convertBlockShortcutsDetailsToGraphQL(block as DocumentationPageBlockShortcuts)
      case DocumentationPageBlockType.link:
        return this.convertBlockLinkDetailsToGraphQL(block as DocumentationPageBlockEmbedLink)
      case DocumentationPageBlockType.figmaEmbed:
        return this.convertBlockFigmaEmbedDetailsToGraphQL(block as DocumentationPageBlockEmbedFigma)
      case DocumentationPageBlockType.youtubeEmbed:
        return this.convertBlockYoutubeEmbedDetailsToGraphQL(block as DocumentationPageBlockEmbedYoutube)
      case DocumentationPageBlockType.storybookEmbed:
        return this.convertBlockStorybookEmbedDetailsToGraphQL(block as DocumentationPageBlockEmbedStorybook)
      case DocumentationPageBlockType.genericEmbed:
        return this.convertBlockGenericEmbedDetailsToGraphQL(block as DocumentationPageBlockEmbedGeneric)
      case DocumentationPageBlockType.figmaFrames:
        return this.convertBlockFigmaFramesDetailsToGraphQL(block as DocumentationPageBlockFrames)
      case DocumentationPageBlockType.custom:
        return this.convertBlockCustomDetailsToGraphQL(block as DocumentationPageBlockCustom)
      case DocumentationPageBlockType.renderCode:
        return this.convertBlockRenderCodeDetailsToGraphQL(block as DocumentationPageBlockRenderCode)
      case DocumentationPageBlockType.componentAssets:
        return this.convertBlockComponentAssetsDetailsToGraphQL(block as DocumentationPageBlockAssets)
    }
  }

  convertBlockTextDetailsToGraphQL(block: DocumentationPageBlockText): Object {
    return {
      text: this.convertRichText(block.text)
    }
  }

  convertBlockHeadingDetailsToGraphQL(block: DocumentationPageBlockHeading): Object {
    return {
      headingType: block.headingType,
      text: this.convertRichText(block.text)
    }
  }

  convertBlockCodeDetailsToGraphQL(block: DocumentationPageBlockCode): Object {
    return {
      codeLanguage: block.codeLanguage,
      caption: block.caption,
      text: this.convertRichText(block.text)
    }
  }

  convertBlockUnorderedListDetailsToGraphQL(block: DocumentationPageUnorderedList): Object {
    return {
      text: this.convertRichText(block.text)
    }
  }

  convertBlockOrderedListDetailsToGraphQL(block: DocumentationPageOrderedList): Object {
    return {
      text: this.convertRichText(block.text)
    }
  }

  convertBlockQuoteDetailsToGraphQL(block: DocumentationPageBlockQuote): Object {
    return {
      text: this.convertRichText(block.text)
    }
  }

  convertBlockCalloutDetailsToGraphQL(block: DocumentationPageBlockCallout): Object {
    return {
      calloutType: block.calloutType,
      text: this.convertRichText(block.text)
    }
  }

  convertBlockDividerDetailsToGraphQL(block: DocumentationPageBlockDivider): Object {
    return {}
  }

  convertBlockImageDetailsToGraphQL(block: DocumentationPageBlockImage): Object {
    return {
      url: block.url ?? null,
      caption: block.caption ?? null,
      alignment: block.alignment
    }
  }

  convertBlockTokenDetailsToGraphQL(block: DocumentationPageBlockToken): Object {
    return {
      tokenId: block.tokenId ?? null
    }
  }

  convertBlockTokenListDetailsToGraphQL(block: DocumentationPageBlockTokenList): Object {
    return {
      tokenIds: block.tokenIds
    }
  }

  convertBlockTokenGroupDetailsToGraphQL(block: DocumentationPageBlockTokenGroup): Object {
    return {
      groupId: block.groupId ?? null,
      showNestedGroup: block.showNestedGroups
    }
  }

  convertBlockShortcutsDetailsToGraphQL(block: DocumentationPageBlockShortcuts): Object {
    return {
      shortcuts: block.shortcuts.map(s => this.convertBlockShortcutDetailsToGraphQL(s as DocumentationPageBlockShortcut)) // TODO: Fix incorrect type in SDK so it doesn't have to be enforced
    }
  }
  
  convertBlockShortcutDetailsToGraphQL(shortcut: DocumentationPageBlockShortcut): Object {
    return {
      title: shortcut.title ?? null,
      description: shortcut.description ?? null,
      previewUrl: shortcut.previewUrl ?? null,
      externalUrl: shortcut.externalUrl ?? null,
      internalId: shortcut.internalId ?? null,
      type: shortcut.type
    }
  }

  convertBlockLinkDetailsToGraphQL(block: DocumentationPageBlockEmbedLink): Object {
    return {
      title: block.title ?? null,
      description: block.description ?? null,
      thumbnailUrl: block.thumbnailUrl ?? null,
      url: block.url ?? null,
      size: this.convertSize(block.size),
      caption: block.caption ?? null
    }
  }

  convertBlockFigmaEmbedDetailsToGraphQL(block: DocumentationPageBlockEmbedFigma): Object {
    return {
      url: block.url ?? null,
      size: this.convertSize(block.size),
      caption: block.caption ?? null
    }
  }

  convertBlockYoutubeEmbedDetailsToGraphQL(block: DocumentationPageBlockEmbedYoutube): Object {
    return {
      url: block.url ?? null,
      size: this.convertSize(block.size),
      caption: block.caption ?? null
    }
  }

  convertBlockStorybookEmbedDetailsToGraphQL(block: DocumentationPageBlockEmbedStorybook): Object {
    return {
      url: block.url ?? null,
      size: this.convertSize(block.size),
      caption: block.caption ?? null
    }
  }

  convertBlockGenericEmbedDetailsToGraphQL(block: DocumentationPageBlockEmbedGeneric): Object {
    return {
      url: block.url ?? null,
      size: this.convertSize(block.size),
      caption: block.caption ?? null
    }
  }

  convertBlockFigmaFramesDetailsToGraphQL(block: DocumentationPageBlockFrames): Object {
    return {
      frames: block.frames.map(f => this.convertBlockFigmaFrameDetailsToGraphQL(f)),
      properties: {
          color: block.properties.color ?? null,
          alignment: block.properties.alignment ?? null,
          layout: block.properties.layout,
      }
    }
  }

  convertBlockFigmaFrameDetailsToGraphQL(block: DocumentationPageBlockFrame): Object {
    return {
      sourceFileId: block.sourceFileId ?? null,
      sourceFrameId: block.sourceFrameId ?? null,
      sourceFileName: block.sourceFileName ?? null,
      title: block.title ?? null,
      description: block.description ?? null,
      previewUrl: block.previewUrl ?? null,
      backgroundColor: block.backgroundColor ?? null
    }
  }

  convertBlockCustomDetailsToGraphQL(block: DocumentationPageBlockCustom): Object {
    return {
      key: block.key,
      properties: block.properties,
      block: block.block
    }
  }

  convertBlockCustomDefinitionBlockToGraphQL(block: DocumentationCustomBlock): Object {
    return {
      key: block.key,
      title: block.title,
      description: block.description,
      category: block.category,
      iconUrl: block.iconUrl ?? null,
      mode: block.mode,
      properties: block.properties.map(p => {
        return {
          key: p.key,
          label: p.label,
          default: p.default,
          values: p.values,
          type: p.type
        }
      })
    }
  }

  convertBlockRenderCodeDetailsToGraphQL(block: DocumentationPageBlockRenderCode): Object {
    return {
      alignment: block.alignment,
      backgroundColor: block.backgroundColor ?? null,
      showCode: block.showCode,
      code: block.code,
      packageJSON: block.packageJSON,
      height: block.height ?? null,
      sandboxData: block.sandboxData,
      sandboxType: block.sandboxType
    }
  }

  convertBlockComponentAssetsDetailsToGraphQL(block: DocumentationPageBlockAssets): Object {
    return {
      assets: block.assets.map(a => this.convertBlockAssetDetailsToGraphQL(a)),
      properties: {
          color: block.properties.color ?? null,
          alignment: block.properties.alignment ?? null,
          layout: block.properties.layout,
      }
    }
  }

  convertBlockAssetDetailsToGraphQL(block: DocumentationPageBlockAsset): Object {
    return {
      assetId: block.assetId,
      title: block.title ?? null,
      description: block.description ?? null,
      previewUrl: block.previewUrl ?? null,
      backgroundColor: block.backgroundColor ?? null
    }
  }
  
  // --- Subconversions

  convertRichText(richText: DocumentationRichText): Object {

    // Replicate raw rich text structure
    return {
      spans: richText.spans.map(s => {
          return {
            text: s.text,
            attributes: s.attributes.map(a => {
              return {
                link: a.link ?? null,
                type: a.type
              }
            })
          }
        }
      )
    }
  }

  convertSize(size: Size | null): Object {

    if (size) {
      return {
        width: size.width ?? null,
        height: size.height ?? null
      }
    } else {
      return {
        width: null, height: null
      } 
    }
  }
  
  // --- Convenience

  flattenedBlocksOfPage(page: DocumentationPage): Array<DocumentationPageBlock> {

    let blocks: Array<DocumentationPageBlock> = []
    for (let block of page.blocks) {
        blocks = blocks.concat(this.flattenedBlocksOfBlock(block))
    }
    return blocks
  }

  flattenedBlocksOfBlock(block: DocumentationPageBlock): Array<DocumentationPageBlock> {

    let blocks: Array<DocumentationPageBlock> = [block]
    for (let child of block.children) {
        blocks = blocks.concat(this.flattenedBlocksOfBlock(child))
    } 
    return blocks
  }
}