const API_URL = "https://stub.muindetuva.com/api/tasks"

export async function getTasks() {
    const response = await fetch(API_URL, {
        headers: {
            Authorization: 'Bearer 23|XEj6R6URLT3ufeXiqWB3p1IVW4ZuZC4Asj1Wmg2B624c9f2d'
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch tasks")
    }

    return response.json();
}