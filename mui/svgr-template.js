const template = ({ imports, interfaces, componentName, jsx, exports }, { tpl }) => {
    const getComponentName = (name) => {
        let newComponentName;

        switch (name) {
            case 'SvgEvPlugIec62196T3A':
                newComponentName = 'SvgEvPlugIec62196T3a';
                break;
            case 'SvgEvPlugIec62196T3C':
                newComponentName = 'SvgEvPlugIec62196T3c';
                break;
            default:
                newComponentName = name;
        }

        return newComponentName;
    };

    const getComponentExports = (name) => {
        let newComponentExports;

        switch (name) {
            case 'SvgEvPlugIec62196T3A':
                newComponentExports = [
                    {
                        type: 'ExportDefaultDeclaration',
                        declaration: { type: 'Identifier', name: 'SvgEvPlugIec62196T3a' },
                    },
                ];
                break;
            case 'SvgEvPlugIec62196T3C':
                newComponentExports = [
                    {
                        type: 'ExportDefaultDeclaration',
                        declaration: { type: 'Identifier', name: 'SvgEvPlugIec62196T3c' },
                    },
                ];
                break;
            default:
                newComponentExports = exports;
        }

        return newComponentExports;
    };

    return tpl`
    ${imports};
    import { createSvgIcon } from '@mui/material/utils';
    ${interfaces};
    const ${getComponentName(componentName)} = createSvgIcon(React.createElement(React.Fragment, {}, ${
        jsx.children
    }), '${getComponentName(componentName)}');
    ${getComponentExports(componentName)};
    `;
};

module.exports = template;
