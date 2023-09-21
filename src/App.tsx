import React, { useEffect, useState } from "react";
import { Card, CardList } from "./components";
import { cardsMock } from "./mock";
import { useAppSelector } from "./store/hooks/useAppSelector";
import { useAppDispatch } from "./store/hooks/useAppDispatch";
import { getAllProjectTasksAction } from "./store/reducers";

function App() {
  const { tasks } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProjectTasksAction(cardsMock));
    console.log(tasks);
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <CardList
        title="Queue"
        cards={tasks.filter((task) => task.status === "queue")}
      />
      <CardList title="Development" cards={[]} />
    </div>
  );
}

export default App;
