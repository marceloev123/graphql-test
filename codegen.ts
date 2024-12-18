import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://rickandmortyapi.com/graphql",
  documents: "src/graphql/queries/**/*.graphql",
  overwrite: true,
  generates: {
    "src/graphql/schema/graphql.ts": {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
