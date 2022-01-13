import { Label, Content, State, VerticallDivisor } from "../../Common/Grid/Index"
import { RenderBadge } from "../RenderBadge/Index";
import { RenderIcon } from "../RenderIcon/Index"



export const switchData = ({ label, content, type, active, line, color, bgColor }: any) => {
    
    switch (type) {
        case "label":
            return (
                <>
                    <Label>{label}</Label>
                    <Content color={active}>{content}</Content>
                    {line && <VerticallDivisor />}
                </>);

        case "icon":
            return <RenderIcon color={'#ffffff'} bgColor={"#57b4e5"} icon={"bi bi-person-fill"} />

        case "badge":
            return <RenderBadge color={color} bgColor={bgColor} icon={"bi bi-person-fill"} content= {content}/>

        case "state":
            return <State>{content}</State>;
    }
}


