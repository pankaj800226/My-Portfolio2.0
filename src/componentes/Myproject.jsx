import React from 'react'
import img1 from '../assets/project1.png'
import img2 from '../assets/project2.png'
import img3 from '../assets/project3.png'
import img4 from '../assets/project4.png'
import img5 from '../assets/project5.png'
import img6 from '../assets/project6.png'


const Myproject = () => {
    return (
        <>
            <div className='myproject_text'>
                <h1>My project</h1>
            </div>
            {/* one  */}
            <div className='main_project_container'>
                <div className='main_project'>
                    <div className='main_project_text'>
                        <img src={img1} alt="" />
                        <p>Amazone clone</p>
                        <button>Open</button>
                        {/* <button>Open</button> */}

                    </div>
                </div>
                {/* two  */}
                <div className='main_project'>
                    <div className='main_project_text'>
                        <img src={img2} alt="" />
                        <p>ersa clone</p>
                        <button>Open</button>
                    </div>
                </div>
                {/* three  */}
                <div className='main_project'>
                    <div className='main_project_text'>
                        <img src={img3} alt="" />
                        <p>My portfolio</p>
                        <button>Open</button>
                    </div>
                </div>
                {/* fourth  */}
                <div className='main_project'>
                    <div className='main_project_text'>
                        <img src={img4} alt="" />
                        <p>MERN - Education - Dynamic computer website</p>
                        <button>Open</button>
                    </div>
                </div>

                 {/* five  */}
                 <div className='main_project'>
                    <div className='main_project_text'>
                        <img src={img5} alt="" />
                        <p>MERN - Todo list</p>
                        <button>Open</button>
                    </div>
                </div>

                 {/* six  */}
                 <div className='main_project'>
                    <div className='main_project_text'>
                        <img src={img6} alt="" />
                        <p>Music player website</p>
                        <button>Open</button>
                    </div>
                </div>

                  {/* six  */}
            </div>





        </>
    )
}

export default Myproject