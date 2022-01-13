import { FunctionComponent } from "react";
import styled from "styled-components"


interface IconInterface {
    icon: string;
    color?: string
    bgColor?: string
}

const Icon = styled('p') <{
    color?: string
    bgColor?: string
}>`
    align-self: center;
    background: ${props => props?.bgColor};
    border-radius: 50%;
    color: ${props => props?.color};
    font-size: 25px;
    height: 30px;
    margin: 0;
    text-align: center;
    width: 30px;  
`;

export const RenderIcon: FunctionComponent<IconInterface> = ({ icon, color, bgColor }) => (
    <Icon color={color} bgColor={bgColor}> <i className={icon}/> </Icon>
)
