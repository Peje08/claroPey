import { FunctionComponent } from "react";
import styled from "styled-components";

interface ColInterface {
    size: number
    colSize?: number
    bgColor?: string
    width?: number
}
interface ContainerIterface {
    wrap?: string
    alignContent?: string
}

const Container: FunctionComponent<ContainerIterface> = styled("div") <{
    wrap?: string
    alignContent?: string
}>`
    box-sizing: border-box;
    width: 1080px;
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => (props.wrap ? "wrap" : "no-wrap")};
    align-content: ${props => props?.alignContent};
    border: 2px solid #e4e4e4;
    position: relative;
    border-radius: 5px;
    `

const Col: FunctionComponent<ColInterface> = styled("div") <{
    size: number
    colSize?: number
    bgColor?: string
    width?: number;
}>`
    width: ${props => props.size * (100 / (props?.colSize || 12))}%;
    background-color: ${props => props.bgColor};
`
const Label = styled.div`
  height: 14px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "OpenSans-Regular", "Open Sans", sans-serif;
  color: #5a5a5a;
  text-align: left;
  font-size: 10px;
  line-height: normal;
`;

const Content = styled('div') <{
    color?: string;
}>`
    height: 20px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans",sans-serif;
    font-weight: 650;
    font-size: 15px;
    text-align: left;
    line-height: normal;
    color: ${props => props?.color ? props.color : "#5a5a5a"};
`;

const Element = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    `;


const Icon = styled('p') <{
    color?: string
    bgColor?: string
}>`
    font-size: 25px;
    background: ${props => props?.bgColor};
    color: ${props => props?.color};
    border-radius: 50%;
    text-align: center;
    
    width: 30px;
    height: 30px;
    margin: 0;
    align-self: center;
    
`;
const State = styled.div`
    display: inline-block;
    background-color: #19b162;
    padding: .6rem 1.4rem;
    font-size: .8rem;
    border-radius: 4px;
    color: #fff;
    font-weight: 550;
    font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans",sans-serif;
`

const HorizontalDivisor = styled.div`
position: absolute;
width: 100%;
border-bottom: 2px solid #e4e4e4;
background-color: rgba(255, 255, 255, 0);
box-sizing: border-box;
top: 50%;
`
const VerticallDivisor = styled.div`
position: absolute;
height: 55%;
border-right: 2px solid #e4e4e4;
background-color: rgba(255, 255, 255, 0);
box-sizing: border-box;
right: 0;
top: 20%;
`


export {
    Container,
    Col,
    Label,
    Content,
    Element,
    Icon,
    State,
    HorizontalDivisor,
    VerticallDivisor
};