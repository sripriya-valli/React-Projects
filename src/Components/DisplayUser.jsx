import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUser, viewUser, addToFavorite } from "../Actions/ActionCreators";
import { Link } from 'react-router-dom'; 

export function ShowUser(props) {
    const users = useSelector((state) => state.usersReducer.users);
    const dispatch = useDispatch();

    const [user, updateUser] = useState(props.user);
    const [isEdit, updateEdit] = useState(false);
    const [email, updateEmail] = useState(user.email);
    const [phone, updatePhone] = useState(user.phone);
    const [url, updateUrl] = useState(user.website);

    console.log(user.like)

    return (
        <div class = "container">
            <div class = "card text-dark bg-light mb-1" style = {{width: "350px", height : "300px"}}>
                <Link to={`/displayUser/${user.id}`}>
                <div class = "container"> <div class = "container" onClick = {() => dispatch(viewUser(user))}> 
                    <img class="card-img-top  container" src={user.image} alt="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" 
                    width = "120px"
                    height = "150px"/>
                 </div></div>
                 </Link>
                 <div class="card-body"> 
                        <small><h5 class="card-title">{user.name}</h5></small>
                        <p class="card-text"><small><i class="bi bi-envelope"></i>{` `}
                        {isEdit === false ? user.email : <input value={email} onChange={e => updateEmail(e.target.value)}/>}<br/>
                        <i class="bi bi-telephone"></i>{` `}
                        {isEdit === false ? user.phone :  <input value={phone} onChange={e => updatePhone(e.target.value)}/>} <br/>
                        <i class="bi bi-globe"></i>{` `}
                        {isEdit === false ? user.website : <input value={url} onChange={e => updateUrl(e.target.value)}/>}</small>
                        {isEdit === true ?
                        <Link to={`/`}>
                        <button class = "btn btn-outline-success btn-sm float-end" onClick = {
                            () => {
                                [user.email, user.phone, user.website]  = [email, phone, url];
                                users[user.id-1] = user
                                dispatch(editUser(users))
                                updateEdit(false)
                            }
                        }> Save</button></Link>  : <></>} </p>
                </div>  

                <ul class="list-group list-group-horizontal">
                    
                    {/* Add to favourite */}
                    <li class="list-group-item col text-center">
                        <i type="button" style= {{color : "red"}} class= {user.like === true ? "bi bi-heart-fill" : "bi bi-heart "}
                            onClick = {() => {
                            user.like = !user.like
                            users[user.id-1] = user
                            dispatch(addToFavorite(users))
                        }}/>
                    </li>
                    
                    {/* Edit a User */}
                    <li class="list-group-item col text-center">
                        <Link to={`/editUser/${user.id}`}>
                            <i style= {{color : "grey"}} class="bi bi-pen" onClick={ () => {
                                dispatch(viewUser(user))
                                updateEdit(!isEdit)
                            }} />    
                        </Link>
                    </li>
                    
                    {/* Delete a User */}
                    <li class="list-group-item col text-center">
                        <i style= {{color : "grey"}} class="bi bi-trash" onClick={() => dispatch(deleteUser(user.id))}/>
                    </li>
                </ul>

            </div><br/><br/>
        </div>
    )

}