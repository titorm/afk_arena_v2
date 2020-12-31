import React from 'react';

import icons from '../../../utils/icons';
import colors from '../../../theme/colors/colors';

import Icon from '../../Icon';

function HeroItemAscension(props) {
    const { furniture } = props;
    const { acquired } = furniture;

    const type = acquired ? 'solid' : 'light';
    const color = acquired ? colors.mythic : colors.text;

    return (
        <Icon
            color={color}
            name={icons.diamond}
            type={type}
        />
    );
}

export default HeroItemAscension;
