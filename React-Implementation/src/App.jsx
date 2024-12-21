import { createContext, useEffect, useState} from 'react'
import './App.css'
import CustomerList from './components/CustomerList'
// import SortingDemo from './components/SortingDemo'
import FilteredData from './components/FilteredData'
// import CompOne from '../src/PropDrilling/CompOne'
import CompOne from '../src/ContextAPI/CompOne'
import UseState from '../src/hooks/UseState'
import UseEffect from './hooks/UseEffect'
import ReactDemoFect from './hooks/ReactDemoFect'


const StudentInfo=createContext();
const StudentInfo1=createContext();
function App() {

  const f_name='Peter'
  const l_name='parker'
  const[ index,setIndex]=useState(0);
  const Name=['peter','tom','tom','jerry']
  useEffect(()=>{
    if(index===Name.length-1)
    return;
    setTimeout(()=>{
      setIndex((index)=>index+1)
    },3000)
  },[index])
  return (
    <div className='container'>
      <CustomerList/>
      {/* <SortingDemo/> */}
      <FilteredData/>



      {/* <CompOne f_name={f_name}/> "-------for prop Drilling ------"" */}
      <StudentInfo.Provider value={f_name}>
        <StudentInfo1.Provider value={l_name}>
          <CompOne/>
        </StudentInfo1.Provider>
      </StudentInfo.Provider>
      <UseState/>


      <UseEffect name={Name[index]}/>
      <ReactDemoFect/>
      

    </div>
  )
}

export default App
export {StudentInfo , StudentInfo1}