import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import statisticsService from '../../services/statisticsService';

import Caption from '../../components/Caption';
import StatisticsChartPie from './charts/StatisticsChartPie';

function Statistics(props) {
    const { heroList = [] } = props;

    const [ascensionStats, setAscensionStats] = useState([]);
    const [signatureItemStats, setSignatureItemStats] = useState([]);
    const [furnitureStats, setFurnitureStats] = useState([]);
    const [equipmentStats, setEquipmentStats] = useState([]);

    useEffect(() => {
        setAscensionStats(statisticsService.getAscensionStats(heroList));
        setSignatureItemStats(statisticsService.getSignatureItemStats(heroList));
        setFurnitureStats(statisticsService.getFurnitureStats(heroList));
        setEquipmentStats(statisticsService.getEquipmentStats(heroList));
    }, [heroList]);

    function getColorScale(stats) {
        const colorScale = stats.map(({ color }) => color);
        return colorScale;
    }

    return (
        <ScrollView>
            <Caption>Ascension</Caption>
            <StatisticsChartPie
                data={ascensionStats}
                colorScale={getColorScale(ascensionStats)}
            />

            <Caption>Signature Item</Caption>
            <StatisticsChartPie
                data={signatureItemStats}
                colorScale={getColorScale(signatureItemStats)}
            />

            <Caption>Furniture</Caption>
            <StatisticsChartPie
                data={furnitureStats}
                colorScale={getColorScale(furnitureStats)}
            />

            <Caption>Equipment</Caption>
            <StatisticsChartPie
                data={equipmentStats}
                colorScale={getColorScale(equipmentStats)}
            />

        </ScrollView>
    );
}

export default Statistics;
