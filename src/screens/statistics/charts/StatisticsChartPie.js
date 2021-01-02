import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { VictoryPie } from 'victory-native';

import typography from '../../../theme/typography';

import StatisticsLegend from '../StatisticsLegend';

const { width } = Dimensions.get('window');

function StatisticsChartPie(props) {
    const { data = [], colorScale = [] } = props;

    const size = width * 0.80;

    const legends = data.map(({ label, color }) => {
        return {
            legend: label,
            color,
        };
    });

    const mapedData = data.map(({ y, color }) => {
        return {
            y,
            label: y,
            color,
        };
    });

    return (
        <View style={styles.container}>
            <VictoryPie
                width={size}
                height={size}
                data={mapedData}
                cornerRadius={4}
                padAngle={1.5}
                colorScale={colorScale}
                padding={chartStyles.chartPadding}
                style={chartStyles.style}
                innerRadius={size / 4}
            />
            <StatisticsLegend
                legends={legends}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});

const chartStyles = {
    chartPadding: {
        bottom: 0,
        left: 24,
        right: 24,
        top: 0,
    },
    style: {
        data: {
            strokeWidth: 1.5,
            stroke: ({ datum }) => datum.color,
        },
        labels: {
            padding: 8,
            fontSize: typography.fontSize.caption,
            fontFamily: typography.fontFamily.regular,
            letterSpacing: typography.letterSpacing.caption,
        },
    },
};

export default StatisticsChartPie;
