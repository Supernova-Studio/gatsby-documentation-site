//
//  ContentShortcut.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react";
import { SupernovaTypes } from "../../../../../../plugins/supernova-gatsby-source/build/exports";
import QueryItemsByIds from "../../../../../model/queries/query_itemsByIds";

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentShortcut(props: {
  shortcut: SupernovaTypes.DocumentationPageBlockShortcut;
}) {
  let href: string | undefined = undefined;
  let target: string | undefined = undefined;

  if (props.shortcut.externalUrl) {
    href = props.shortcut.externalUrl;
    target = "_blank";
  } else if (props.shortcut.internalId) {
    let items = QueryItemsByIds([props.shortcut.internalId]);
    if (items.length > 0) {
      href = items[0].firstPageSlug ?? undefined; // Note: even if we have item, page slug can still be empty if user linked to a group that doesn't have any content
    }
  }

  return (
    <div>
      <a href={href} target={target}>
        {props.shortcut.previewUrl ? (
          <div
            className="preview"
            style={{
              background: `url(${props.shortcut.previewUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : (
          <div className="preview empty" />
        )}

        {props.shortcut.title ? (
          <p className="title">{props.shortcut.title}</p>
        ) : null}
        {props.shortcut.description ? (
          <p className="description">{props.shortcut.description}</p>
        ) : null}
      </a>
    </div>
  );
}
