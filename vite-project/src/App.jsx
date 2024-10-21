import { useState } from "react"
import Parent from "./components/propsdemos/parent"
import TodoApp from "./components/TodoApp"
import Usecase11 from "./components/Usecase11"
import UseCase2 from "./components/UseCase2"
import UseCase3 from "./components/UseCase3"
import UseCase4 from "./components/UseCase4"
import UserCaseMap from "./components/UserCaseMap"
import Test from "./components/propsdemos/Test"
import MyImage from "./components/propsdemos/MyImage"
function App() {
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }

  const Image_Array=[
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s',
    'https://www.biography.com/media/emma-watson-1947-100/1200px-emma_watson_1947.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0k1cYd4k_oXw4194u36k_x68n53'
    ]
    return (
    <div className="container">
      <h3 >Hello World</h3>
      <Usecase11/>
      <UseCase2/>
      <UseCase3/>
      <UseCase4/>
      <UserCaseMap/>
      <h1>App count:{count} </h1>
      <Parent/>
      <Test increment={increment}/>
      <TodoApp/>
      <Parent/>
      {Image_Array.map( url=>(
        <MyImage url={url}/>

      ))}
    </div>
  )

}

export default App
