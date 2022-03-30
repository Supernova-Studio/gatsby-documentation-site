//
//  Footer.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import { UtilExporterCustomization } from "../../../helpers/UtilExporterCustomization"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Footer() {
  // Footer is controlled through custom properties - its HTML can be modified in documentation editor / configuration.
  // We are providing static version here as well, if you don't want to load it like this, simply change this code to <StaticFooter />
  let shouldUseFooter = UtilExporterCustomization.configurationBooleanValue("advancedCustomizationShowFooter")
  if (shouldUseFooter) {
    // Inject configuration-defined footer code
    let footerHTMLCode = UtilExporterCustomization.configurationStringValue("advancedCustomizationCustomFooter")
    return <div dangerouslySetInnerHTML={{ __html: footerHTMLCode ?? "" }}></div>
  } else {
    // Footer disabled
    return <></>
  }
}

function StaticFooter() {
  /* Static footer template */
  return (
    <div className="container-footer">
      <div className="slider">
        <div className="row">
          <div className="col-5">
            <h5>My Doc Site</h5>
            <p className="d-block mb-3">
              Description of my really sweet and amazing company! This documentation site rocks!
            </p>
            <p className="d-block mb-3 text-muted">&copy; 2022 My Amazing Company</p>
          </div>
          <div className="col-3 offset-1">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Storybook</a>
              </li>
              <li>
                <a href="#">Figma</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Report issue</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
