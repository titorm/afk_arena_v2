import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Defs, Line, LinearGradient, Stop, Svg } from 'react-native-svg';

import colors from '../theme/colors/colors';
import typography from '../theme/typography';

function PageHeader(props) {
    const { title, subtitle } = props;

    function renderSubtitle() {
        if (!subtitle) {
            return null;
        }
        return (
            <Text style={styles.subtitle2}>{subtitle}</Text>
        );
    }

    return (
        <>
            <Text style={styles.h4}>{title}</Text>
            {renderSubtitle()}
            <View style={styles.gradientContainer}>
                <Svg
                    height='2'
                    width='100'
                >
                    <Defs>
                        <LinearGradient
                            id='grad'
                            x1='0'
                            y1='0'
                            x2='1'
                            y2='0'
                        >
                            <Stop
                                offset='0'
                                stopColor={colors.primary}
                                stopOpacity='1'
                            />
                            <Stop
                                offset='1'
                                stopColor={colors.secondary}
                                stopOpacity='1'
                            />
                        </LinearGradient>
                    </Defs>
                    <Line
                        x1='0'
                        x2='100'
                        stroke='url(#grad)'
                        strokeWidth='2'
                    />
                </Svg>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    h4: {
        color: colors.text,
        fontSize: typography.fontSize.h4,
        textAlign: 'center',
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.h4,
    },
    subtitle2: {
        color: colors.text,
        fontSize: typography.fontSize.subtitle2,
        textAlign: 'center',
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.h4,
        marginBottom: 8,
    },
    gradientContainer: {
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'center',
    },
});

export default PageHeader;
