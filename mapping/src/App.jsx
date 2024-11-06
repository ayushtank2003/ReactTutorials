import { createContext, useState } from 'react'
import './App.css'
import CustomerList from './components/CustomerList'
// import SortingDemo from './components/SortingDemo'
import FilteredData from './components/FilteredData'
// import CompOne from '../src/PropDrilling/CompOne'
import CompOne from '../src/ContextAPI/CompOne'



const StudentInfo=createContext();
const StudentInfo1=createContext();
function App() {

  const f_name='Peter'
  const l_name='parker'
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
    </div>
  )
}

export default App
export {StudentInfo , StudentInfo1}