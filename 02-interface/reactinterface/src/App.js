import { BiArchive } from "react-icons/bi"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-400 align-top" />Your Appointments</h1>
        <ul className="list-disc list-inside">
          <li>one</li>
          <li>two</li>
        </ul>
        <p className="bg-red-800">Add Appointments</p>
    </div>
  );
}

export default App;