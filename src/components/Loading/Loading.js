import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

import colors from '../../theme/colors/colors';

function Loading() {
    return (
        <ActivityIndicator
            animating
            size={36}
            color={colors.primary}
        />
    );
}

export default Loading;
