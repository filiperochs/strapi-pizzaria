export default {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/swaggerjson/swagger.json",
      handler: "swaggerjson.index",
    },
  ],
};
