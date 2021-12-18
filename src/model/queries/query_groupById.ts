//
//  query_groupById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import QueryAllGroups from "./query_allGroups"

const QueryGroupById = (groupId: string): GatsbyTypes.DocumentationItem | null => {
  let groups = QueryAllGroups()
  for (let group of groups) {
    if (group.id === groupId) {
      return group
    }
  }

  return null
};

export default QueryGroupById;