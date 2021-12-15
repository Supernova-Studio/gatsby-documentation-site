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

const QueryAllPages = (): Array<GatsbyTypes.DocumentationItem> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllPagesQuery>(graphql`
    query QueryAllPages {
      allDocumentationItem(filter: {
        itemType: {
          eq:"Page"
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

  let pages: Array<GatsbyTypes.DocumentationItem> = []
  for (let item of data.allDocumentationItem.nodes) {
    if (item.itemType === "Page") {
      pages.push(item as GatsbyTypes.DocumentationItem)
    }
  }
  return pages
};

export default QueryAllPages;