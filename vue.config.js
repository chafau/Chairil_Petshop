module.exports = {
    publicPath: '/',

    css: {
        loaderOptions: {
            scss: {
                additionalData: `
            @import "@/assets/styles/app.scss";
            `
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
};
