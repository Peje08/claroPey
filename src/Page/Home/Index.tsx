import React, { FunctionComponent, useContext } from 'react'
import {CONTEXT} from '../../context';
import { DisplayInfo } from '../../Components/DisplayInfo/Index';
import { userMock, userMockClaroPay } from '../../Mock/DisplayInfo/userMock';



const Home:FunctionComponent = () => {

    const {
        state,
        dispatch,
    } : any = useContext(CONTEXT);
    
    return (
            <>
            <DisplayInfo user={userMock}  />
            <br/>
            <DisplayInfo user={userMockClaroPay}  />
            </>
    )
}

export default Home;