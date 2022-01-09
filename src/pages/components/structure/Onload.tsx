//
//  Onload.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useEffect } from "react"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Onload(props: { tree: JSX.Element }) {
  // You can invoke any onload global code after the entire page was loaded.
  // This is really important for this particular site because some functionality needs
  // to be setup after the tree is rendered into browser. Such functionality
  // includes Sandbox rendering, for example
  useEffect(() => {
    // Construct all sandboxes for the live code loaded into the page
    ;(window as any).sandboxEngine.buildSandboxStartingWith("sandbox")
  })
  return props.tree
}
