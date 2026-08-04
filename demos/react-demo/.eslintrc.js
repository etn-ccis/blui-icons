module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ['@brightlayer-ui/eslint-config/tsx'],
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        browser: true,
    },
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'import',
                format: ['camelCase', 'PascalCase'],
            },
        ],
    },
};
