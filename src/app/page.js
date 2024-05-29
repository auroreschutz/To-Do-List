"use client";
import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";
import Background from "@/components/Background";

function Home() {
  const [todos, setTodos] = React.useState([]);

  // Retrieve data from localStorage when component mounts
  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed == true
  ).length;
  const total_todos = todos.length;
  return (
   
    <div className="wrapper">
      <Background />
    <header> <Header />  <TODOHero todos_completed={todos_completed} total_todos={total_todos} /> </header>
      <div className="wrapbg">
      
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
      </div>
      <div className="credits"><a href="https://auroreschutz.fr/"><img src="https://auroreschutz.fr/img/aslogotemp.webp"></img> </a></div>
    </div>

  );
}

export default Home;