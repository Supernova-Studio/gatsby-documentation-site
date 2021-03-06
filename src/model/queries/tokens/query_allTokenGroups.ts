//
//  query_allTokenGroups.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby";
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

const QueryAllTokenGroups = (): Array<SupernovaTypes.TokenGroup> => {

  const data = useStaticQuery<GatsbyTypes.QueryAllGroupTokenQuery>(graphql`
    query QueryAllGroupToken {
        allGroupToken {
            nodes {
                id
                brandId
                tokenType
                name
                description
                isRoot
                parentId
                childrenIds
                subgroupIds
                tokenIds
                path
            }
        }
    }
  `);

  return data.allGroupToken.nodes as any
};

export default QueryAllTokenGroups;

