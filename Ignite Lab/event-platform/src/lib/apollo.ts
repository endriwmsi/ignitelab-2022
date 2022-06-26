import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4u2too70i9i01t7bcj5afhn/master",
    cache: new InMemoryCache()
})