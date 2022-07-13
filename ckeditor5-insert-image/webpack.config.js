/*eslint-env node */
"use strict";

const path = require("path");
const { styles } = require("@ckeditor/ckeditor5-dev-utils");
const CKEditorWebpackPlugin = require("@ckeditor/ckeditor5-dev-webpack-plugin");

module.exports = {
    // https://webpack.js.org/configuration/entry-context/
    entry: path.resolve(__dirname, "src", "ckeditor.js"),
    // https://webpack.js.org/configuration/output/
    output: {
        // The name under which the editor will be exported.
        library: "ClassicEditor",
        path: path.resolve(__dirname, "build"),
        filename: "editor.js",
        libraryTarget: "umd",
        libraryExport: "default",
    },
    module: {
        rules: [
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: ["raw-loader"],
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            injectType: "singletonStyleTag",
                            attributes: {
                                "data-cke": true,
                            },
                        },
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: styles.getPostCssConfig({
                                themeImporter: {
                                    themePath: require.resolve(
                                        "@ckeditor/ckeditor5-theme-lark"
                                    ),
                                },
                                minify: true,
                            }),
                        },
                    },
                ],
            },
        ],
    },
    // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html#building-the-editor-using-a-specific-language
    plugins: [
        new CKEditorWebpackPlugin({
            // The main language that will be built into the main bundle in the JS code
            language: "en",
            verbose: true,
            // CKEditorWebpackPlugin will search the needed translation in the pluging
            // Where the po can be found and where item to translate can be found
            packageNamesPattern: /([/\\]ckeditor5-[^/\\]+[/\\])|(^src)/,
            // Where item to translate can be found
            sourceFilesPattern:
                /(ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$)|(^src)/,
        }),
    ],
    // Useful for debugging.
    devtool: "source-map",
    // By default webpack logs warnings if the bundle is bigger than 200kb.
    performance: { hints: false },
};
