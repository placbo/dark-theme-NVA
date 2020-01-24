import { createMuiTheme } from '@material-ui/core';

// Extend Palette type to allow custom colors
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    separator: PaletteColor;
    box: PaletteColor;
    danger: PaletteColor;
  }
  interface PaletteOptions {
    separator?: PaletteColorOptions;
    box?: PaletteColorOptions;
    danger?: PaletteColorOptions;
  }
}

enum Colors {
  Primary = '#f2f2f2',
  Secondary = '#44475a',
  Background = '#282a36',
  Box = '#44475a',
  Link = '#8be9fd',
  Separator = '#3d4349',
  PrimaryText = '#f2f2f2',
  SecondaryText = '#8be9fd',
  ExpandedPanel = '#6272a4',
  TabBackground = '#3d4349',
  Disabled = '#6272a4',
  Danger = '#ff5555',
}

export default createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: Colors.Primary,
    },
    secondary: {
      main: Colors.Secondary,
    },
    separator: { main: Colors.Separator },
    box: { main: Colors.Box },
    danger: { main: Colors.Danger },
    text: {
      primary: Colors.PrimaryText,
      secondary: Colors.SecondaryText,
      disabled: Colors.Disabled,
    },
    background: {
      default: Colors.Background,
    },
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiSnackbarContent: {
      root: {
        color: Colors.Background,
      },
    },
    MuiLink: {
      root: {
        color: Colors.Link,
      },
    },
    MuiExpansionPanel: {
      root: {
        background: Colors.Secondary,
        '&$expanded': {
          background: Colors.ExpandedPanel,
        },
      },
    },
    MuiExpansionPanelDetails: {
      root: { background: Colors.ExpandedPanel },
    },
    MuiFormLabel: {
      root: {
        background: Colors.Background,
      },
    },
    MuiInputBase: {
      root: {
        background: Colors.Background,
      },
    },
    MuiTab: {
      root: {
        background: Colors.TabBackground,
      },
      textColorPrimary: {
        '&$selected': {
          color: Colors.PrimaryText,
          fontWeight: 'bold',
        },
      },
    },
    MuiTextField: {
      root: {
        marginTop: '1rem',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: Colors.Background,
      },
    },
    MuiIconButton: {
      root: {
        color: Colors.PrimaryText,
      },
    },
  },
});
