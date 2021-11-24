const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

module.exports = {
    devServer: {
        port: 8083,
    },
    publicPath: process.env.NODE_ENV === 'development' ? "/" : "https://shell-wmf.vercel.app/",
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "shell",
                filename: "remoteEntry.js",
                remotes: {
                    profile: "profile@https://profile-wmf.vercel.app/remoteProfileEntry.js",
                    home: "home@https://home-wmf.vercel.app/remoteHomeEntry.js",
                },
                exposes: {
                    "./CountModule": "./src/store/modules/count",
                },
                // shared: {
                //     vuex: {
                //         eager: true,
                //         singleton: true,
                //         requiredVersion: deps.vuex
                //     }
                // }
            }),
        ],
    }
};