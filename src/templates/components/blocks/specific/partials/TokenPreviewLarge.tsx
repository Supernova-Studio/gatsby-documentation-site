//
//  TokenPreviewLarge.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import React from "react"
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import { UtilFormatting } from "../../../../../helpers/UtilFormatting"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function TokenPreviewLarge(props: { token: SupernovaTypes.Token }) {
  switch (props.token.tokenType) {
    case SupernovaTypes.TokenType.Blur: {
      let typedToken = props.token as SupernovaTypes.BlurToken
      let radius = typedToken.value.radius
      switch (typedToken.value.type) {
        case SupernovaTypes.BlurType.background:
          return (
            <div className="preview checkered-background">
              <div className="token-preview-container large">
                <div
                  className="token-preview-container-blur large"
                  style={{ backgroundColor: "transparent", width: "100%", backdropFilter: `blur(${radius.measure}px)` }}
                ></div>
                <div className="token-preview-container-blur-text-unblurred" style={{ color: "#141618" }}>
                  {radius.measure}
                </div>
              </div>
            </div>
          )
        case SupernovaTypes.BlurType.layer:
          return (
            <div className="preview">
              <div className="token-preview-container large">
                <div
                  className="token-preview-container-blur large"
                  style={{ backgroundColor: "#363a3e", width: "100%", filter: `blur(${radius.measure}px)` }}
                ></div>
                <div className="token-preview-container-blur-text-unblurred">{radius.measure}</div>
              </div>
            </div>
          )
      }
    }
    case SupernovaTypes.TokenType.Border: {
      let typedToken = props.token as SupernovaTypes.BorderToken
      return (
        <div className="preview">
          <div className="token-preview-container large">
            <div
              className="token-preview-container-border large"
              style={{ border: `${typedToken.value.width.measure}px solid #${typedToken.value.color.hex}` }}
            ></div>
          </div>
        </div>
      )
    }
    case SupernovaTypes.TokenType.Color: {
      let typedToken = props.token as SupernovaTypes.ColorToken
      return <div className="preview" style={{ backgroundColor: `#${typedToken.value.hex }`}}></div>
    }
    case SupernovaTypes.TokenType.Font: {
      let typedToken = props.token as SupernovaTypes.FontToken
      return <div className="preview">Ag</div>
    }
    case SupernovaTypes.TokenType.Generic: {
      let typedToken = props.token as SupernovaTypes.GenericToken
      return <div className="preview small-text">X</div>
    }
    case SupernovaTypes.TokenType.Gradient: {
      let typedToken = props.token as SupernovaTypes.GradientToken
      return <div className="preview" style={{ background: UtilFormatting.cssGradient(typedToken) }}></div>
    }
    case SupernovaTypes.TokenType.Measure: {
      let typedToken = props.token as SupernovaTypes.MeasureToken
      return <div className="preview">px</div>
    }
    case SupernovaTypes.TokenType.Radius: {
      let typedToken = props.token as SupernovaTypes.RadiusToken
      return <div className="preview" style={{ borderRadius: typedToken.value.radius.measure }}></div>
    }
    case SupernovaTypes.TokenType.Shadow: {
      let typedToken = props.token as SupernovaTypes.ShadowToken
      return (
        <div className="preview">
          <div style={{ width: 64, height: 64, boxShadow: UtilFormatting.scaledCSSShadow(typedToken, 4) }}></div>
        </div>
      )
    }
    case SupernovaTypes.TokenType.Text: {
      let typedToken = props.token as SupernovaTypes.TextToken
      return <div className="preview small-text">T</div>
    }
    case SupernovaTypes.TokenType.Typography: {
      let typedToken = props.token as SupernovaTypes.TypographyToken
      return <div className="preview">Ag</div>
    }
  }
}
