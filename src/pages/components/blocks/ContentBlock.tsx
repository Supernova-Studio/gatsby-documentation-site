//
//  ContentBlock.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import QueryBlockById from "../../../model/queries/query_blockById"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlock(props: { blockId: string }) {

    let block = QueryBlockById(props.blockId)
    console.log(block)
  return (
      <div>Block</div>
  );
}
