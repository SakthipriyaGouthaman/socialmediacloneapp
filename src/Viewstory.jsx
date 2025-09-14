import React, { useEffect, useState } from 'react';
import { useParams,Link,useNavigate ,useNavigation} from 'react-router-dom';

function Viewstory ()
{
    const {id,tot}=useParams();
    const [story,setStory]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:8080/story/${id}`)
        .then(data=>data.json())
        .then(data=>setStory(data))
        .catch(er=>console.log(er))
    },[id]);
    if(id>tot || id<=0)
    {
        navigate('/');
    }
    return(
        <div>
            {story?
            <div className='d-flex justify-content-center align-items-center'>
                <Link to={`/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left"></i></Link> 
                <img className='story-img vh-100' src={story.image} alt="story"/>
                 <Link to={`/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right"></i></Link> 
                </div>:
                <div>Loading</div>
            }   
            </div>

    )
}
export default Viewstory