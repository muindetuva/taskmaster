import { useMutation, useQueryClient } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import { createTask } from "../api/tasks";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreatePage() {
  const [title, setTitle] = useState("");

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setTitle("");
      navigate('/');
    },
  });

  const handleAddTask = () => {
    mutation.mutate({
      title: title,
      completed: false,
    });
  };

  return (
    <>
      <Navbar />
      <h1 className="mt-8 text-lg text-primary font-bold text-center">
        Create A New Task
      </h1>

      <div className="w-lg mx-auto bg-primary p-8 rounded text-white">
        <div className="flex flex-col mb-4">
          <label htmlFor="task" className="font-bold mb-2">
            Task
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-white text-primary p-3 outline-none rounded"
          />
        </div>

        <button
          onClick={handleAddTask}
          className="bg-white text-primary p-2 w-48 rounded shadow-lg font-bold cursor-pointer hover:bg-secondary transition .3s linear"
        >
          {mutation.isLoading ? "Saving..." : "Add Task"}
        </button>
      </div>
    </>
  );
}

export default CreatePage;
