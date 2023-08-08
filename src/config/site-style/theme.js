import { createTheme } from "@mui/material";
import "./colors";
import { colorsData } from "./colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: `${colorsData.primary}`,
      contrastText: `${colorsData.white}`,
    },
    secondary: {
      main: `${colorsData.secondary}`
    }
    
  },


  typography:{
    fontFamily: [
      "Geometria"
    ].join("")
  },


  breakpoints:{
    values:{
      xs: 0,
      sm: 384,
      md: 776,
      lg:1248,

    }
  },


  components:{
    MuiButton:{
      variants:[
        {
          props: {variant: "outlined"},
          style:{
            borderRadius: "5px",
            border: `2px solid ${colorsData.secondary}`,
            color: colorsData.secondary,
            padding: "13px 40px",
            fontSize: "13px",
            fontWeight:"700",
            textTransform: "uppercase",
            "&:hover":{
              border: `2px solid ${colorsData.secondary}`,
            }
          }
        },
        {
          props: {variant: "contained"},
          style:{
            borderRadius: "5px",
            padding: "11px 39px",
            fontSize: "13px",
            fontWeight:"700",
            textTransform: "uppercase",
          }
        }
      ]
    }
  }
})