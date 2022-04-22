import { connect, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ShowUser } from "./DisplayUser";

export function DisplayUsers(props) {
    const users = useSelector((state) => state.usersReducer.users)

    const [users1, updateUsers1] = useState([]);
    const [users2, updateUsers2] = useState([]);

    useEffect(() => {
        if (users && users.length) {
            updateUsers1(users.filter((user, index) => index%2 === 0))
            updateUsers2(users.filter((user, index) => index%2 !== 0))
        }
    }, [users])

    return (
        <div class = "container">
            {users1 && users1.length && users2 && users2.length ? 
                <div class = "row ">
                    <div class = "col">
                        {users1.map(user => {
                            return <div><ShowUser user = {user}/></div>
                        })}
                    </div>
                    <div class = "col">
                        {users2.map(user => {
                            return <div><ShowUser user = {user}/></div>
                        })}
                    </div>
                </div>
            : <></>} 
        </div>
    )
}

export default DisplayUsers