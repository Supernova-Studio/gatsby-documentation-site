//
//  query_allItems.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

const QueryAllBlocks = (): Array<SupernovaTypes.DocumentationPageBlock> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllBlocksQuery>(graphql`
    query QueryAllBlocks {
      allDocumentationBlock {
        nodes {
          alignment
          assets {
            assetId
            backgroundColor
            title
            description
            previewUrl
          }
          frames {
            sourceFileId
            sourceFrameId
            sourceFileName
            title
            description
            previewUrl
            backgroundColor
          }
          shortcuts {
            title
            description
            previewUrl
            externalUrl
            internalId
            shortcutType
          }
          backgroundColor
          beginsTypeChain
          blockIds
          blockType
          calloutType
          caption
          code
          codeLanguage
          endsTypeChain
          headingType
          groupId
          height
          id
          key
          packageJSON
          properties {
            alignment
            color
            layout
            markdownUrl
          }
          sandboxData
          sandboxType
          showCode
          showNestedGroups
          size {
            height
            width
          }
          text {
            spans {
              attributes {
                link
                type
              }
              text
            }
          }
          tokenIds
          url
          title
          description
          thumbnailUrl
          columnId
          tableProperties {
            columns {
              id
              width {
                measure
                referencedTokenId
                unit
              }
            }
            showBorders
          }
          variantKey
          block {
            category
            description
            iconUrl
            key
            title
          }
          blockProperties {
            default
            key
            label
            type
            value {
              booleanValue
              colorValue {
                aliasTo
                value
              }
              imageValue {
                assetId
                assetUrl
              }
              numericValue
              stringValue
              typographyValue {
                aliasTo
                value {
                  font {
                    family
                    referencedTokenId
                    subfamily
                  }
                  fontSize {
                    measure
                    referencedTokenId
                    unit
                  }
                  letterSpacing {
                    referencedTokenId
                    measure
                    unit
                  }
                  lineHeight {
                    measure
                    unit
                    referencedTokenId
                  }
                  textCase
                  textDecoration
                  paragraphIndent {
                    measure
                    referencedTokenId
                    unit
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allDocumentationBlock.nodes as any
}

export default QueryAllBlocks
