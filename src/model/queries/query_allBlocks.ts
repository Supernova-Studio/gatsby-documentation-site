//
//  query_allItems.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby";
import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/exports"

const QueryAllBlocks = (): Array<SupernovaTypes.DocumentationPageBlock> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllBlocksQuery>(graphql`
    query QueryAllBlocks {
        allDocumentationBlock {
            nodes {
                alignment
                assets {
                    assetId
                    backgroundColor
                }
                backgroundColor
                beginsTypeChain
                blockIds
                block {
                    category
                    description
                    iconUrl
                    key
                    properties {
                        default
                        key
                        label
                        type
                    }   
                    title
                }
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
            }
        }
    }
  `);

  return data.allDocumentationBlock.nodes as any
};

export default QueryAllBlocks;