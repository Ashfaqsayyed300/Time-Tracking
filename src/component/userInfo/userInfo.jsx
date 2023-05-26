import React, { useEffect } from "react";
import userImg from '../../images/image-jeremy.png';

import './userInfo.css'

const UserInfo = (props)=>{

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(props.data));
      }, [props.data]);

    return(
        <div className="userInfo">
            <img src={userImg} alt="Jeremy Robson"/>
            <div className="infoContainer">
                <h4>Info for</h4>
                <h1>{props.data[0].username}</h1>
            </div>
        </div>
    );
}

export default UserInfo;