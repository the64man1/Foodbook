import React from 'react'
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

function Profile({firstName, lastName,userName, email, Recipe1, Recipe2}) {
    const { loading, data } = useQuery(QUERY_ME);
    console.log(data)

    return (
        <div className="profile">
            <div>
           
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
                <h3>{userName}</h3>
                <h3>{email}</h3>
               
            </div>
            <div>
             
            <h3>{Recipe1}</h3> 
            <h3>{Recipe2}</h3> 
             
            </div>

        </div>
    )
}

export default Profile;

