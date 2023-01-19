import React from "react";
import AddTodoContainer from "./containers/add-todo";
import TodoListContainer from "./containers/todo-list";
import FilterButtons from "./containers/filter-buttons";
import { useDispatch } from "react-redux";

function App() {
  const posts = useSelector(state => state.posts.list)
  const post = useselector(state => state.posts.data)
  const dispatch = useDispatch()
  const {fetchPosts, fetchPostById} = postOperations 

  useEffect( () => {
    dispatch(fetchPostById(2))
  }), []

  console.log(posts, 'post');
  console.log(post, 'post');
  return (
    <div>
      <AddTodoContainer />
      <FilterButtons />
      <TodoListContainer />
    </div>
  );
}

export default App;

