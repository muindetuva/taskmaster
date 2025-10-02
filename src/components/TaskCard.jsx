import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask, toggleTask } from "../api/tasks";
import DeleteIcon from "./DeleteIcon";

function TaskCard({ task }) {
  const queryClient = useQueryClient();

  const toggleMutation = useMutation({
    mutationFn: toggleTask,
    onSuccess: queryClient.invalidateQueries(["tasks"]),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: queryClient.invalidateQueries(["tasks"]),
  });

  return (
    <div
      className="w-lg mx-auto my-2 bg-primary text-white p-4 rounded shadow-sm flex justify-between items-center"
    >
      <p className={ task.completed ? "line-through" : ""}>{task.title}</p>

      <div className="flex items-center">
        {task.completed ? (
          ""
        ) : (
          <button
            onClick={() => toggleMutation.mutate(task.id)}
            className="bg-green-500 p-2 rounded text-xs cursor-pointer"
          >
            {toggleMutation.isPending ? "Loading..." : "Mark As Done"}
          </button>
        )}

        <DeleteIcon
          onClick={() => deleteMutation.mutate(task.id)}
          className="text-red-500 cursor-pointer ml-2"
        />
      </div>
    </div>
  );
}

export default TaskCard;
