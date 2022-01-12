import React, { FunctionComponent } from "react";
import { Col, Container, Label, Content, Element, Icon, State, HorizontalDivisor, VerticallDivisor, Badge } from "../../Common/Grid/Index"

interface DisplayUser {
    user: any[];
};


export const DisplayInfo: FunctionComponent<DisplayUser> = ({ user }) => {

    return (
        <Container wrap={"wrap"}>
            <HorizontalDivisor />
            {user.map((
                { label, content, type, active, line, col,color,bgColor }
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
                                    return <Icon color={'#ffffff'} bgColor={'#57b4e5'}><i className="bi bi-person-fill"></i>Liliana</Icon>
                                case "badge":
                                    return <Badge color={color} bgColor={bgColor}><i className="bi bi-person-fill"></i>{content}</Badge>
                                case "state":
                                    return <State>{content}</State>;
                            }
                        })()}
  {/* {
    type:"badge",
    color: "#fff",
    bgColor: "#fa7321",
    userType: "BÁSICO",
    col: 3
  }, */}
                    </Element>
                </Col>
            )}

        </Container>

    )
}

