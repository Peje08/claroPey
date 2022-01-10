import React, { FunctionComponent, useContext } from 'react'
import {CONTEXT} from '../../context';
import { DisplayInfo } from '../../Components/DisplayInfo/Index';
import { userMock } from '../../Mock/DisplayInfo/userMock';


const Home:FunctionComponent = () => {

    const {
        state,
        dispatch,
    } : any = useContext(CONTEXT);
    console.log(state)

    return (
    
            <DisplayInfo user={userMock}  />
        
    )
}

export default Home;