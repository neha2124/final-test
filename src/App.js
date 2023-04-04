import  React,{useState,useEffect,createContext} from "react";
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Detail from './component/detail'
import Card from './component/card'
// import { useState } from "react";
const AppState = createContext()
function App() {
  const [val,setVal] = useState([]);
 
  
  const fetchData = async() =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    setVal(await data.json())
  }
  useEffect(() =>{
    fetchData()
  },[])
  
  return (
    <AppState.Provider value={val} >
   <Router>
     
    <Routes>
      
      <Route path='/' element={<Card />}></Route>
      <Route path='/detail/:id' element={<Detail />}></Route>
      
    </Routes>

   </Router>
   </AppState.Provider>
  )
}

export default App;
export {AppState}