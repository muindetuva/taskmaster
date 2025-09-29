import Navbar from "../components/Navbar";

function CreatePage() {
  return (
    <>
      <Navbar />
      <h1 className="mt-8 text-lg text-primary font-bold text-center">
        Create A New Task
      </h1>

      <form className="w-lg mx-auto bg-primary p-8 rounded text-white">
        <div className="flex flex-col mb-4">
          <label htmlFor="task" className="font-bold mb-2">
            Task
          </label>
          <input
            type="text"
            required
            className="bg-white text-primary p-3 outline-none rounded"
          />
        </div>

        <button className="bg-white text-primary p-2 w-48 rounded shadow-lg font-bold cursor-pointer hover:bg-secondary transition .3s linear">
          Create
        </button>
      </form>
    </>
  );
}

export default CreatePage;
