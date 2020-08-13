module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/project_three/"
      : "/project_three",
};
