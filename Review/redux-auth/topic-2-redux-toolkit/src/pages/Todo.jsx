import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">{JSON.stringify(todos)}</header>
    </div>
  );
}

export default Todo;
