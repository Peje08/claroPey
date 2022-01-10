import { FunctionComponent } from "react"
import styled from "styled-components"

interface ColInterface {
    size: number
    colSize?: number
    ml?: string
    mt?: string
    bgColor?: string
}

export const Container: FunctionComponent = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
`

export const Col: FunctionComponent<ColInterface> = styled("div")<{
    size: number
    colSize?: number
    ml?: string
    mt?: string
    bgColor?: string
}>`
    width: 24,39%;
    `