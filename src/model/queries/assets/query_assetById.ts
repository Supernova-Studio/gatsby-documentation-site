//
//  query_assetById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryAllAssets from "./query_allAssets"

const QueryAssetById = (assetId: string): SupernovaTypes.Asset => {
  let assets = QueryAllAssets()
  for (let asset of assets) {
    if (asset.id === assetId) {
      return asset
    }
  }

  throw new Error(`Unable to query asset id ${assetId}`)
};

export default QueryAssetById;