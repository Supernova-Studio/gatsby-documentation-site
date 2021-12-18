//
//  query_pageById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import QueryAllPages from "./query_allPages"

const QueryPageById = (pageId: string): GatsbyTypes.DocumentationItem => {
  let pages = QueryAllPages()
  for (let page of pages) {
    if (page.id === pageId) {
      return page
    }
  }

  throw new Error(`Unable to query page id ${pageId}`)
};

export default QueryPageById;