import { fetchTodoById } from "@/lib/api";

// ✅ Métadonnées dynamiques avec désérialisation safe
export async function generateMetadata({ params }) {
  const todo = await fetchTodoById(params.id);

  return {
    title: `Tâche n°${todo.id}`,
    description: `Détail de la tâche : ${todo.title}`,
  };
}

// ✅ Page affichant les détails
export default async function TaskPage(props) {
  const { id } = await Promise.resolve(props.params);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo = await res.json();

  return (
    <div>
      <h1>Tâche #{todo.id}</h1>
      <p>{todo.title}</p>
      <p>Status : {todo.completed ? "Terminée" : "En cours"}</p>
    </div>
  );
}
