//
//  SearchForm.tsx
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { SearchEngine } from "../../../../modules/search/SearchEngine"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function SearchForm(props: { show: boolean; onHide: () => any }) {
  const [searchString, setSearchString] = useState("");

  const onSearchChanged = (event: any) => {
    let newValue = event.target.value
    setSearchString(newValue)
  };

  let searchResult = SearchEngine.getInstance().search(searchString)

  return (
    <Modal {...props} size="lg" aria-labelledby="search-box" centered>
      <Modal.Body>
        <div className="SNSearch-box">
          <header className="SNSearch-header">
            <SearchInputLabel />
            <form action="" className="SNSearch-form">
              <input
              value={searchString}
              onChange={onSearchChanged}
                className="SNSearch-input"
                id="SNSearch-input"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="Search docs"
                maxLength={64}
                enterKeyHint="search"
              />
            </form>
            <div className="SNSearch-close search"></div>
          </header>
          <div className="SNSearch-results">
            <SearchState results={searchResult} query={""} />
          </div>
          <footer className="SNSearch-footer">
            <div></div>
            <div className="info">
              to exit <span>ESC</span>
            </div>
          </footer>
        </div>
      </Modal.Body>
    </Modal>
  )
}

function SearchInputLabel() {
  return (
    <label className="SNSearch-input-label">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.5 1.5C3.3 1.5 1.5 3.3 1.5 5.5C1.5 7.7 3.3 9.5 5.5 9.5C7.7 9.5 9.5 7.7 9.5 5.5C9.5 3.3 7.7 1.5 5.5 1.5ZM5.5 0.5C8.3 0.5 10.5 2.7 10.5 5.5C10.5 6.7 10.1 7.8 9.4 8.7L12.4 11.7L11.7 12.4L8.7 9.4C7.8 10.1 6.7 10.5 5.5 10.5C2.7 10.5 0.5 8.3 0.5 5.5C0.5 2.7 2.7 0.5 5.5 0.5Z"
          fill="black"
          fill-opacity="0.3"
        />
      </svg>
    </label>
  )
}

function EmptyState(props: {}) {
  return <p className="section-title empty">Start your search by typing your phrase</p>
}

function NotFoundState(props: {}) {
  return <p className="section-title empty">No results found, change your search phrase</p>
}

function SearchState(props: { results: Array<any>; query: string }) {
  if (props.query.length < 2) {
    return <EmptyState />
  } else if (props.results.length === 0) {
    return <NotFoundState />
  } else {
    return <ActiveSearchState results={props.results} query={props.query} />
  }
  return <></>
}

function ActiveSearchState(props: { results: Array<any>; query: string }): JSX.Element {
  let textResults = []
  let headingResults = []

  for (let result of props.results) {
    let item = result.item
    item.startIndex = item.text.toLowerCase().indexOf(props.query.toLowerCase())
    item.endIndex = item.startIndex + props.query.length

    if (item.type === "body") {
      textResults.push(item)
    } else {
      headingResults.push(item)
    }
  }

  let elements = []

  // Add results matching titles first, then text block results
  if (headingResults.length > 0) {
    elements.push(<p className="section-title">Sections (${headingResults.length})</p>)
    let count = 0
    for (let heading of headingResults) {
      elements.push(
        <a href="${heading.url}">
          <div className="result">
            <p className="section-result-header">{highlightRanges(heading.text, heading.startIndex, heading.endIndex)}</p>
            <p className="section-result-text">On page {heading.path}</p>
          </div>
        </a>
      )
      // Allow up to 5 results to be shown
      if (++count > 5) {
        break
      }
    }
  }

  // Add text block results
  if (textResults.length > 0) {
    elements.push(<p className="section-title">Text ({textResults.length})</p>)
    let count = 0
    for (let text of textResults) {
      elements.push(
        <a href="${text.url}">
          <div className="result">
            <p className="section-result-header">{highlightRanges(text.text, text.startIndex, text.endIndex)}</p>
            <p className="section-result-text">On page {text.path}</p>
          </div>
        </a>
      )
      // Allow up to 5 results to be shown
      if (++count > 5) {
        break
      }
    }
  }

  return <>{elements}</>
}

function highlightRanges(s: string, startIndex: number, endIndex: number) {
  if (startIndex === -1) {
    return s
  }

  let beginning = s.substring(0, startIndex)
  let searchResult = s.substring(startIndex, endIndex)
  let end = s.substring(endIndex)

  return `${beginning}<span>${searchResult}</span>${end}`
}
