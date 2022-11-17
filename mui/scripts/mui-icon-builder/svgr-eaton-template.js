const template = ({ imports, interfaces, componentName, jsx, exports }, { tpl }) => {
    return tpl`${imports}; 
    import SvgIcon from '@mui/material/SvgIcon';
    ${interfaces};
    const styles = {height: '1em', width: 'auto'};
    const getViewBox = (name) => { 
        let viewBoxDimensions;

        switch(name) {
            case 'SvgEaton':
                viewBoxDimensions = '0 0 24 7';
                break;
            case 'SvgEatonTagline':
            case 'SvgEatonTwoTone':
            default:
                viewBoxDimensions = '0 0 24 8';
        }
        
        return viewBoxDimensions;
    }
    const ${componentName} = React.createElement(SvgIcon, {style: styles, viewBox: getViewBox('${componentName}')}, ${jsx.children});
    ${exports};`;
};

module.exports = template;
