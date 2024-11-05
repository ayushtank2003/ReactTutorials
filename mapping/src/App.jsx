import { useState } from 'react'
import './App.css'
import CustomerList from './components/CustomerList'
// import SortingDemo from './components/SortingDemo'
import FilteredData from './components/FilteredData'
import CompOne from '../src/PropDrilling/CompOne'

function App() {
  const f_name='Peter'
  return (
    <div className='container'>
      <CustomerList/>
      {/* <SortingDemo/> */}
      <FilteredData/>
     
      <CompOne f_name={f_name}/>
    </div>
  )
}

export default App
