//
//  query_exporterConfigurationPropertyById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryAllExporterConfigurationProperties from "./query_allExporterConfigurationProperties"

const QueryExporterConfigurationPropertyById = (propertyId: string): SupernovaTypes.ExporterConfigurationProperty => {
  let properties = QueryAllExporterConfigurationProperties()
  for (let property of properties) {
    if (property.key === propertyId) {
      return property
    }
  }

  throw new Error(`Unable to query configuration property id ${propertyId}`)
};

export default QueryExporterConfigurationPropertyById;