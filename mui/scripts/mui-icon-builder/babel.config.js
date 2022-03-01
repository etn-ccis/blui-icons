let defaultPresets;

// We release a ES version of Material-UI.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (process.env.BABEL_ENV === 'es') {
    defaultPresets = [];
} else {
    defaultPresets = [
        [
            '@babel/preset-env',
            {
                modules: ['modules', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
            },
        ],
    ];
}

module.exports = {
    presets: defaultPresets.concat(['@babel/preset-react']),
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        [
            '@babel/plugin-proposal-object-rest-spread',
            {
                // Workaround for https://github.com/babel/babel/issues/8323
                loose: process.env.BABEL_ENV !== 'es',
            },
        ],
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-transform-runtime',
    ],
    env: {
        coverage: {
            plugins: [
                'babel-plugin-istanbul',
                [
                    'babel-plugin-module-resolver',
                    {
                        root: ['./'],
                        alias: {
                            '@mui/material': './packages/mui-material/src',
                            '@mui/icons-material': './packages/mui-icons-material/src',
                        },
                    },
                ],
            ],
        },
        development: {
            plugins: [
                [
                    'babel-plugin-module-resolver',
                    {
                        alias: {
                            modules: './modules',
                        },
                    },
                ],
            ],
        },
        'docs-development': {
            plugins: [
                'babel-plugin-preval',
                [
                    'babel-plugin-module-resolver',
                    {
                        alias: {
                            '@mui/material': './packages/mui-material/src',
                            '@mui/docs': './packages/mui-docs/src',
                            '@mui/icons-material': './packages/mui-icons-material/src',
                            '@mui/lab': './packages/mui-lab/src',
                            docs: './docs',
                            modules: './modules',
                            pages: './pages',
                        },
                    },
                ],
            ],
        },
        'docs-production': {
            plugins: [
                'babel-plugin-preval',
                [
                    'babel-plugin-module-resolver',
                    {
                        alias: {
                            '@mui/material': './packages/mui-material/src',
                            '@mui/docs': './packages/mui-docs/src',
                            '@mui/icons-material': './packages/mui-icons-material/src',
                            '@mui/lab': './packages/mui-lab/src',
                            docs: './docs',
                            modules: './modules',
                            pages: './pages',
                        },
                    },
                ],
                'transform-react-constant-elements',
                'transform-dev-warning',
                ['react-remove-properties', { properties: ['data-mui-test'] }],
                ['transform-react-remove-prop-types', { mode: 'remove' }],
            ],
        },
        es: {
            plugins: [
                'transform-react-constant-elements',
                'transform-dev-warning',
                ['react-remove-properties', { properties: ['data-mui-test'] }],
                [
                    'transform-react-remove-prop-types',
                    {
                        mode: 'wrap',
                    },
                ],
            ],
            // It's most likely a babel bug.
            // We are using this ignore option in the CLI command but that has no effect.
            ignore: ['**/*.test.js'],
        },
        production: {
            plugins: [
                'transform-react-constant-elements',
                'transform-dev-warning',
                ['react-remove-properties', { properties: ['data-mui-test'] }],
                [
                    'transform-react-remove-prop-types',
                    {
                        mode: 'wrap',
                    },
                ],
            ],
            // It's most likely a babel bug.
            // We are using this ignore option in the CLI command but that has no effect.
            ignore: ['**/*.test.js'],
        },
        'production-umd': {
            plugins: [
                'transform-react-constant-elements',
                'transform-dev-warning',
                ['react-remove-properties', { properties: ['data-mui-test'] }],
                [
                    'transform-react-remove-prop-types',
                    {
                        mode: 'wrap',
                    },
                ],
            ],
        },
        test: {
            sourceMaps: 'both',
            plugins: [
                [
                    'babel-plugin-module-resolver',
                    {
                        root: ['./'],
                        alias: {
                            '@mui/material': './packages/mui-material/src',
                            '@mui/icons-material': './packages/mui-icons-material/src',
                        },
                    },
                ],
            ],
        },
    },
};
