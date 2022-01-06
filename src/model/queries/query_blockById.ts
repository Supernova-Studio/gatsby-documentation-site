//
//  query_blockById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/exports"
import QueryAllBlocks from "./query_allBlocks"

const QueryBlockById = (blockId: string): SupernovaTypes.DocumentationPageBlock => {
  let blocks = QueryAllBlocks()
  for (let block of blocks) {
    if (block.id === blockId) {
      return block
    }
  }

  throw new Error(`Unable to query block id ${blockId}`)
};

export default QueryBlockById;