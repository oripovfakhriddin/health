import { styled } from "styled-components";
import { colorsData } from "../../../config/site-style/colors";
import { Link } from "react-router-dom";
import telIcon from "../../../assets/tel-icon.svg"

export const HeaderTopWrapper=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const NavBar =styled.div`
display: flex;
align-items: center;
justify-content: space-between;


span{
  height: 12px;
  width: 1.5px;
  background-color: ${colorsData.grey[700]};
  display: inline-block;
  margin: 0 16px;
  &:last-child{
    display: none;
  }
}
`

export const NavBarLink = styled(Link)`
text-decoration: none;
text-transform: uppercase;
font-weight: 500;
font-size: 13px;
color: ${colorsData.grey[800]};
`

export const TelpathData=styled.a`
  color: #009FDF;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  &::before{
    content: "";
    background-image: url(telIcon);
    }
`