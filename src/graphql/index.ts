import { GraphQLClient } from "graphql-request";

import { getSdk } from "./requests/__generated__";

const client = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL ?? ""}/graphql/playground`,
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN ?? ""}`
    }
  }
);
export const gql = getSdk(client);

// export * from "./requests/__generated__";

export {
  useSearchProductsQuery,
  useFilterProductsQuery,
  useGetBrandsQuery
} from "./hooks/__generated__";

export type {
  SearchProductsQuery,
  SearchProductsQueryVariables,
  FilterProductsQuery,
  GetBrandsQuery,
  GetBrandsQueryVariables
} from "./hooks/__generated__";
