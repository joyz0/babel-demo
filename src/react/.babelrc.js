module.exports = {
  presets: [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
        corejs: 3
      }
    ],
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development"
        // pragma: "dom", // default pragma is React.createElement
        // pragmaFrag: "DomFrag", // default is React.Fragment
        // throwIfNamespace: false // defaults to true
      }
    ]
  ]
};
