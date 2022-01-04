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
import { SupernovaTypes } from "../../../plugins/supernova-gatsby-source/build/gql_types/SupernovaTypes"

const QueryAllPages = (): Array<SupernovaTypes.DocumentationPage> => {
  const data = useStaticQuery<GatsbyTypes.QueryAllPagesQuery>(graphql`
    query QueryAllPages {
      allDocumentationItem(filter: {
        itemType: {
          eq:"Page"
        }
      }) {
        nodes  {
          parent {
            id
          }
          internal {
            contentDigest
          }
          children {
            id
          }
          id
          title
          itemType
          slug
          firstPageSlug
          parentGroupId
          parentGroupChain
        }
      }
    }
  `);

  let pages: Array<SupernovaTypes.DocumentationPage> = []
  for (let item of data.allDocumentationItem.nodes) {
    if (item.itemType === "Page") {
      pages.push(item as any)
    }
  }
  return pages
};

export default QueryAllPages;