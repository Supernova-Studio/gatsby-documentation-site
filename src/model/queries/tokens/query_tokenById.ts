//
//  query_tokenById.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryAllTokens from "./query_allTokens"

const QueryTokenById = (tokenId: string): SupernovaTypes.Token => {
  let tokens = QueryAllTokens()
  for (let token of tokens) {
    if (token.id === tokenId) {
      return token
    }
  }

  throw new Error(`Unable to query token id ${tokenId}`)
};

export default QueryTokenById;