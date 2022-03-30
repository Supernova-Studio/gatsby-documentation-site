//
//  query_exporterBlockVariantsByBlockId.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryAllExporterBlockVariants from "./query_allExporterBlockVariants"

const QueryExporterBlockVariantsByBlockId = (blockId: string): Array<SupernovaTypes.ExporterCustomBlockVariant> => {
  let variants = QueryAllExporterBlockVariants()
  return variants.filter(v => v.blockKey === blockId)
};

export default QueryExporterBlockVariantsByBlockId;