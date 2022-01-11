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

export const Container: FunctionComponent<ContainerIterface> = styled("div")<{
    wrap?: string
    alignContent?: string
}>`
    box-sizing: border-box;
    width: 1080px;
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => (props.wrap ? "wrap" : "no-wrap")};
    align-content: ${props => props?.alignContent};
    border: 1px solid red;
`
export const Col: FunctionComponent<ColInterface> = styled("div")<{
    size: number
    colSize?: number
    bgColor?: string
    width?: number;
}>`
    width: ${props => props.size * (100 / (props?.colSize || 12))}%;
    background-color: ${props => props.bgColor};
`
export const Label = styled.div`
  height: 14px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "OpenSans-Regular", "Open Sans", sans-serif;
  color: #5a5a5a;
  text-align: left;
  font-size: 10px;
  line-height: normal;
`;

export const Content = styled('div')<{
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
    color: ${ props => props?.color ? props.color : "#5a5a5a"};
`;

export const Element = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;
export const Icon = styled.img`
    height: 28px;
    border-radius: 50%;
`;
export const State = styled.div`
    display: inline-block;
    background-color: #19b162;
    padding: .6rem 1.4rem;
    font-size: .8rem;
    border-radius: 4px;
    color: #fff;
    font-weight: 550;
    font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans",sans-serif;
`