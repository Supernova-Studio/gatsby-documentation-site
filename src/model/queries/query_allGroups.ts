//
//  query_allPages.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby";

const QueryAllGroups = (): Array<GatsbyTypes.DocumentationItem> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllGroupsQuery>(graphql`
    query QueryAllGroups {
      allDocumentationItem(filter: {
        itemType: {
          eq:"Group"
        }
      }) {
        nodes  {
          id
          slug
          title
          itemType
        }
      }
    }
  `);

  let groups: Array<GatsbyTypes.DocumentationItem> = []
  for (let item of data.allDocumentationItem.nodes) {
    if (item.itemType === "Group") {
      groups.push(item as GatsbyTypes.DocumentationItem)
    }
  }
  return groups
};

export default QueryAllGroups;