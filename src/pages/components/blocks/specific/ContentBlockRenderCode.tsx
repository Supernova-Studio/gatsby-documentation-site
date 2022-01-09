//
//  ContentBlockRenderCode.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { uniqueId } from "lodash"
import React, { useEffect, useRef, useState } from "react"
import { SupernovaTypes } from "../../../../../plugins/supernova-gatsby-source/build/exports"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function ContentBlockRenderCode(props: { block: SupernovaTypes.DocumentationPageBlockRenderCode }) {
  // Generate unique persistent ID for the sandbox. Each sandbox works independently of each other
  const [sandboxId] = useState(() => uniqueId("sandbox-"))
  const [isLoading, setIsLoading] = React.useState(true)

  // Add observer for the sandbox actions
  useEffect(() => {
    ;(window as any).sandboxEngine.listener = function (message: { status: string; sandboxId: string }) {
      // Remove sandbox loader when loaded (either correctly or errored out)
      if (message.status === "done" || message.status === "error") {
        setIsLoading(false)
      }
    }
  })

  // Set background color. Note that currently, background color is provided by SDK by default (#f9f9faff), and it will be changed
  // soon so it actually comes as null - meaning it wasn't forced in the editor.
  // We are going around it and treating the default as null.
  // Nasty workaround, but will be fixed soon by the SDK team, promise :)
  let backgroundColor = "transparent"
  let showChecker = true
  if (props.block.backgroundColor && props.block.backgroundColor !== "#f9f9faff") {
    backgroundColor = props.block.backgroundColor
    showChecker = false
  }

  return (
    <div className="sandbox-main-wrapper">
      {/* Render sandbox. Sandbox will be triggered by the library automatically, this is just wrapper */}
      <div className="sandbox-state-wrapper">
        {isLoading ? (
          <div className="sandbox-loader-container" data-target={`${sandboxId}`}>
            <div className="sandbox-loader"></div>
          </div>
        ) : null}
        <div
          className={`sandbox-container ${showChecker ? "checkered-background-light" : ""}`}
          style={{ height: props.block.height ?? 200, backgroundColor: backgroundColor }}
        >
          <div id={sandboxId} sn-sandbox-data={props.block.sandboxData}></div>
        </div>
      </div>
      {/* Only show code if the editor allows it */}
      {props.block.showCode ? <CodePreviewView sandboxId={sandboxId} code={props.block.code} /> : null}
    </div>
  )
}

function CodePreviewView(props: { sandboxId: string; code: string }) {
  const [showCode, setShowCode] = React.useState(false)

  // Set actions bound to this particular sandbox
  const onToggleCode = (event: React.SyntheticEvent) => {
    // Toggle code view on and off
    event.preventDefault()
    setShowCode((prevShow) => !prevShow)
  }
  const onCopyCode = (event: React.SyntheticEvent) => {
    // Take code from sandbox engine and copy it into clipboard
    event.preventDefault()
    const code = (window as any).sandboxEngine.getCodeForSandboxId(props.sandboxId)
    const cb = navigator.clipboard
    cb.writeText(code)
  }

  return (
    <div className="sandbox-container-meta">
      <div className="sandbox-container-buttons">
        {/* Toggle code button */}
        <a
          className="btn btn-light"
          data-toggle="collapse"
          href={`#codepreview-${props.sandboxId}`}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={onToggleCode}
        >
          Toggle code
        </a>

        {/* Copy code button */}
        <a className="btn btn-light sandbox-copy" data-toggle="tooltip" title="Copy component code" onClick={onCopyCode}>
          <div className="sandbox-copy-icon" data-toggle="copy-from-sandbox" data-target={`${props.sandboxId}`}></div>
        </a>
      </div>

      {/* Rendered code */}
      <div className={`sandbox-text ${!showCode ? "collapse" : ""}`} id={`codepreview-${props.sandboxId}`}>
        <pre>
          <code className="language-javascript">{props.code}</code>
        </pre>
      </div>
    </div>
  )
}
