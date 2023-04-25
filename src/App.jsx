import { useState } from 'react'
import './App.css'
import { fakeUserData } from './api'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUsers, removeUser } from './store/slices/userSlices'
import { Counter } from './features/counter'


function App() {

  const dispatch = useDispatch();

  const userList = useSelector((state) => { return state.users });

  const addUserFunc = (data) => {
    dispatch(addUser(data))
  }
  const deleteUserFunc = (data) => {
    dispatch(removeUser(data))
  }
  const deleteAllFunc = () => {
    dispatch(deleteUsers())
  }

  return (
    <div className="App">
      <button onClick={() => addUserFunc(fakeUserData())}>Add User</button>

      <br />
      {userList.length > 0 && userList.map((obj, id) => <button onClick={() => deleteUserFunc(id)}>{obj}</button>)}
      <br />

      <button onClick={() => addUserFunc(deleteAllFunc())}>Delete All</button>

      <Counter />

    </div>
  )
}

export default App
