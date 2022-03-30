//
//  query_allExporterConfigurationProperties.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

const QueryAllExporterConfigurationProperties = (): Array<SupernovaTypes.ExporterConfigurationProperty> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllExporterConfigurationPropertiesQuery>(graphql`
    query QueryAllExporterConfigurationProperties {
      allExporterConfigurationProperty {
        nodes {
          category
          default {
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
                  measure
                  referencedTokenId
                  unit
                }
                lineHeight {
                  referencedTokenId
                  unit
                  measure
                }
                paragraphIndent {
                  measure
                  referencedTokenId
                  unit
                }
                textCase
                textDecoration
              }
            }
          }
          description
          id
          inputType
          isMultiline
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
                textCase
                textDecoration
              }
            }
          }
          values
        }
      }
    }
  `)

  return data.allExporterConfigurationProperty.nodes as any
}

export default QueryAllExporterConfigurationProperties
