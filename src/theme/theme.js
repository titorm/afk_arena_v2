import colors from './colors/colors';
import typography from './typography';

const theme = {
    dark: true,
    mode: 'adaptive',
    colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        text: colors.text,
        error: colors.error,
    },
    fonts: {
        thin: {
            fontFamily: typography.fontFamily.thin,
        },
        light: {
            fontFamily: typography.fontFamily.light,
        },
        regular: {
            fontFamily: typography.fontFamily.regular,
        },
        medium: {
            fontFamily: typography.fontFamily.medium,
        },
    },
};

export default theme;
