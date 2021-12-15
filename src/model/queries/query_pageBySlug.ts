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

const QueryPageBySlug = (slug: string): GatsbyTypes.DocumentationItem | null => {
  let pages = QueryAllPages()
  for (let page of pages) {
    if (page.slug === slug) {
      return page
    }
  }

  return null
};

export default QueryPageBySlug;