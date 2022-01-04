//
//  query_rootGroup.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/gql_types/SupernovaTypes"
import QueryAllGroups from "./query_allGroups"

const QueryRootGroup = (): SupernovaTypes.DocumentationGroup | null => {
  let groups = QueryAllGroups()

  // Find the group we are looking for
  for (let group of groups) {
    if (group.isRoot) {
        return group
    }
  }

  return null
};

export default QueryRootGroup;