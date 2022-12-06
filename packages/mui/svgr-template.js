const template = ({ imports, interfaces, componentName, jsx }, { tpl }) => {
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

    const updatedComponentName = getComponentName(componentName);

    return tpl`
    import React from 'react';
    import { createSvgIcon } from '@mui/material/utils';
    ${interfaces};
    const ${updatedComponentName} = createSvgIcon(React.createElement(React.Fragment, {}, ${jsx.children}), '${updatedComponentName}');
    export default ${updatedComponentName}
    `;
};

module.exports = template;
