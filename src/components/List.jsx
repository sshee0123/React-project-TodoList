<<<<<<< HEAD
import "./List.css";

import { useState } from "react";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  // todolist 검색
  const [search, setSearch] = useState("");

  const onCangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // todo list 검색어 필터링 기능
  const getFilteredData = () => {
    if (search === "") {
      // 검색어가 비어있으면
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // 필터링된 값 저장
  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 💪</h4>
      <input
        value={search}
        onChange={onCangeSearch}
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
=======
import "./List.css";

import { useState, useMemo } from "react";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  // todolist 검색
  const [search, setSearch] = useState("");

  const onCangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // todo list 검색어 필터링 기능
  const getFilteredData = () => {
    if (search === "") {
      // 검색어가 비어있으면
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // 필터링된 값 저장
  const filteredTodos = getFilteredData();

  // useMemo 을 활용한 Memoization
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // 의존성 배열 : deps

  return (
    <div className="List">
      <h4>Todo List 💪</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>

      <input
        value={search}
        onChange={onCangeSearch}
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
>>>>>>> 07a5b35 (react-bite project)
