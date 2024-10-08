import React from "react";
import { ToastContainer,toast } from "react-toastify";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({key:'', value: ''});
  const [dataEntries, setDataEntries] = React.useState<{ key: string, value: string }[]>([]);


   const buttonStyles = [
    "inline-flex items-center gap-x-2 text-sm font-medium rounded-sm border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:bg-red-800/30 dark:hover:bg-red-800/20 dark:focus:bg-red-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500 dark:bg-yellow-800/30 dark:hover:bg-yellow-800/20 dark:focus:bg-yellow-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-green-100 text-green-800 hover:bg-green-200 focus:outline-none focus:bg-green-200 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:bg-green-800/30 dark:hover:bg-green-800/20 dark:focus:bg-green-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-indigo-100 text-indigo-800 hover:bg-indigo-200 focus:outline-none focus:bg-indigo-200 disabled:opacity-50 disabled:pointer-events-none dark:text-indigo-500 dark:bg-indigo-800/30 dark:hover:bg-indigo-800/20 dark:focus:bg-indigo-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-pink-100 text-pink-800 hover:bg-pink-200 focus:outline-none focus:bg-pink-200 disabled:opacity-50 disabled:pointer-events-none dark:text-pink-500 dark:bg-pink-800/30 dark:hover:bg-pink-800/20 dark:focus:bg-pink-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-purple-100 text-purple-800 hover:bg-purple-200 focus:outline-none focus:bg-purple-200 disabled:opacity-50 disabled:pointer-events-none dark:text-purple-500 dark:bg-purple-800/30 dark:hover:bg-purple-800/20 dark:focus:bg-purple-800/20 px-4 py-2 rounded m-2",
    // "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-500 dark:bg-gray-800/30 dark:hover:bg-gray-800/20 dark:focus:bg-gray-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-orange-100 text-orange-800 hover:bg-orange-200 focus:outline-none focus:bg-orange-200 disabled:opacity-50 disabled:pointer-events-none dark:text-orange-500 dark:bg-orange-800/30 dark:hover:bg-orange-800/20 dark:focus:bg-orange-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 focus:outline-none focus:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none dark:text-teal-500 dark:bg-teal-800/30 dark:hover:bg-teal-800/20 dark:focus:bg-teal-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-cyan-100 text-cyan-800 hover:bg-cyan-200 focus:outline-none focus:bg-cyan-200 disabled:opacity-50 disabled:pointer-events-none dark:text-cyan-500 dark:bg-cyan-800/30 dark:hover:bg-cyan-800/20 dark:focus:bg-cyan-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-lime-100 text-lime-800 hover:bg-lime-200 focus:outline-none focus:bg-lime-200 disabled:opacity-50 disabled:pointer-events-none dark:text-lime-500 dark:bg-lime-800/30 dark:hover:bg-lime-800/20 dark:focus:bg-lime-800/20 px-4 py-2 rounded m-2",
    "inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-rose-100 text-rose-800 hover:bg-rose-200 focus:outline-none focus:bg-rose-200 disabled:opacity-50 disabled:pointer-events-none dark:text-rose-500 dark:bg-rose-800/30 dark:hover:bg-rose-800/20 dark:focus:bg-rose-800/20 px-4 py-2 rounded m-2",

  ];

  // Function to randomly pick a style from the array
  const getRandomStyle = () => {
    const randomIndex = Math.floor(Math.random() * buttonStyles.length);
    return buttonStyles[randomIndex];
  };

  React.useEffect(() => {
    const storedEntries = localStorage.getItem('dataEntries');
    if (storedEntries) {
      setDataEntries(JSON.parse(storedEntries));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newEntry = { key: formData.key, value: formData.value };
    const updatedEntries = [...dataEntries, newEntry];

    setDataEntries(updatedEntries);
    
    localStorage.setItem('dataEntries', JSON.stringify(updatedEntries));

    setFormData({ key: '', value: '' });
    setIsModalOpen(false);

    //Adding notification
    toast.success('Mapping added successfully!',{delay:100,position:'bottom-right'});
  };

  const clearlocalStorage = () => {
    localStorage.clear();
    setDataEntries([]);
    toast.success('Local storage cleared!',{delay:100,position:'bottom-right'});
  };

    return (
      <div className="bg-[#121212] w-96 h-fit py-4 pb-24 flex flex-col items-center justify-start">
        <h1 className=" text-white mt-6 text-lg font-medium">EaseU - Simplify your Online Applications</h1>
        <p className="text-white font-light text-base m-5 text-center">Effortlessly store and map any text you use frequently. Whether it's responses, code snippets, or notes, save them once and reuse them across any platform or task.</p>
          
        

        <div className="m-4 flex flex-wrap justify-center items-center">
        {dataEntries.map((entry, index) => (
          <button
            key={index}
            className={getRandomStyle()}
            onClick={() =>{ navigator.clipboard.writeText(entry.value);
            toast.success('Copied to clipboard!',{delay:100,position:'bottom-right'});
            }}
          >
            {entry.key}
          </button>
        ))}
      </div>

      <div className="flex justify-center">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition transform hover:scale-105 relative overflow-hidden" onClick={() => setIsModalOpen(true)}>
        <span className="absolute inset-0 bg-gradient-to-t from-white opacity-5 to-transparent"></span>
          Add mapping
        </button>

        <button className="bg-red-500 text-white font-bold py-2 px-4 mx-2 rounded shadow-md hover:shadow-lg transition transform hover:scale-105 relative overflow-hidden" onClick={() => clearlocalStorage()}>
        <span className="absolute inset-0 bg-gradient-to-t from-white opacity-5 to-transparent"></span>
          Clear all
        </button>



        </div>

        <ToastContainer autoClose={1600} />

        {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-6 rounded shadow-md">
            {/* <h2 className="text-xl mb-4">Collect Data</h2> */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-blue-600 font-bold text-base" htmlFor="name">Display Name</label>
                <input
                  className="border p-2 w-full bg-gray-800 rounded-sm text-white border-none text-base"
                  type="text"
                  id="key"
                  name="key"
                  value={formData.key}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-blue-600 font-bold text-base" htmlFor="name">Content</label>
                <input
                  className="border p-2 w-full bg-gray-800 rounded-sm text-white border-none text-base"
                  type="text"
                  id="value"
                  name="value"
                  value={formData.value}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => setIsModalOpen(false)
                }
              >
                Cancel
              </button>
              </div>
            </form>
          </div>
          
        </div>
      )}



      


      </div>
      )
  // )
}

export default App;
