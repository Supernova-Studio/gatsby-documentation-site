
//
//  UtilExporterCustomization.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"
import QueryExporterConfigurationPropertyById from "../model/queries/exporters/query_exporterConfigurationPropertyById"


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Utilities

export class UtilExporterCustomization {

    /** Retrieve configuration property defined in currently active documentation exporter. Throws if not found */
    static configurationProperty(key: string): SupernovaTypes.ExporterConfigurationProperty {
        
        let property = QueryExporterConfigurationPropertyById(key)
        return property
    }

    /** Retrieve configuration property value defined in currently active documentation exporter. Throws if not found */
    static configurationValue(key: string): any {
        
        let property = UtilExporterCustomization.configurationProperty(key)
        let value = property.value
        if (value === null || value === undefined) {
            return null
        }

        switch (property.type) {
            case SupernovaTypes.ExporterConfigurationPropertyType.boolean: return value.booleanValue
            case SupernovaTypes.ExporterConfigurationPropertyType.enum: return value.stringValue
            case SupernovaTypes.ExporterConfigurationPropertyType.string: return value.stringValue
            case SupernovaTypes.ExporterConfigurationPropertyType.number: return value.numericValue
            case SupernovaTypes.ExporterConfigurationPropertyType.image: return value.imageValue
            case SupernovaTypes.ExporterConfigurationPropertyType.color: return value.colorValue
            case SupernovaTypes.ExporterConfigurationPropertyType.typography: return value.typographyValue
        }
    }

    /** Retrieve configuration property (or default) value of string property defined in currently active documentation exporter. Throws if not found and property is not defined as string */
    static configurationStringValue(key: string): string | null {
        
        let property = UtilExporterCustomization.configurationProperty(key)
        if (property.type !== SupernovaTypes.ExporterConfigurationPropertyType.string) {
            throw new Error(`Custom property '${property.key}' is not defined as string, but '${property.type.toString()}'`)
        }
        return property.value?.stringValue ?? null
    }

    /** Retrieve configuration property (or default) value of numeric property defined in currently active documentation exporter. Throws if not found and property is not defined as number */
    static configurationNumericValue(key: string): number | null {
        
        let property = UtilExporterCustomization.configurationProperty(key)
        if (property.type !== SupernovaTypes.ExporterConfigurationPropertyType.number) {
            throw new Error(`Custom property '${property.key}' is not defined as number, but '${property.type.toString()}'`)
        }
        return property.value?.numericValue ?? null
    }

    /** Retrieve configuration property (or default) value of boolean property defined in currently active documentation exporter. Throws if not found and property is not defined as boolean */
    static configurationBooleanValue(key: string): boolean | null {
        
        let property = UtilExporterCustomization.configurationProperty(key)
        if (property.type !== SupernovaTypes.ExporterConfigurationPropertyType.boolean) {
            throw new Error(`Custom property '${property.key}' is not defined as boolean, but '${property.type.toString()}'`)
        }
        return property.value?.booleanValue ?? null
    }

    /** Retrieve configuration property (or default) value of enum property defined in currently active documentation exporter. Throws if not found and property is not defined as enum */
    static configurationEnumValue(key: string): string | null {
        
        let property = UtilExporterCustomization.configurationProperty(key)
        if (property.type !== SupernovaTypes.ExporterConfigurationPropertyType.enum) {
            throw new Error(`Custom property '${property.key}' is not defined as enum, but '${property.type.toString()}'`)
        }
        return property.value?.stringValue ?? null
    }

    /** Retrieve configuration property (or default) value of image property defined in currently active documentation exporter. Throws if not found and property is not defined as image */
    static configurationImageValue(key: string): SupernovaTypes.MultitypeImageValue | null {
        
        let property = UtilExporterCustomization.configurationProperty(key)
        if (property.type !== SupernovaTypes.ExporterConfigurationPropertyType.image) {
            throw new Error(`Custom property '${property.key}' is not defined as image, but '${property.type.toString()}'`)
        }
        return property.value?.imageValue ?? null
    }

    /** Retrieve configuration property (or default) value of color property defined in currently active documentation exporter. Throws if not found and property is not defined as color */
    static configurationColorValue(key: string): SupernovaTypes.MultitypeColorValue | null {
        
        let property = UtilExporterCustomization.configurationProperty(key)
        if (property.type !== SupernovaTypes.ExporterConfigurationPropertyType.image) {
            throw new Error(`Custom property '${property.key}' is not defined as color, but '${property.type.toString()}'`)
        }
        return property.value?.colorValue ?? null
    }

    /** Retrieve configuration property (or default) value of typography property defined in currently active documentation exporter. Throws if not found and property is not defined as typography */
    static configurationTypographyValue(key: string): SupernovaTypes.MultitypeTypographyValue | null {
        
        let property = UtilExporterCustomization.configurationProperty(key)
        if (property.type !== SupernovaTypes.ExporterConfigurationPropertyType.typography) {
            throw new Error(`Custom property '${property.key}' is not defined as typography, but '${property.type.toString()}'`)
        }
        return property.value?.typographyValue ?? null
    }
}







