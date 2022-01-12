import React, { FunctionComponent } from "react";
import { Col, Container, Label, Content, Element, Icon, State, HorizontalDivisor, VerticallDivisor } from "../../Common/Grid/Index"

interface DisplayUser {
    user: any[];
};


export const DisplayInfo: FunctionComponent<DisplayUser> = ({ user }) => {

    return (
        <Container wrap={"wrap"}>
            <HorizontalDivisor />
            {user.map((
                { label, content, type, active, line, col }
                ) =>
                <Col size={col}>

                    <Element>
                        {(() => {
                            switch (type ) {
                                case "label":
                                    return (
                                        <>
                                            <Label>{label}</Label>
                                            <Content color={active}>{content}</Content>
                                            {line && <VerticallDivisor />}
                                        </>);
                                case "icon":
                                    return <Icon color={'#ffffff'} bgColor={'#57b4e5'}><i className="bi bi-person-fill"></i></Icon>
                                
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

