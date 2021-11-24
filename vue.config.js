const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

module.exports = {
    devServer: {
        port: 8083,
    },
    publicPath: "http://localhost:8083/",
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "shell",
                filename: "remoteEntry.js",
                remotes: {
                    profile: "profile@http://localhost:8084/remoteProfileEntry.js",
                    home: "home@http://localhost:8085/remoteHomeEntry.js",
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