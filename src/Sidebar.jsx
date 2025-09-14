import React from 'react'
import { useNavigate } from 'react-router-dom'
function Sidebar()
{
    const navigate=useNavigate();

return(
    <>
    <div className="d-flex flex-column gap-3 m-3 position-fixed">
        <img  src="assets\insta_text.png" className="logo_text" alt="" />
        <div onClick={()=>{navigate('/')}}><i className="bi bi-house-door"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-play-btn"></i>Reels</div>
        <div><i className="bi bi-chat-dots"></i>Messages</div>
        <div><i className="bi bi-heart"></i>Notification</div>
        <div><i className="bi bi-plus-square"></i>Create</div>
        <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
        </div>
        <div className="d-flex flex-column gap-3 position-fixed bottom-0 m-3 mb-2">
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>
        </div>
        </>
)}
export default Sidebar
