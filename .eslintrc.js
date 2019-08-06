module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    parserOptions: {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    rules: {
        "prefer-object-spread": 1,
        "triple-equals": 1,
        "class-name": 1,
        "interface-over-type-literal": 1,
        "no-angle-bracket-type-assertion": 1,
        "object-literal-key-quotes": [1, "consistent-as-needed"],
        "arrow-parens": [1, "as-needed"],
        "no-trailing-whitespace": 1,
        "quotemark": [1, "single", "avoid-template", "avoid-escape"],
        "semicolon": [1, "never"],
        "trailing-comma": [1, {"multiline": "always", "singleline": "never"}],
        "return-undefined": 1,
        "unnecessary-bind": 1,
        "unnecessary-else": 1,
    }
}