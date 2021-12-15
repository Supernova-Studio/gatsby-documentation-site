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


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Query

const QueryConfiguration = (): GatsbyTypes.DocumentationConfiguration => {
  const data = useStaticQuery<GatsbyTypes.ConfigurationQuery>(graphql`
    query Configuration {
        documentationConfiguration {
            tabbedNavigation
        }
    }
  `);

  return data.documentationConfiguration as GatsbyTypes.DocumentationConfiguration
};

export default QueryConfiguration;