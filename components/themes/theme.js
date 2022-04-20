import { createTheme } from "@mui/material/styles";

const createOptions = () => {
  return {
    colors: {
      primary_main: "#902fa1",
      primary_light: "#FFFAE6",
      secondary_main: "#000000",
      background: "#f0f1f2",
      dialog: "#902fa1",
      btnbg: "#3F3F3F",
      primarybtnbg: "#59AB2B",
      icon: "#BABABA",
      error: "#ED3833",
      greytext: "#676767",
      contrastText: "#fff",
      header: "#3e0148",
      tabs: "#f0f1f2",
      textcolor: "#000",
      activetext: "#fff",
      activeTabtext: "#fff",
      dialogtitle: "#000",
      headertext: "#ec92fc",
      outlinedborder: "#fff",
      dialogcontent: "#fff",
      greytext: "#666666",
      checkcircle: "#77d405",
      disabled: "#949494",
      shadedbtn: "#fff",
      secondaryborder: "#dddddd",
      formbg: "#f4f4f4",
      headerTypographyider: "#333333",
      betslip: "#fff",
      legs: "#fff",
      betslipicon: "#7d7c7c",
    },
    fonts: {},
  };
};
let options = createOptions();
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: options.colors.primary_main,
      contrastText: options.colors.contrastText,
      alternate: options.colors.primary_alternate,
    },
    secondary: {
      main: options.colors.secondary_main,
      light: "#77d405",
      button: options.colors.headerTypographyider,
    },

    error: {
      main: "#ff0000",
      light: "#ffdadb",
      countdown: "#ef2626",
      price: "#fc1804",
      alerttext: "#f60406",
      alert: "#fce3e6",
    },
    success: {
      main: "#59ab01",
      light: "#e8fad2",
      contrastText: "#fff",
      price: "#2ac002",
      alert: "#E7F4DA",
      alerttext: "#58A92A",
      disabled: "#b8d7a3",
    },
    warning: {
      main: "#f38401",
    },
    info: {
      main: "#7D7B7C",
    },
    background: {
      default: options.colors.background,
      header: options.colors.header,
      tabs: options.colors.tabs,
      dialogcontent: options.colors.dialogcontent,
      shadedbtn: options.colors.shadedbtn,
      form: options.colors.formbg,
      betslip: options.colors.betslip,
      legs: options.colors.legs,
    },
    text: {
      default: options.colors.textcolor,
      header: options.colors.headertext,
      active: options.colors.activetext,
      dialog: options.colors.dialogtitle,
      greytext: options.colors.greytext,
    },
    border: {
      outlined: options.colors.outlinedborder,
      secondary: options.colors.secondaryborder,
      Typographyider: options.colors.headerTypographyider,
    },
    icon: {
      checkcircle: options.colors.checkcircle,
      betslip: options.colors.betslipicon,
    },
    gray: {
      main: "#e2e2e2",
    },
    grey: {
      main: "#949494",
      light: "#bababa",
      dark: "#666666",
      primary: "#e2e2e2",
      secondary: "#b1b1b1",
      dark1: "#787879",
      tipBtn: "#f0f1f2",
      joinField: "#f4f4f4",
      joinBorder: "#cccccc",
      backdrop: "#3c3c3c",
      keypad: "#555555",
      Typographyidends: "#3f3f3f",
      border: "#3d3d3d",
      btntext: "#8F8F8F",
    },
    black: {
      main: "black",
      light: "black",
      contrastText: "#fff",
      price: "black",
      alert: "#E7F4DA",
      alerttext: "#58A92A",
      disabled: "##240b0b33",
    },
    white: {
      main: "#fff",
    },
  },
  Typography: {
    button: {
      textTransform: "none",
    },
    fontSize: 14,
    allVariants: {
      color: "#000",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: options.colors.tabs,
          color: options.colors.textcolor,
          "&.Mui-selected": {
            backgroundColor: options.colors.primary_main,
            color: options.colors.activeTabtext,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: options.colors.disabled,
          },
        },
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "secondary",
    },
  },
});

theme.Typography.h1 = {
  fontSize: "36px",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
};
theme.Typography.h2 = {
  fontSize: "20px",
};
theme.Typography.subtitle1 = {
  fontSize: "18px",
};
theme.Typography.subtitle2 = {
  fontSize: "14px",
};
export default theme;
