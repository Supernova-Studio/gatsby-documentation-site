//
//  query_exporterBlockById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryAllExporterBlocks from "./query_allExporterBlocks"

const QueryExporterBlockById = (blockId: string): SupernovaTypes.ExporterCustomBlock => {
  let blocks = QueryAllExporterBlocks()
  for (let block of blocks) {
    if (block.key === blockId) {
      return block
    }
  }

  throw new Error(`Unable to query block id ${blockId}`)
};

export default QueryExporterBlockById;