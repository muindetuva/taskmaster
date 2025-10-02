const API_URL = "https://stub.muindetuva.com/api/tasks";

export async function getTasks() {
  const response = await fetch(API_URL, {
    headers: {
      Authorization:
        "Bearer 23|XEj6R6URLT3ufeXiqWB3p1IVW4ZuZC4Asj1Wmg2B624c9f2d",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}

export async function createTask(newTask) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 23|XEj6R6URLT3ufeXiqWB3p1IVW4ZuZC4Asj1Wmg2B624c9f2d",
    },
    body: JSON.stringify(newTask),
  });

  if (!response.ok) {
    throw new Error("Failed to create a task");
  }

  return response.json();
}

export async function toggleTask(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 23|XEj6R6URLT3ufeXiqWB3p1IVW4ZuZC4Asj1Wmg2B624c9f2d",
    },
    body: JSON.stringify({ completed: true }),
  });

  if (!response.ok) {
    throw new Error("Failed to create a task");
  }

  return response.json();
}

export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer 23|XEj6R6URLT3ufeXiqWB3p1IVW4ZuZC4Asj1Wmg2B624c9f2d",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to create a task");
  }

  return response.json();
}
