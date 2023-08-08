import { styled } from "styled-components";
import { colorsData } from "../../../config/site-style/colors";
import { Link } from "react-router-dom";
export const HeaderBottomBox = styled.div`
background-color: ${colorsData.primary};
`

export const LinkDefault= styled(Link)`
text-decoration: none;
`