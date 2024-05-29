import { FaWandSparkles } from "react-icons/fa6";
import { IconContext } from "react-icons";

function Form({ todos, setTodos }) {
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const value = event.target.todo.value;
      const newTodo = {
        title: value,
        id: self.crypto.randomUUID(),
        is_completed: false,
      };
  
      // Update todo state
      setTodos((prevTodos) => [...prevTodos, newTodo]);
  
      // Store updated todo list in local storage
      const updatedTodoList = JSON.stringify([...todos, newTodo]);
      localStorage.setItem("todos", updatedTodoList);
  
      event.target.reset();
    };
  
    return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Nouvelle tâche"
          />
        </label>
  
        <button>
          <span className="visually-hidden">Envoyer</span>
          <div className="wand"><IconContext.Provider value={{ size: "2em", className: "magicwandicon" }}><FaWandSparkles /></IconContext.Provider></div>
        </button>
      </form>
    );
  }
  
  export default Form;