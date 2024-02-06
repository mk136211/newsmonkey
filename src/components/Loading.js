import React  from 'react'
import Spinner from './Spinner.gif'
const Loading =()=> {

    return (
      <div className="text-center my-3">
        <img src={Spinner} alt="spinner" />
      </div>
    )

}

export default Loading
