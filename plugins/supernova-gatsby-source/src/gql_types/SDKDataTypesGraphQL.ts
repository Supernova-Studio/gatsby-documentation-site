export type SNGraphQLNode = {
    id: string,
    parent: string,
    internal: {
      type: string,
      contentDigest: string,
    },
    children: Array<any>,
    itemType: string,
}