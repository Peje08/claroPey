import React, { FunctionComponent } from "react";
import { Col, Container, Label, Content, Element, Icon, State } from "../../Common/Grid/Index"
import styled from 'styled-components'

// interface UserDisplayInterface {
//     icon: string
//     holder: string
//     dni: number
//     clientNumber: number
//     lineNumber: number
//     state: string
//     userType: string
//     //
//     activeLines: number
//     accountLines: number
//     business: string
//     period: number
//     segment: string
//     plan: string
//     recharge: number
//     voiceOn: number
//     voiceOff: number
//     sms: number
//     megas: number
//     reBuy: number
// }


interface DisplayUser {
    user: any[];
};

export const DisplayInfo: FunctionComponent<DisplayUser> = ({ user }) => {
    
    return (
        <Container wrap={"wrap"}>
            {user.map((
                { label, content, type, active, line, col }
                ) =>
                <Col size={col}>
                    
                    <Element line={line}>
                        {(() => {
                            switch (type) {
                                case "label":
                                    return (
                                        <>
                                            <Label>{label}</Label>
                                            <Content color={active}>{content}</Content>
                                        </>);

                                case "icon":
                                    return <Icon color={'#ffffff'} bgColor={'#57b4e5'}><i className="bi bi-person-fill"></i></Icon>;
                                case "state":
                                    return <State>{content}</State>;
                                

                            }
                        })()}
                    </Element>
                </Col>
            )}
        </Container>
        
    )
}

