//
//  query_allExporterBlocks.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

const QueryAllExporterBlocks = (): Array<SupernovaTypes.ExporterCustomBlock> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllExporterBlockQuery>(graphql`
    query QueryAllExporterBlock {
      allExporterBlock {
        nodes {
          category
          description
          iconUrl
          id
          key
          mode
          properties {
            inputType
            isMultiline
            key
            label
            type
            values
            default {
              booleanValue
              numericValue
              stringValue
              typographyValue {
                aliasTo
                value {
                  textCase
                  textDecoration
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
                    measure
                    referencedTokenId
                    unit
                  }
                  lineHeight {
                    measure
                    referencedTokenId
                    unit
                  }
                  paragraphIndent {
                    measure
                    referencedTokenId
                    unit
                  }
                }
              }
              imageValue {
                assetId
                assetUrl
              }
              colorValue {
                aliasTo
                value
              }
            }
          }
          title
        }
      }
    }
  `)

  return data.allExporterBlock.nodes as any
}

export default QueryAllExporterBlocks
