
import { fetchTodos } from '@/lib/api';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: `Liste des tâches`,
    description: `Liste des tâches à faire`,
  };
}

export default async function TasksPage() {
  const todos = await fetchTodos();

  return (
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link href={`/tasks/task/${todo.id}`}>
              {todo.title} {todo.completed ? '✅' : '❌'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}