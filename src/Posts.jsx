    import axios from "axios";
    import React, { useState,useEffect } from "react";

    function Posts(){
        const [posts,setposts]=useState([]);
        const [likes,setLikes]=useState(0)
        useEffect(()=>{
            fetch('http://localhost:8080/post')
            .then((data)=>data.json())
            .then((data)=>setposts(data))
            .catch(err=>console.log(err))
        },[]);
        const handlelike=async(id)=>{
            axios.post(`http://localhost:8080/post/${id}`   )
            .then(()=>setLikes(prev=>prev+1))
            .catch(er=>console.log(er))
        }
        return (    
            <div className="d-flex justify-content-center">
                {posts.length > 0 ? (
                    <div>
                        {posts.map((post)=>(
                        <div className="my-3" key={post.id}>
                            <div className="d-flex">
                                <img className="dp rounded-circle" src={post.profilePic} alt="profile picture" />
                                <h5>{post.username}</h5>
                                </div>
                                <img className="image" src={post.image} alt="post" />
                                <div>
                                <a className="heart" onClick={()=>handlelike()} > <i className="bi bi-heart"/></a>
                                    <i className="bi bi-chat"></i>
                                    <i className="bi bi-send"></i>
                                    </div>
                                    <b>{post.likes} Likes</b>
                                    <p>{post.caption}</p>
                                </div>
                                
                    )) }
                    </div>
                    ):(
                    <div>
                        Loading posts
                    </div>
                )}
            </div>         
        )
    }
    export default Posts