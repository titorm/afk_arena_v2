import Snackbar from 'react-native-snackbar';

import typography from '../theme/typography';
import colors from '../theme/colors/colors';

interface Props {
    message: string,
    type: 'danger' | 'warning' | 'success',
}

let timeout = 0;

const feedbackService = {
    hide() {
        Snackbar.dismiss();
    },
    show({ message, type }: Props) {
        if (message) {
            let backgroundColor;
            let duration;
            switch (type) {
                case 'error':
                    backgroundColor = colors.error;
                    duration = 8000;
                    break;
                case 'warning':
                    backgroundColor = colors.warning;
                    duration = 8000;
                    break;
                case 'info':
                    backgroundColor = colors.info;
                    duration = 5000;
                    break;
                default:
                    backgroundColor = colors.success;
                    duration = 5000;
                    break;
            }
            Snackbar.show({
                backgroundColor,
                duration: Snackbar.LENGTH_INDEFINITE,
                text: message,
                fontFamily: typography.fontFamily.medium,
                action: {
                    text: 'Ok!',
                    textColor: colors.white,
                    onPress: Snackbar.dismiss,
                },
            });
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(this.hide, duration);
        }
    },
    showErrorMessage(message) {
        this.show({ message, type: 'error' });
    },
    showInfoMessage(message) {
        this.show({ message, type: 'info' });
    },
    showSuccessMessage(message) {
        this.show({ message, type: 'success' });
    },
    showWarningMessage(message) {
        this.show({ message, type: 'warning' });
    },
};

export default feedbackService;
