import { useDispatch, useSelector } from "react-redux";
import { removeFirstAction, removeLastAction, removeSomeAction } from "../store/usersReducer";
import { fetchUserList } from "../asyncActions/users";
import { useEffect } from "react";

const Users = () => {
    const users = useSelector(store => store.users)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchUserList())
    // }, []);
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users]);

    // console.log(users);
    return (
        <>
            <h1>users</h1>
            <div>
                {
                    users.map(user => (<div
                        key={user.id}
                        onDoubleClick={() => dispatch(removeSomeAction(user.id))}
                    >
                        <p>{user.name} - {user.age}</p>
                    </div>))
                }
            </div>
            <div>
                <button onClick={() => dispatch(removeFirstAction())}>removeFirst</button>
                <button onClick={() => dispatch(removeLastAction())}>removeLast</button>

                <button onClick={() => dispatch(fetchUserList())}>get user list</button>
            </div>
        </>
    );
}

export default Users;