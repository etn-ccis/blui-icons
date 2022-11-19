const template = ({ imports, interfaces, componentName, jsx, exports }, { tpl }) => {
    return tpl`
    import React from 'react';
    import { createSvgIcon } from '@mui/material/utils';
    ${interfaces};
    const ${componentName} = createSvgIcon(React.createElement(React.Fragment, {}, ${jsx.children}), '${componentName}');
    ${exports};
    `;
};

module.exports = template;
