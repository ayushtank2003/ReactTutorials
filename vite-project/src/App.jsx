import Parent from "./components/propsdemos/parent"
import TodoApp from "./components/TodoApp"
import Usecase11 from "./components/Usecase11"
import UseCase2 from "./components/UseCase2"
import UseCase3 from "./components/UseCase3"
import UseCase4 from "./components/UseCase4"
import UserCaseMap from "./components/UserCaseMap"
function App() {

  return (
    <div className="container">
      <h3 >Hello World</h3>
      <Usecase11/>
      <UseCase2/>
      <UseCase3/>
      <UseCase4/>
      <UserCaseMap/>
      <TodoApp/>
      <Parent/>
    </div>
  )

}

export default App
