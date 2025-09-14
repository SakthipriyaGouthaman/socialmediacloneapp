    import React from "react";
    import { useNavigate } from "react-router-dom";
    import { useState,useEffect } from "react";
    function Stories(){
        const navigate=useNavigate();
        let tot=0;
        const [stories,setStory]=useState([]);
        useEffect(()=>
        {
            fetch('http://localhost:8080/story')
            .then(data=>data.json())
            .then(data=>setStory(data))
            .catch(er=>console.log(er))
        },[]);
        return (    
            <div className="story d-flex">
                <div className="d-none">  {tot=stories.length}</div>
                {stories.length>0?(
                    stories.map((story)=>                   
                    <div key={story.id} className="mx-1" onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
                        <div className="gradient-border">
                            <img src={story.profilePic} alt="dp" className="story-dp rounded-circle"/>
                    </div>
                    <p className="text-truncate" style={{width:"50px"}}>{story.username}</p>
                    </div>
                )
                ):(
                    <p>Loading</p>
                )}
            </div>   
        )
    }
    export default Stories          