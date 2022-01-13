import { FunctionComponent } from "react";
import styled from "styled-components"

interface BadgeInterface {
    content: string
    icon: string
    color?: string
    bgColor?: string
}

const Badge = styled('p') <{
    bgColor?: string
    color?: string
}>`
    background: ${props => props?.bgColor};
    color: ${props => props?.color};
    border-radius: 5px;
    font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans",sans-serif;
    padding: 5px 12px 5px 3px;
    font-size: .7rem;
    margin:0;
    display: flex;
    gap: 8px;
    align-items: center;
    font-weight: 600;
    & i{
        color:${props => props?.bgColor};
        background: ${props => props?.color};
        border-radius:50px;
        font-size: 1rem;
        height: 1.3rem;
        width: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const RenderBadge: FunctionComponent<BadgeInterface> = ({ icon, color, bgColor, content }) => (
    <Badge color={color} bgColor={bgColor}> <i className={icon}/> {content} </Badge>
)
