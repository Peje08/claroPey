import React, { FunctionComponent } from "react";
import { Col, Container, Label, Content, Element, Icon, State } from "../../Common/Grid/Index"

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
                        <Element>
                            {(() => {
                                switch (type) {
                                case "label":
                                    return (    
                                        <>
                                        {line && <div></div>}
                                        <Label>{label}</Label>
                                        <Content color={active}>{content}</Content>
                                        </>);
                                // Enviar prop a styled comp 
                                case "icon":
                                    return <Icon src={content} />;
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


