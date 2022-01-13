//
//  query_configuration.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io> 
//  Supernova.io 
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useStaticQuery, graphql } from "gatsby";
import * as SupernovaTypes from "@supernovaio/gatsby-source-supernova"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Query

const QueryConfiguration = (): SupernovaTypes.DocumentationConfiguration => {
  const data = useStaticQuery<GatsbyTypes.ConfigurationQuery>(graphql`
    query Configuration {
        documentationConfiguration {
            tabbedNavigation
            storybookError
            packageJson
        }
    }
  `);

  return data.documentationConfiguration as SupernovaTypes.DocumentationConfiguration
};

export default QueryConfiguration;