import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Profile = () => {

  const { user, userData } = useContext(AuthContext);
  useEffect(() => {
    if(user !== null){

    
    }
  },[user])
  return (
    <div>
      <h1>office/user profile page</h1>

      {user.name}
    </div>
  )
}

export default Profile
