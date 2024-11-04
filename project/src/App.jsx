import { useState } from 'react'
import './App.css'
import CustomerList from './components/CustomerList'
import SortingDemo from './components/SortingDemo'
import FilteredData from './components/FilteredData'

function App() {
  return (
    <div className='container'>
      <CustomerList/>
      {/* <SortingDemo/> */}
      <FilteredData/>
    </div>
  )
}

export default App
