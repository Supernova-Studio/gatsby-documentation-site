//
//  ContentBlockTokenGroup.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryTokenGroupById from "../../../../model/queries/query_tokenGroupById"
import QueryTokensByGroupId from "../../../../model/queries/query_tokensByGroupId"
import TokenPreviewSmall from "./partials/TokenPreviewSmall"
import TokenValue from "./partials/TokenValue"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockTokenGroup(props: {
  block: SupernovaTypes.DocumentationPageBlockTokenGroup
  groupId: string | undefined
}) {
  // Ignore blocks that don't have group selected
  if (!props.block.groupId) {
    return null
  }

  let groupId = props.groupId ?? props.block.groupId
  let group = QueryTokenGroupById(groupId)
  let tokens = QueryTokensByGroupId(props.block.groupId)

  return (
    <>
      {tokens.length > 0 ? (
        <div className="token-container">
          {/* Show group header consisting of group segments and current group name */}
          <p className="token-group-header">{formattedTokenGroupHeader(group, true)}</p>
          <table className="token-wrapper">
            {/* Render all tokens */}
            {tokens.map((token) => (
              <tr className="color">
                <td>
                  <TokenPreviewSmall token={token} />
                </td>
                <td>{token.name}</td>
                <td>{token.description ? token.description : "No description"}</td>
                <td>
                  <TokenValue token={token} />
                  {token.properties.map((p) => {
                    let value = p.stringValue ?? p.booleanValue ?? p.numericValue ?? null
                    if (value) {
                      return (
                        <>
                          <br />
                          <span className="label">{p.name}</span>:{" "}
                          <span className="custom-value">{p.stringValue ?? p.booleanValue ?? p.numericValue ?? ""}</span>
                        </>
                      )
                    } else {
                      return null
                    }
                  })}
                </td>
              </tr>
            ))}
          </table>
        </div>
      ) : null}
      {props.block.showNestedGroups ? group.subgroupIds.map((g) => <ContentBlockTokenGroup block={props.block} groupId={g} />) : null}
    </>
  )
}

function formattedTokenGroupHeader(tokenGroup: SupernovaTypes.TokenGroup, showSubpath: boolean) {
  // Retrieve token group either including or not including the path to the group
  if (tokenGroup.path.length > 0 && showSubpath) {
    let light = tokenGroup.path.join(" / ")
    let dark = tokenGroup.name
    return (
      <p>
        <span className="light">{light} / </span>
        {dark}
      </p>
    )
  } else {
    return <p>{tokenGroup.name}</p>
  }
}
