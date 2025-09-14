import React, { useEffect, useState } from "react";
import axios from 'axios';
function Profile(){
    const [profile,setProfile]=useState(null);
    const [followers,setfollowers]=useState([]);
    const [unfollwed,setunfollowed]=useState(0);
    useEffect(()=>
    {
        axios.get('http://localhost:8080/profile')
        .then(data=>setProfile(data.data[0]))
            .catch(er=>console.log(er))
            axios.get('http://localhost:8080/followers')
            .then(data=>setfollowers(data.data))
        .catch(er=>console.log(er))
    },[unfollwed])
    function handleOnchange(e){
setProfile(prev=>({
    ...prev,
    [e.target.name]:e.target.value
}))
    }
        const handleUpdate=async()=>{
            axios.put('http://localhost:8080/profile',profile)
            .then(alert('Updated successfully'))
        .catch(err=>console.log(err))
        }
    const handleUnfollow=async(id)=>{
     axios.delete(`http://localhost:8080/followers/${id}`)
    .then(() => alert('unfollowed'))
    .then(setunfollowed(!unfollwed))
    .catch(er => console.log(er))
    }
    return( 
        <div className="m-5">{profile?(
            <div>
                <img src={profile.profilePic} className="profile rounded-circle"/>
                <h5>{profile.username}</h5>
                <input type="text" value={profile.username} name="username" className="form-control my-4" onChange={handleOnchange}/>
                <input type="text" name="profilePic" value={profile.profilePic} className="form-control my-4" onChange={handleOnchange} />
                <button className="btn btn-primary my-4" onClick={handleUpdate}>Update</button>
                </div>):(
                    <div>Loading</div>
                )
        }
        {
            followers.length>0?
            (followers.map(follower=>(
                <div key={follower.id} className="d-flex my-2">
                    {follower.username}
                    <button className="btn btn-secondary ms-auto" onClick={()=>{handleUnfollow(follower.id)}}>UnFollow</button>
                    </div>
            ))):(
                <div>Loading Followers</div>
            )
        }

        </div>
    )
}
export default Profile