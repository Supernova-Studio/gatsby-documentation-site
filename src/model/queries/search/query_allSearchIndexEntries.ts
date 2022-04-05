//
//  query_allSearchIndexEntries.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

const QueryAllSearchEntries = (): Array<SupernovaTypes.SearchIndexEntry> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllSearchEntriesQuery>(graphql`
    query QueryAllSearchEntries {
      allSearchIndexEntry {
        nodes {
          id
          origin {
            blockId
            groupId
            blockType
            pageId
            type
          }
          text
        }
      }
    }
  `)

  return data.allSearchIndexEntry.nodes as any
}

export default QueryAllSearchEntries
