import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        background: {
            layoutBackground: 'linear-gradient(39.97deg, #7879F1 0.79%, #7834BE 79.29%)',
            contentBackground: '#fff'
        },
        textColor: {
            default: '#fff',
            black: 'black'
        }
    },
});

export default theme;