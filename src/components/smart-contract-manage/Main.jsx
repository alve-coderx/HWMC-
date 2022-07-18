import React from 'react'
import PropTypes from 'prop-types'

function Main(props) {
  return (
    <>
    
    <label className="intro-y text-sm font-medium "> Enter Contract Address </label>


<div className="flex">

  <input id="contract-address" type="text" className="mt-2 form-control w-full" placeholder="0x66218236293b91b3912d1931092..." /> 
  
  <button className="btn btn-dark mt-2 justify-center items-center align-middle ml-3 focus:outline-none focus:ring-0"> Get  </button>

</div>
    
    </>
  )
}

Main.propTypes = {}

export default Main
