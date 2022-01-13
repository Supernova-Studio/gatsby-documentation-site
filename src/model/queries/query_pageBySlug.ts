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

const QueryPageBySlug = (slug: string): SupernovaTypes.DocumentationPage | null => {
  let pages = QueryAllPages()
  for (let page of pages) {
    if (page.slug === slug) {
      return page
    }
  }

  return null
};

export default QueryPageBySlug;