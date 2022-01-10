import React, { FunctionComponent } from "react";
import {Col, Container} from "../../Common/Grid/Index"



interface UserDisplayInterface {

    icon: string
    holder: string
    dni: number
    clientNumber: number
    lineNumber: number
    state: string
    userType: string

    //

    activeLines: number
    accountLines: number
    business: string
    period: number
    segment: string
    plan: string
    recharge: number
    voiceOn: number
    voiceOff: number
    sms: number
    megas: number
    reBuy: number
}


interface DisplayUser {
    user: UserDisplayInterface;
};




export const DisplayInfo: FunctionComponent<DisplayUser> = ({ user }) => {
    const data = Object.keys(user)

    return (
        <Container >
            
                {data.map((
                    value, key
                ) => <Col size={3}>{value}</Col>
                     
                )} 
                 
        </Container>

    )
}


