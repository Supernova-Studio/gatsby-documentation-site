# Note from the author(s)

This query section can be heavily improved in terms of performance (that being said, it is super performant, don't worry). Currently, basically everything fetches everything when a single item is needed, then filters the result. This will be optimized so we are fetching on demand - our idea is to build caching layer on top of GQL that will create hashmaps of items so they can be accessed locally without queries.

OR Gatsby hopefully adds static queries with arguments.