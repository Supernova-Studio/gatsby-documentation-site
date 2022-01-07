
//
//  query_allTokens.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby";
import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/exports"

const QueryAllTokens = (): Array<SupernovaTypes.Token> => {

  const data = useStaticQuery<GatsbyTypes.QueryAllTokensQuery>(graphql`
    query QueryAllTokens {
        allToken {
            nodes {
            brandId
            description
            id
            name
            origin {
                id
                name
                source
            }
            properties {
                booleanValue
                codeName
                name
                numericValue
                stringValue
                type
            }
            tokenType
            value {
                a
                aspectRatio
                b
                bottomLeft {
                measure
                referencedTokenId
                unit
                }
                bottomRight {
                measure
                referencedTokenId
                unit
                }
                color {
                a
                b
                g
                hex
                r
                referencedTokenId
                }
                family
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
                from {
                x
                y
                }
                g
                hex
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
                measure
                opacity
                paragraphIndent {
                measure
                referencedTokenId
                unit
                }
                position
                r
                radius {
                measure
                referencedTokenId
                unit
                }
                referencedTokenId
                spread {
                measure
                referencedTokenId
                unit
                }
                stops {
                color {
                    a
                    b
                    g
                    hex
                    r
                    referencedTokenId
                }
                position
                referencedTokenId
                }
                subfamily
                text
                textCase
                textDecoration
                to {
                x
                y
                }
                topLeft {
                referencedTokenId
                measure
                unit
                }
                topRight {
                measure
                referencedTokenId
                unit
                }
                type
                unit
                width {
                measure
                referencedTokenId
                unit
                }
                x {
                measure
                referencedTokenId
                unit
                }
                y {
                measure
                referencedTokenId
                unit
                }
            }
            }
        }
        }

  `);

  return data.allToken.nodes as any
};

export default QueryAllTokens;

