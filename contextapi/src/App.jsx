import GrandParent from "./components/GrandParent"
import CounterParent from "./contextDemo/CounterParent"

function App() {

  return (
    <div className='container my-3' style={{border:'2px solid green'}}>
      <h3>App Component</h3>
      <GrandParent/>
      <CounterParent/>
    </div>
  )
}

export default App