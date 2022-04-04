//
//  SearchForm.tsx
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import { Button, Modal } from "react-bootstrap"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function SearchForm(props: { show: boolean; onHide: () => any }) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
          <div className="SNSearch-box">
            <header className="SNSearch-header">
              <label className="SNSearch-input-label">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.5 1.5C3.3 1.5 1.5 3.3 1.5 5.5C1.5 7.7 3.3 9.5 5.5 9.5C7.7 9.5 9.5 7.7 9.5 5.5C9.5 3.3 7.7 1.5 5.5 1.5ZM5.5 0.5C8.3 0.5 10.5 2.7 10.5 5.5C10.5 6.7 10.1 7.8 9.4 8.7L12.4 11.7L11.7 12.4L8.7 9.4C7.8 10.1 6.7 10.5 5.5 10.5C2.7 10.5 0.5 8.3 0.5 5.5C0.5 2.7 2.7 0.5 5.5 0.5Z"
                    fill="black"
                    fill-opacity="0.3"
                  />
                </svg>
              </label>
              <form action="" className="SNSearch-form">
                <input
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
            <div className="SNSearch-results"></div>
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
