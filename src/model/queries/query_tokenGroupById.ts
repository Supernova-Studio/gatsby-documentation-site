//
//  query_tokenGroupById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryAllTokenGroups from "./query_allTokenGroups"
import QueryAllTokens from "./query_allTokens"

const QueryTokenGroupById = (groupId: string): SupernovaTypes.TokenGroup => {
  let groups = QueryAllTokenGroups()
  for (let group of groups) {
    if (group.id === groupId) {
      return group
    }
  }

  throw new Error(`Unable to query group id ${groupId}`)
};

export default QueryTokenGroupById;