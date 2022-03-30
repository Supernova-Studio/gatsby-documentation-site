//
//  query_allExporterBlockVariants.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

const QueryAllExporterBlockVariants = (): Array<SupernovaTypes.ExporterCustomBlockVariant> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllExporterBlockVariantsQuery>(graphql`
    query QueryAllExporterBlockVariants {
      allExporterBlockVariant {
        nodes {
          blockKey
          isDefault
          id
          name
          variantKey
        }
      }
    }
  `)

  return data.allExporterBlockVariant.nodes as any
}

export default QueryAllExporterBlockVariants
