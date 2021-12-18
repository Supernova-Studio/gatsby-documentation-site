//
//  SidebarLogo.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from 'react'

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Logo() {
  return (
    <div className="nav-sn" key="sidebar-logo">
      <a href="https://supernova.io" target="_blank">
        <img
          src="/logos/powered-by-supernova.png"
          title="Supernova, the most advanced design system platform"
          alt="Supernova, the most advanced design system platform"
        />
      </a>
    </div>
  );
}
