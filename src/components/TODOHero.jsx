function TODOHero({ todos_completed, total_todos }) {
    return (
      <section className="todohero_section">
        <div>
          <p></p>
        </div>
        <div>
          {todos_completed}/{total_todos}
        </div>
      </section>
    );
  }
  export default TODOHero;