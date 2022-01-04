//
//  query_itemsByIds.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/gql_types/SupernovaTypes"
import QueryAllItems from "./query_allItems"

const QueryItemsByIds = (ids: Array<string>): Array<SupernovaTypes.DocumentationItem> => {
 
  const docItems = QueryAllItems()
  let items: Array<SupernovaTypes.DocumentationItem> = []
  for (let id of ids) {
    let index = docItems.findIndex(i => i.id === id)
    if (index) {
      items.push(docItems[index])
    }
  }
  return items
};

export default QueryItemsByIds;