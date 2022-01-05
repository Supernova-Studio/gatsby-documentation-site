//
//  query_groupById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/gql_types/SupernovaTypes"
import QueryAllGroups from "./query_allGroups"

const QueryGroupById = (groupId: string): SupernovaTypes.DocumentationGroup => {
  let groups = QueryAllGroups()
  for (let group of groups) {
    if (group.id === groupId || group.persistentId === groupId) {
      return group
    }
  }

  throw new Error(`Unable to query group id ${groupId}`)
};

export default QueryGroupById;