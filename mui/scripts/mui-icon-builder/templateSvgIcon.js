/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import React from 'react';
import createSvgIcon from '@material-ui/icons/utils/createSvgIcon';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        notSquare: {
            height: '1em',
            width: 'auto',
        },
    })
);

const create = ({{width}} !== 24 || {{height}} !== 24) ? 
    (props) => {
        const {classes = {}, ...otherProps} = props;
        const styles = useStyles();
        const newClasses = {...classes,
          root: styles.notSquare + ' ' + (classes.root || '')
        };
      
        return(
            <SvgIcon viewBox={'0 0 ' + {{width}} + ' ' + {{height}}} classes={newClasses} {...otherProps}>
                <React.Fragment>{{{paths}}}</React.Fragment>
            </SvgIcon>)
    }
    : 
    createSvgIcon(
        <React.Fragment>{{{paths}}}</React.Fragment>
        , '{{componentName}}'
    )
;
export default create;
