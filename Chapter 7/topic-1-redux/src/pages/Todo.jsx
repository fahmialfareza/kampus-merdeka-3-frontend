import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import logo from "../logo.svg";
import { getAllTodos, createNewTodo } from "../redux/actions/todoActions";

function Todo() {
  // This variable is to dispatch the actions
  const dispatch = useDispatch();

  // If you use redux, you want to read some data you have use useSelector
  const { todos } = useSelector((state) => state.todo);

  // No redux (imagine this is reducers)
  // If no redux we can just call the users
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    // Dispatch the getAllUsers actions
    dispatch(getAllTodos());

    setTimeout(() => {
      dispatch(createNewTodo());
    }, 5000);

    // No redux
    // (async () => {
    //   try {
    //     // Imagine this is actions
    //     const { data } = await axios.get(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );

    //     // Imagine this is dispatch to reducer
    //     setUsers(data);
    //   } catch (error) {
    //     throw error;
    //   }
    // })();
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {JSON.stringify(todos)}
      </header>
    </div>
  );
}

export default Todo;
