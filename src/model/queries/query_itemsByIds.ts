//
//  query_itemsByIds.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import QueryAllItems from "./query_allItems"

const QueryItemsByIds = (ids: Array<string>): Array<GatsbyTypes.DocumentationItem> => {
 
  const docItems = QueryAllItems()
  let items: Array<GatsbyTypes.DocumentationItem> = []
  for (let id of ids) {
    let index = docItems.findIndex(i => i.id === id)
    if (index) {
      items.push(docItems[index])
    }
  }
  return items
};

export default QueryItemsByIds;