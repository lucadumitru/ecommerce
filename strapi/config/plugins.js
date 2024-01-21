module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql/playground",
      shadowCRUD: true,
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true
      }
    }
  },
  // upload: {
  //   config: {
  //     provider: "strapi-provider-upload-supabase",
  //     providerOptions: {
  //       apiUrl: env("SUPABASE_API_URL"),
  //       apiKey: env("SUPABASE_API_KEY"),
  //       bucket: env("SUPABASE_BUCKET"),
  //       directory: env("SUPABASE_DIRECTORY"),
  //       options: {}
  //     },
  //     actionOptions: {
  //       upload: {},
  //       uploadStream: {},
  //       delete: {}
  //     }
  //   }
  // },
  "import-export-entries": {
    enabled: true,
    config: {
      /**
       * Public hostname of the server.
       *
       * If you use the local provider to persist medias,
       * `serverPublicHostname` should be set to properly export media urls.
       */
      serverPublicHostname: "" // default: "".
    }
  }
});
