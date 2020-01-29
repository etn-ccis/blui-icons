module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [ '@pxblue/eslint-config/ts', '@pxblue/eslint-config/tsx' ],
    parserOptions:  {
        project: "./tsconfig.json",
    },
    env: {
        browser: true
    }
};