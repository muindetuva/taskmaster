import { Link } from "react-router";

function Navbar() {

return (
    <div className="bg-primary text-white p-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">Taskmaster</Link>
        <Link className="bg-white p-2 text-primary font-bold rounded">Create Task</Link>
    </div>
)
}

export default Navbar;