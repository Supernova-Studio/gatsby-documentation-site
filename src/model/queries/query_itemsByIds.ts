//
//  query_itemsByIds.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/exports"
import QueryAllItems from "./query_allItems"

const QueryItemsByIds = (ids: Array<string>): Array<SupernovaTypes.DocumentationItem> => {
 
  const docItems = QueryAllItems()
  let items: Array<SupernovaTypes.DocumentationItem> = []
  for (let id of ids) {
    let index = docItems.findIndex(i => i.id === id || i.persistentId === id)
    if (!index) {
      throw new Error(`Unable to bulk-fetch item id ${id}`)
    }
    items.push(docItems[index])
  }
  return items
};

export default QueryItemsByIds;