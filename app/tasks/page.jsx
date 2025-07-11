import Link from "next/link";

export async function fetchTodos() {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=10`
    );

    if (!res.ok) {
      return {
        error: `Erreur HTTP ${res.status} lors de la récupération des tâches`,
      };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erreur dans fetchTodos :", error);
    return { error: error.message || "Erreur inconnue" };
  }
}

export async function generateMetadata() {
  return {
    title: `Liste des tâches`,
    description: `Liste des tâches à faire`,
  };
}

export default async function TasksPage() {
  const todos = await fetchTodos();

  if (todos.error) {
    return (
      <div>
        <h1>Erreur</h1>
        <p>{todos.error}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Liste des tâches</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Link href={`/tasks/task/${todo.id}`}>
                {todo.title} {todo.completed ? "✅" : "❌"}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
