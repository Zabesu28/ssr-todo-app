export async function fetchTodoById(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (!res.ok) {
      return { error: `Erreur HTTP ${res.status} - Tâche ${id} introuvable` };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erreur dans fetchTodoById :", error);
    return { error: error.message || "Erreur inconnue" };
  }
}

export async function generateMetadata({ params }) {
  const todo = await fetchTodoById(params.id);

  return {
    title: `Tâche n°${todo.id}`,
    description: `Détail de la tâche : ${todo.title}`,
  };
}

export default async function TaskPage({ params }) {
  const todo = await fetchTodoById(params.id);

  if (todo.error) {
    return (
      <div>
        <h1>Erreur</h1>
        <p>{todo.error}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Tâche #{todo.id}</h1>
        <p>{todo.title}</p>
        <p>Status : {todo.completed ? "Terminée" : "En cours"}</p>
      </div>
    );
  }
}
