//
//  queries.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import QueryAllGroups from "./query_allGroups"
import QueryPageBySlug from "./query_pageBySlug"

const QueryFirstPageOfGroup = (groupId: string): GatsbyTypes.DocumentationItem | null => {
  let groups = QueryAllGroups()

  // Find the group we are looking for
  for (let group of groups) {
    if (group.id === groupId) {
        // We have the group, we need to find the page by the slug
        if (group.firstPageSlug) {
            return QueryPageBySlug(group.firstPageSlug)
        } else {
            break
        }
    }
  }

  return null
};

export default QueryFirstPageOfGroup;