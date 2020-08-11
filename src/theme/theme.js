import colors from './colors/colors';
import typography from './typography';

const theme = {
    dark: true,
    mode: 'adaptive',
    colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        error: colors.error,
    },
    fonts: {
        fontFamily: typography.fontFamily.regular,
    },
};

export default theme;
