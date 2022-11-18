const template = ({ imports, interfaces, componentName, jsx, exports }, { tpl }) => {
    const getViewBox = (name) => {
        let viewBoxDimensions;

        switch (name) {
            case 'SvgEaton':
                viewBoxDimensions = `'0 0 24 7'`;
                break;
            case 'SvgEatonTagline':
            case 'SvgEatonTwoTone':
            default:
                viewBoxDimensions = `'0 0 24 8'`;
        }

        return viewBoxDimensions;
    };

    const viewBox = getViewBox(componentName);

    return tpl`
    ${imports}
    import SvgIcon from '@mui/material/SvgIcon';
    ${interfaces};
    const ${componentName} = (props) => React.createElement(SvgIcon,{style: {height: '1em', width: 'auto'}, ...props, viewBox: ${viewBox}},${jsx.children});
    ${exports};
    `;
};

module.exports = template;
