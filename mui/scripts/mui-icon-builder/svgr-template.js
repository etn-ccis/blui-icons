const template = ({ imports, interfaces, componentName, jsx, exports }, { tpl }) => {
    return tpl`${imports}; 
    import { createSvgIcon } from '@mui/material/utils';
    ${interfaces};
    const ${componentName} = createSvgIcon(${jsx.children}, '${componentName}');
    ${exports};`;
};

module.exports = template;
