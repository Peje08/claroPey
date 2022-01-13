import { FunctionComponent } from "react";
import styled from "styled-components";

interface ColInterface {
    size: number
    colSize?: number
    bgColor?: string
    width?: number
}


const Container = styled.div`
    border: 2px solid #e4e4e4;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 1080px;
    `

const Col: FunctionComponent<ColInterface> = styled("div") <{
    size: number
    colSize?: number
    bgColor?: string
    width?: number;
}>`
    background-color: ${props => props.bgColor};
    width: ${props => props.size * (100 / (props?.colSize || 12))}%;
`
const Label = styled.div`
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    color: #5a5a5a;
    font-family: "OpenSans-Regular", "Open Sans", sans-serif;
    font-size: 10px;
    height: 14px;
    line-height: normal;
    text-align: left;
`;

const Content = styled('div') <{
    color?: string;
}>`
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    color: ${props => props?.color ? props.color : "#5a5a5a"};
    font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans",sans-serif;
    font-size: 15px;
    font-weight: 650;
    height: 20px;
    line-height: normal;
    text-align: left;
`;

const Element = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    position: relative;
    `;

const State = styled.div`
    background-color: #19b162;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    font-size: .8rem;
    font-weight: 550;
    font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans",sans-serif;
    padding: .6rem 1.4rem;
    text-align:center;
`

const HorizontalDivisor = styled.div`
    background-color: rgba(255, 255, 255, 0);
    border-bottom: 2px solid #e4e4e4;
    box-sizing: border-box;
    position: absolute;
    top: 48%;
    width: 100%;
`
const VerticallDivisor = styled.div`
    background-color: rgba(255, 255, 255, 0);
    border-right: 2px solid #e4e4e4;
    box-sizing: border-box;
    height: 55%;
    position: absolute;
    right: 0;
    top: 20%;
`

export {
    Container,
    Col,
    Label,
    Content,
    Element,
    State,
    HorizontalDivisor,
    VerticallDivisor,
};