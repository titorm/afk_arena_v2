import React, { useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Accordion } from 'native-base';
import PageHeader from '../../components/PageHeader';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import { nextFeats, versions } from '../../services/roadmapService';

function RoadMapScreen(props) {
    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Manager',
        });
    }, [navigation]);

    const accordionItemList = [
        {
            title: 'Next Steps',
            content: (
                <>
                    {renderHeaderAndFeat('High Priority', nextFeats.high)}
                    {renderHeaderAndFeat('Medium Priority', nextFeats.medium)}
                    {renderHeaderAndFeat('Low Priority', nextFeats.low)}
                </>
            ),
            hideBorderBottom: false,
        },
        ...versions.map((version, index) => ({
            title: `${version.name} - ${version.date}`,
            content: (
                <>
                    {version.released.map(renderFeatText)}
                </>
            ),
            hideBorderBottom: index === (versions.length - 1),
        })),
    ];

    function renderAccordionContent(item) {
        const borderBottomWidth = item.hideBorderBottom ? 0 : 0.25;
        return (
            <View style={styles.contentContainer(borderBottomWidth)}>
                {item.content}
            </View>
        );
    }

    function renderAccordionHeader(item, expanded) {
        const borderBottomWidth = (expanded || item.hideBorderBottom) ? 0 : 0.25;
        return (
            <View style={styles.headerContainer(borderBottomWidth)}>
                <Text style={styles.caption}>{item.title}</Text>
            </View>
        );
    }

    function renderFeatText(feat) {
        return (
            <Text style={styles.feat}>{`- ${feat}`}</Text>
        );
    }

    function renderHeaderAndFeat(header, features = []) {
        return (
            <>
                <Text style={styles.header}>{header}</Text>
                <View style={styles.featContainer}>
                    {features.map(renderFeatText)}
                </View>
            </>
        );
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <ScrollView>
                        <>
                            <PageHeader
                                title='Road Map'
                                subtitle='What we plan on doing next and what is already done'
                            />

                            <Accordion
                                dataArray={accordionItemList}
                                style={styles.accordion}
                                renderHeader={renderAccordionHeader}
                                renderContent={renderAccordionContent}
                            />
                        </>
                    </ScrollView>
                </View>
            </View>
            <SafeAreaView />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
        backgroundColor: colors.background,
    },
    subContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 4,
        backgroundColor: colors.white,
        paddingHorizontal: 8,
    },
    spacer: {
        marginTop: 24,
    },
    caption: {
        color: colors.secondary,
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.medium,
        letterSpacing: typography.letterSpacing.caption,
        textTransform: typography.textTransform.uppercase,
    },
    accordion: {
        borderWidth: 0.25,
        borderRadius: 4,
    },
    headerContainer: (borderBottomWidth) => ({
        padding: 12,
        borderRadius: 4,
        borderBottomWidth,
    }),
    header: {
        color: colors.secondary,
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.medium,
        marginBottom: 8,
        letterSpacing: typography.letterSpacing.caption,
        textTransform: typography.textTransform.uppercase,
    },
    contentContainer: (borderBottomWidth) => ({
        flex: 1,
        marginTop: 4,
        borderRadius: 4,
        backgroundColor: colors.white,
        borderBottomWidth,
        paddingHorizontal: 12,
    }),
    featContainer: {
        marginBottom: 12,
    },
    feat: {
        color: colors.text,
        fontSize: typography.fontSize.subtitle2,
        fontFamily: typography.fontFamily.regular,
        marginBottom: 4,
        textTransform: typography.textTransform.none,
    },
});

export default RoadMapScreen;
