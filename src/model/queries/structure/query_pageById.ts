//
//  query_pageById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryAllPages from "./query_allPages"

const QueryPageById = (pageId: string): SupernovaTypes.DocumentationPage => {
  let pages = QueryAllPages()
  for (let page of pages) {
    if (page.id === pageId || page.persistentId === pageId) {
      return page
    }
  }

  throw new Error(`Unable to query page id ${pageId}`)
};

export default QueryPageById;