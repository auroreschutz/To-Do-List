function Event(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.todo.value;
        setTodos((prevTodos) => [
          ...prevTodos,
          { title: value, id: self.crypto.randomUUID(), is_completed: false },
        ]);
        event.target.reset();
      };
}

export default Event;