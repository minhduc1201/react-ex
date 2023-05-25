import React, {useState, useEffect} from 'react';
import {FaCheck, FaTrash} from 'react-icons/fa';

function App() {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input , setInput] = useState('');
  const [numTodo, setNumTodo] = useState(0);
  const [numDoing, setNumDoing] = useState(0);
  const [numDone, setNumDone] = useState(0);
  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input
    }
    setTodos([todo, ...todos]);
	setNumTodo(prev=> prev + 1);

	console.log(input);
  }
  const addToProgress = (id) => {
    const item = todos.find(x => x.id === id);
    setInprogress([item, ...inprogress]);
    const filterarray = todos.filter(x => x.id !== id);
    setTodos(filterarray);
	setNumTodo(prev => prev - 1)
	setNumDoing(prev => prev +1)
  }
  const deleteTodo = (id) => {
    const filterarray = todos.filter(x => x.id !== id);
    setTodos(filterarray);
	setNumTodo(prev => prev - 1)
  }
  const addtoCompleted = (id) => {
    const item = inprogress.find(x => x.id === id);
    setCompleted([item, ...completed]);
    const filterarray = inprogress.filter(x => x.id !== id);
    setInprogress(filterarray);
	setNumDoing(prev => prev - 1)
	setNumDone(prev => prev + 1)
  }
  useEffect(() => {
	
  }, [todos, inprogress])

  return (
    <div class="bg-gradient-to-tr from-indigo-500 via-white to-pink-500 w-screen h-screen flex justify-center text-center items-center">
      <div class="pt-5 w-4/5 h-5/6 bg-white  rounded-xl shadow-lg shadow-slate-700 ">
        <p class=" text-3xl font-extrabold font-mono">ToDo List</p>
        <form class="w-2/5 m-auto py-2.5 flex justify-between items-center" >
          <input class=" w-4/5 h-10 mr-3 border-solid focus:ring-0 rounded-md text-base p-3 focus:placeholder:text-white placeholder:text-slate-400" type="text"  onChange={e => setInput(e.target.value)} placeholder="Enter new task" name="text"/>
          <button type="button" onClick={() => addTodo()} class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 text-center ">Add</button>
		</form>
		<div class="flex pt-7  justify-around items-start">
			<p class=" w-1/4 text-xl h-10  pt-2 font-extrabold text-white font-mono bg-red-500">Todos : {numTodo} </p>
			<p class=" w-1/4 text-xl h-10  pt-2 font-extrabold text-white font-mono bg-blue-500">Doing : {numDoing}</p>
			<p class=" w-1/4 text-xl h-10  pt-2 font-extrabold text-white font-mono bg-lime-600">Done : {numDone}</p>
		</div>
        <div class=" flex justify-around items-start h-5/6 ">
         <div class=" w-1/4 h-5/6 pb-2 flex-col overflow-y-scroll overflow-x-hidden ">
           
           {todos.map((item, index) => 
            <div key={item.id} class="w-full ring-1 ring-red-600 h-auto bg-red-200 px-1 py-3 mr-1 ">
              <p class="m-auto">{item.text}</p>
              <div class="flex justify-center items-center">
			  	<FaCheck onClick={() => addToProgress(item.id)} class="text-white bg-gradient-to-r from-orange-500 to-red-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-600 dark:focus:ring-red-800 font-medium rounded-lg text-3xl px-1 py-1.5 mt-2 mr-2 text-center hover:cursor-pointer " />
			  	<FaTrash onClick={() => deleteTodo(item.id)} class="text-white bg-gradient-to-r from-orange-500 to-red-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-600 dark:focus:ring-red-800 font-medium rounded-lg text-3xl px-1 py-1.5 mt-2  text-center hover:cursor-pointer "/>
			  </div>
            </div>
           )}
         </div>
         <div class="w-1/4 h-5/6 flex-col overflow-y-scroll overflow-x-hidden">
           
           {inprogress.map((item, index) =>
            <div key={item.key} class="w-full ring-1 ring-blue-500 h-auto bg-blue-200 px-1 py-3 mr-1 ">
              <p>{item.text}</p>
			  <div class=" flex justify-center items-center">
			  	<FaCheck onClick={() => addtoCompleted(item.id)} class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-500 dark:focus:ring-red-800 font-medium rounded-lg text-3xl px-1 py-1.5 mt-2 mr-2 text-center hover:cursor-pointer " />
			  </div>
            </div>
           )}
         </div>
         <div class="w-1/4 h-5/6 flex-col overflow-y-scroll overflow-x-hidden">
           {completed.map((item, index) => 
            <div key={item.id} class="w-full ring-1 ring-lime-500 h-auto bg-lime-300 px-1 py-3 mr-1 ">
              <p class="m-auto">{item.text}</p>
            </div>
           )}
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
