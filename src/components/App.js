import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

const [tasks, setTask] = useState(TASKS)
const [categories] = useState(CATEGORIES)
const [selectedCategoryButton, setSelectedCategoryButton] = useState('All')

function addNew(newItem){
  setTask([...tasks,newItem])
}

function itemDeleted(itemDeleted){
  setTask(tasks.filter((item)=>item.text !== itemDeleted))
}


const itemDisplayed = tasks

.filter(
  (item)=>{ 
  if(selectedCategoryButton==='All') return true
  return selectedCategoryButton === item.category
 } 
 )

 return (
  <div className="App">
    <h2>My tasks</h2>
    <CategoryFilter
      categories={categories}
      onCategory={selectedCategoryButton}
      selected={setSelectedCategoryButton} 
    />
    <NewTaskForm
      onTaskFormSubmit={addNew}
      categories={categories}
    />
    <TaskList 
      deletedItem={itemDeleted}
      tasks={itemDisplayed} />
  </div>
);
}

export default App;
