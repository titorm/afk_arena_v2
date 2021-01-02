import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import icons from '../../utils/icons';

import Icon from '../../components/Icon';
import typography from '../../theme/typography';

function StatisticsLegend(props) {
    const { legends = [] } = props;

    function renderIcon(color) {
        return (
            <Icon
                name={icons.circle}
                color={color}
                type='solid'
            />
        );
    }

    function renderLegend({ legend, color }) {
        return (
            <View
                key={legend}
                style={styles.legendContainer}
            >
                {renderIcon(color)}
                <Text style={styles.legend}>{legend}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {legends.map(renderLegend)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        marginTop: 12,
        marginBottom: 24,
        flexDirection: 'row',
    },
    legendContainer: {
        alignItems: 'center',
        marginRight: 8,
        flexDirection: 'row',
        marginVertical: 4,
    },
    legend: {
        fontSize: typography.fontSize.caption,
        marginLeft: 4,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.caption,
    },
});

export default StatisticsLegend;
