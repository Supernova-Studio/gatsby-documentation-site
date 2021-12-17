//
//  query_itemsByIds.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby";

const QueryItemsByIds = (ids: Array<string>): Array<GatsbyTypes.DocumentationItem> => {
  const data = useStaticQuery<GatsbyTypes.QueryItemsByIdsQuery>(graphql`
    query QueryItemsByIds {
      allDocumentationItem {
        nodes  {
          id
          slug
          title
          itemType
        }
      }
    }
  `);

  let docItems = data.allDocumentationItem.nodes as Array<GatsbyTypes.DocumentationItem>
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