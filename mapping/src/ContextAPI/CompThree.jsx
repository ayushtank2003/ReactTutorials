import React, { useContext } from 'react'
import { StudentInfo , StudentInfo1} from '../App'

const CompThree = (props) => {
  const f_name=useContext(StudentInfo);
  const l_name=useContext(StudentInfo1);
  return (
    <div>
    <h2>My name using usecontext is {f_name} {l_name}</h2>
    {/* for useContext in props */}

    {/* In order to access the state from the App component, we need to use the Consumer component from the context API */}
      {/* <Studentinfo.Consumer>
        {(getFname)=>{
          return <h4>My name is {getFname}</h4>
        }}
      </Studentinfo.Consumer> */}
    </div>
  )
}

export default CompThree