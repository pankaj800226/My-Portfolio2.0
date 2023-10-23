import React from 'react'

const Work = () => {
  return (
    <>
      <div className="work_head">
        <h1> My Work...</h1>
      </div>


    <div className="work_container">
      <div className="work_section">
        <div className="work_baar">
          <img src="work-1.png"  alt="" />
          <h2>Social Media App</h2>
        </div>
      </div>

      <div className="work_section">
        <div className="work_baar">
          <img src="work-2.png" alt="" />
          <h2>Music App</h2>
        </div>
      </div>

      <div className="work_section">
        <div className="work_baar">
          <img src="work-3.png" alt="" />
          <h2>Online Shopping App</h2>
        </div>
      </div>
    </div>
    </>


  )
}

export default Work