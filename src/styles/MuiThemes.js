import { createTheme } from '@material-ui/core/styles';
import { theme } from './index';

const { colors } = theme;

const MuiThemes = createTheme({
  palette: {
    primary: {
      main: colors.blue,
    },
    secondary: {
      main: colors.red,
    },
  },
});

export default MuiThemes;
