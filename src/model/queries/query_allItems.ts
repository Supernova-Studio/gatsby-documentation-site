//
//  query_allItems.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby";

const QueryAllItems = (): Array<GatsbyTypes.DocumentationItem> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllItemsQuery>(graphql`
    query QueryAllItems {
      allDocumentationItem {
        nodes {
            id
            slug
            title
            itemType
            firstPageSlug
            blockIds
            isRoot
            parentGroupChain
            parentGroupId
            subgroupIds
            subitemIds
            subpageIds
        }
      }
    }
  `);

  return data.allDocumentationItem.nodes as Array<GatsbyTypes.DocumentationItem>
};

export default QueryAllItems;