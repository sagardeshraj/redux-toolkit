import React, { useEffect } from 'react'
import { fetchUser } from './userSlice'
import { useDispatch, useSelector} from 'react-redux'


export const UserView = () => {
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUser());
  },[])
    return (
    <div>
        <h2>List of Users</h2>
        {user.loading && <div>loading...</div>}
        {!user.loading && user.error ? <div>Error : {user.error}</div> : null }
        {!user.loading && user.users.length ? (
            <ul>
                {
                    user.users.map(user=>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        ): null}
    </div>
  )
}
