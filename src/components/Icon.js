import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import icons from '../utils/icons';
import colors from '../theme/colors/colors';

import { light, solid, brands, regular } from '../../assets';

interface Props {
    name: String,
    size: Number,
    type: String,
    color: String,
    onPress?: () => void,
    iconStyle?: any,
    activeOpacity?: Number,
    containerStyle?: any,
}

const Icon = (props: Props) => {
    const {
        name = icons.question_circle,
        size = 20,
        color = colors.black,
        type = 'light',
        containerStyle,
        iconStyle,
        onPress,
        activeOpacity = 0.2,
    } = props;

    let iconData = light[name];
    if (type === 'solid') {
        iconData = solid[name];
    } else if (type === 'regular') {
        iconData = regular[name];
    } else if (type === 'brands') {
        iconData = brands[name];
    }
    if (!iconData) {
        iconData = light[icons.question_circle];
    }

    const path = iconData[4];
    const viewBox = [0, 0, iconData[0], iconData[1]].join(' ');

    const iconContent = (
        <Svg
            height={size}
            version='1.1'
            viewBox={viewBox}
            width={size}
            x='0'
            y='0'
            style={iconStyle}
        >
            <Path
                d={path}
                fill={color}
            />
        </Svg>
    );

    if (onPress || containerStyle) {
        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={!onPress}
                style={containerStyle}
                activeOpacity={activeOpacity}
            >
                {iconContent}
            </TouchableOpacity>
        );
    }

    return iconContent;
};

export default Icon;
