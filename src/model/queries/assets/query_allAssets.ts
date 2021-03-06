//
//  query_allAssets.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby";
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

const QueryAllAssets = (): Array<SupernovaTypes.Asset> => {

  const data = useStaticQuery<GatsbyTypes.QueryAllAssetsQuery>(graphql`
    query QueryAllAssets {
        allAsset {
            nodes {
                id
                brandId
                thumbnailUrl
                name
                description
                componentId
                previouslyDuplicatedNames
            }
        }
    }
  `);

  return data.allAsset.nodes as any
};

export default QueryAllAssets;