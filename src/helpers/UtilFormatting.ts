//
//  UtilFormatting.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { SupernovaTypes } from "../../plugins/supernova-gatsby-source/build/exports"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Utilities

export class UtilFormatting {
  /** Describe any type of token as usable CSS (or multiple CSS definitions)
   * You can extend this or change definitions that are generated for each type, for
   * example to describe token usage in iOS, Android, SCSS etc.
   */
  static cssTokenValue(token: SupernovaTypes.Token): Array<string> {
    switch (token.tokenType) {
      case SupernovaTypes.TokenType.Blur: {
        let typedToken = token as SupernovaTypes.BlurToken
        switch (typedToken.value.type) {
          case SupernovaTypes.BlurType.background:
            return [`backdrop-filter: blur(${typedToken.value.radius.measure}px)`]
          case SupernovaTypes.BlurType.layer:
            return [`filter: blur(${typedToken.value.radius.measure}px)`]
        }
      }
      case SupernovaTypes.TokenType.Border: {
        let typedToken = token as SupernovaTypes.BorderToken
        return [`${typedToken.value.width.measure
          } px solid #${typedToken.value.color.hex.toUpperCase()}, ${typedToken.value.position.toUpperCase()}`]
      }
      case SupernovaTypes.TokenType.Color: {
        let typedToken = token as SupernovaTypes.ColorToken
        if (typedToken.value.a === 255) {
          // #RRGGBB
          // rgb(r,g,b)
          return [`#${typedToken.value.hex.substring(0, 6)}`,
          `rgb(${typedToken.value.r}, ${typedToken.value.g}, ${typedToken.value.b})`]
        } else {
          // #RRGGBBAA
          // rgba(r,g,b,a)
          return [`#${typedToken.value.hex.substring(0, 6)}`,
          `rgba(${typedToken.value.r}, ${typedToken.value.g}, ${typedToken.value.b}, ${Math.round((typedToken.value.a + Number.EPSILON) * 1000) / 1000})`]
        }
      }
      case SupernovaTypes.TokenType.Font: {
        let typedToken = token as SupernovaTypes.FontToken
        return [`${typedToken.value.family} ${typedToken.value.subfamily}`]
      }
      case SupernovaTypes.TokenType.Generic: {
        let typedToken = token as SupernovaTypes.GenericToken
        return [typedToken.value.text]
      }
      case SupernovaTypes.TokenType.Gradient: {
        let typedToken = token as SupernovaTypes.GradientToken
        return [UtilFormatting.cssGradient(typedToken)]
      }
      case SupernovaTypes.TokenType.Measure: {
        let typedToken = token as SupernovaTypes.MeasureToken
        return [`${typedToken.value.measure}${UtilFormatting.cssUnit(typedToken.value.unit)}}`]
      }
      case SupernovaTypes.TokenType.Radius: {
        let typedToken = token as SupernovaTypes.RadiusToken
        return [`${typedToken.value.radius.measure}${UtilFormatting.cssUnit(typedToken.value.radius.unit)}`]
      }
      case SupernovaTypes.TokenType.Shadow: {
        let typedToken = token as SupernovaTypes.ShadowToken
        return [UtilFormatting.cssShadow(typedToken)]
      }
      case SupernovaTypes.TokenType.Text: {
        let typedToken = token as SupernovaTypes.TextToken
        return [typedToken.value.text]
      }
      case SupernovaTypes.TokenType.Typography: {
        let typedToken = token as SupernovaTypes.TypographyToken
        return [UtilFormatting.cssTypography(typedToken)]
      }
    }
  }

  /** Describe unit as css */
  static cssUnit(type: SupernovaTypes.Unit): string {
    switch (type) {
      case SupernovaTypes.Unit.points:
        return "pt"
      case SupernovaTypes.Unit.pixels:
        return "px"
      case SupernovaTypes.Unit.percent:
        return "%"
      case SupernovaTypes.Unit.ems:
        return "em"
      default:
        throw new Error("Unsupported unit type")
    }
  }

  /** Describe gradient as css */
  static cssGradient(token: SupernovaTypes.GradientToken): string {
    let gradientType = ""
    switch (token.value.type) {
      case "Linear":
        gradientType = "linear-gradient(0deg, "
        break
      case "Radial":
        gradientType = "radial-gradient(circle, "
        break
      case "Angular":
        gradientType = "conic-gradient("
        break
    }

    // Describe gradient as (type) (stop1, stop2 ...)
    // Example: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    let stops = token.value.stops
      .map((stop) => {
        return `#${stop.color.hex.toUpperCase()} ${stop.position * 100}%`
      })
      .join(", ")

    return `${gradientType}${stops})`
  }

  /** Describe gradient as css */
  static cssShadow(token: SupernovaTypes.ShadowToken): string {
    return `${token.value.type === "Inner" ? "inset " : ""}${token.value.x.measure}px ${token.value.y.measure}px ${token.value.radius.measure
      }px ${token.value.spread.measure}px #${token.value.color.hex}`
  }

  /** Describe typography as css */
  static cssTypography(token: SupernovaTypes.TypographyToken): string {
    let value = token.value
    let fontName = `${value.font.family} ${value.font.subfamily}`
    let fontValue = `${value.fontSize.measure}${UtilFormatting.cssUnit(value.fontSize.unit)}`
    let textDecoration: string = ""
    let textCase: string = ""
    if (value.textDecoration !== SupernovaTypes.TextDecoration.Original) {
      textDecoration = `, ${value.textDecoration.toLowerCase()}`
    }
    if (value.textCase !== SupernovaTypes.TextCase.Original) {
      textCase = `, ${value.textCase.toLowerCase()}`
    }
    return `${fontName} ${fontValue}${textDecoration}${textCase}`
  }


  /** Describe shadow as css, but change shadow values so they fit restrictions. For example,
   * you can have shadow that is 20px large. You can't really render this inside box 20x20 px,
   * so this function will scale to it maximum of `scalingParamSum`, so it proportionally
   * still looks good for preview
   */
  static scaledCSSShadow(shadowToken: SupernovaTypes.ShadowToken, scalingParamSum: number): string {
    
    var blurRadius = UtilFormatting.nonNegativeValue(shadowToken.value.radius.measure);
    var offsetX = shadowToken.value.x.measure;
    var offsetY = shadowToken.value.y.measure;
    var spreadRadius = shadowToken.value.spread.measure;

    if (scalingParamSum != null) {
      var biggestOffset = Math.max(Math.abs(offsetX), Math.abs(offsetY));
      var allParamsSum = Math.max(UtilFormatting.nonNegativeValue(blurRadius) + Math.max(spreadRadius, 0) + biggestOffset, 1);

      blurRadius = blurRadius * scalingParamSum / allParamsSum;
      offsetX = offsetX * scalingParamSum / allParamsSum;
      offsetY = offsetY * scalingParamSum / allParamsSum;
      spreadRadius = spreadRadius * scalingParamSum / allParamsSum;
    }

    return `${shadowToken.value.type === "Inner" ? "inset " : ""}${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px #${shadowToken.value.color.hex}`
  }

  static nonNegativeValue(num: number) {
  if (num <= 0) {
    return 0
  } else {
    return num
  }
  }
}

