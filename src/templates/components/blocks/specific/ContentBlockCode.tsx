//
//  ContentBlockCode.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React, { useEffect } from "react"
import { highlightAll } from "prismjs"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import { UtilsUrls } from "../../../../helpers/UtilUrls"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockCode(props: { block: SupernovaTypes.DocumentationPageBlockCode }) {
  // Use prism to highlight code block
  useEffect(() => {
    highlightAll()
  }, [])

  return (
    <>
      <pre className="code-block">
        <code className={props.block.codeLanguage ? `language-${props.block.codeLanguage}` : undefined}>
          {UtilsUrls.plainTextFromRichText(props.block.text)}
        </code>
      </pre>
      {props.block.caption ? <p className="caption">{props.block.caption}</p> : null}
    </>
  )
}
