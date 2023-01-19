import React from 'react';
import {useDispatch} from "react-redux";
import {filterTodoActionCreator} from "../../redux/filter/actions";
import {TYPE_OF_FILTER} from "../../redux/filter/reducers";

const FilterButtons = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ALL))}>
        Show All
      </button>
      <button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ACTIVE))}>
        Show Active
      </button>
      <button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_COMPLETED))}>
        Show Completed
      </button>
    </div>
  );
};

export default FilterButtons;