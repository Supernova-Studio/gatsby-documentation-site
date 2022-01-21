//
//  ContentBlockToken.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova";
import QueryTokenById from "../../../../model/queries/query_tokenById";
import TokenPreviewLarge from "./partials/TokenPreviewLarge";
import TokenValue from "./partials/TokenValue";

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockToken(props: { block: SupernovaTypes.DocumentationPageBlockToken }) {
  // Ignore blocks where token id wasn't set yet
  if (!props.block.tokenId) {
    return null;
  }

  let token = QueryTokenById(props.block.tokenId);
  return (
    <div className="token-container">
      <div className="grid">
        <div>
          <TokenPreviewLarge token={token} />
          <p className="title">{token.name}</p>
          {/* Render description if this is not text and generic token, which are rendering values into the tile itself */}
          {token.tokenType !== SupernovaTypes.TokenType.Text && token.tokenType !== SupernovaTypes.TokenType.Generic ? (
            <p className="description">
              <TokenValue token={token} />
            </p>
          ) : null}
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
      </div>
    </div>
  );
}
