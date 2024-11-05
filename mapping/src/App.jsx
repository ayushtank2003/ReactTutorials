import { createContext, useState } from 'react'
import './App.css'
import CustomerList from './components/CustomerList'
// import SortingDemo from './components/SortingDemo'
import FilteredData from './components/FilteredData'
// import CompOne from '../src/PropDrilling/CompOne'
import CompOne from '../src/ContextAPI/CompOne'



const Studentinfo=createContext();
function App() {

  const f_name='Peter'
  return (
    <div className='container'>
      <CustomerList/>
      {/* <SortingDemo/> */}
      <FilteredData/>



      {/* <CompOne f_name={f_name}/> "-------for prop Drilling ------"" */}
      <Studentinfo.Provider value={f_name}>
        <CompOne/>
      </Studentinfo.Provider>
    </div>
  )
}

export default App
export {Studentinfo}