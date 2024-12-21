import GrandParent from "./components/GrandParent"
import CounterParent from "./contextDemo/CounterParent"
import EmailValidation from "./hooks/EmailValidation"
import UseEffectExample from "./hooks/UseEffectExample"
import UseEffectExample2 from "./hooks/UseEffectExample2"

function App() {

  return (
    <div className='container my-3' style={{border:'2px solid green'}}>
      <h3>App Component</h3>
      <GrandParent/>
      <CounterParent/>
      <UseEffectExample/>
      <UseEffectExample2/>
      <EmailValidation/>
    </div>
  )
}

export default App