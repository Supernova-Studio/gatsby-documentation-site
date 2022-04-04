//
//  Search.tsx
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import SearchForm from "./SearchForm"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Search(props: {}) {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <i className="fas fa-search search" onClick={() => setModalShow(true)}></i>
      <SearchForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}
