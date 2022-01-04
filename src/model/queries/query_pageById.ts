//
//  query_pageById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/gql_types/SupernovaTypes"
import QueryAllPages from "./query_allPages"

const QueryPageById = (pageId: string): SupernovaTypes.DocumentationItem => {
  let pages = QueryAllPages()
  for (let page of pages) {
    if (page.id === pageId) {
      return page
    }
  }

  throw new Error(`Unable to query page id ${pageId}`)
};

export default QueryPageById;