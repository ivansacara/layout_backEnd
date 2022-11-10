module.exports = ({ env }) => ({
  url: env("https://alexlayout.herokuapp.com/"),
  proxy: true,
  app: {
    key: env.array("APP_KEYS", [
      "ejE1nHItWL5yCgLRDLfx2w==",
      "YztXaTERhUk174UJMkCUXg==",
      "kCwL5J6F48WxQrZ3LmMvmg==",
      "2jyzec2v8mxJJzHY3lu0lg==",
    ]),
  },
});
