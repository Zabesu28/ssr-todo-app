export async function fetchTodoById(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (!res.ok) {
      throw new Error(`Erreur HTTP ${res.status} - Tâche ${id} introuvable`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erreur dans fetchTodoById :", error);
    throw error; 
  }
}

export async function fetchTodos() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`);

    if (!res.ok) {
      throw new Error(`Erreur HTTP ${res.status} lors de la récupération des tâches`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erreur dans fetchTodos :", error);
    throw error; 
  }
}