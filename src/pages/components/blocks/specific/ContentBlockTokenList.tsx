//
//  ContentBlockTokenList.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryTokensByIds from "../../../../model/queries/query_tokensByIds"
import TokenPreviewLarge from "./partials/TokenPreviewLarge"
import TokenValue from "./partials/TokenValue"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockTokenList(props: { block: SupernovaTypes.DocumentationPageBlockTokenList }) {
  // Ignore empty token lists
  if (props.block.tokenIds.length === 0) {
    return null
  }

  let tokens = QueryTokensByIds(props.block.tokenIds)
  return (
    <div className="token-container">
      <div className="grid">
        {tokens.map((t) => (
          <div>
            <TokenPreviewLarge token={t} />
            <p className="title">{t.name}</p>
            {/* Render description if this is not text and generic token, which are rendering values into the tile itself */}
            {t.tokenType !== SupernovaTypes.TokenType.Text && t.tokenType !== SupernovaTypes.TokenType.Generic ? (
              <p className="description">
                <TokenValue token={t} />
              </p>
            ) : null}
          </div>
        ))}
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
      </div>
    </div>
  )
}
