import { useEffect, useState } from "react"
import axios from "axios";

function Suggestions() {
    const [profile, setProfile] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [text,setText]=useState("Follow")
    useEffect(() => {
        fetch('http://localhost:8080/profile')
            .then(data => data.json())
            .then(data => setProfile(data[0]))
            .catch(er => console.log(er));

            fetch('http://localhost:8080/suggestions')  
                .then(data => data.json())
                .then(data => setSuggestions(data))
                .catch(er => console.log(er));  

    }, []);
const handleFollow=async(id,username,e)=>{
    axios.post('http://localhost:8080/followers',{"id":id,"username":username})
    .then(()=>{e.target.innerText="Following"})
    .catch(er=>console.log(er))
}
    return (    
        <div>
            <div className="suggestions w-75 m-4 ">
                {profile ?(
                    <div className="d-flex">
                        <img className="dp rounded-circle" src={profile.profilePic} alt="profile picture" />
                        <h5>{profile.username}</h5>
                        <small className="ms-auto text-primary">Switch</small>
                    </div>
                    ):( <div>Loading</div>)
                }
                <div className="d-flex">
                    <p>Suggested for you</p>
                    <b className="ms-auto">See All</b>
                </div>  

                {suggestions.length > 0 ? (
                    <div>
                        {
                            suggestions.map((suggestion) => (
                                <div key={suggestion.id}>
                                    <div className="d-flex">
                                        <img className="dp rounded-circle my-2" src={suggestion.profilePic} alt="profile picture" />
                                        <h5 className="my-1">{suggestion.username}</h5>
                                        <button className="btn btn-primary my-1 ms-auto" onClick={(e)=>{handleFollow(suggestion.id,suggestion.username,e    )}}>Follow</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div>Loading</div>
                )
                }

            </div>
        </div>
    )
}
export default Suggestions