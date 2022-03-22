import {AsycnIncrementCreator, AsyncDecrementCreator} from './store/countReducer'
import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './App.css';
import {fetchUsers} from './store/userReducer.js'

function App() {
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className='count'>{count}</div>
      <div className='btns'>
        <button className='btn' onClick={() => dispatch(AsycnIncrementCreator())}>Инкремент ++</button>
        <button className='btn' onClick={() => dispatch(AsyncDecrementCreator())}>Декремент --</button>
        <button className='btn' onClick={() => dispatch(fetchUsers())}>Получить юзеров --</button>
      </div>
      <div className='users'>
        {users.map(user => 
          <div className='user'>
            {user.name}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
