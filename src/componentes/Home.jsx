import React from 'react'
import { Link } from "react-router-dom"
import img1 from '../assets/frontImage2.png'
import Myproject from './Myproject'
// import Appdesign from './Appdesign'
const Home = () => {

  //client Work
  const client = "+180"
  //client work2
  const project = "+60"
  //image url Link
  //button Click Netlify lick Open
  const btnNetlifyLink = "https://app.netlify.com/teams/pankaj800226/sites"
  return (<>
    <div className="home">
      <div className="home_text">
        <h1> Hi, I <br /> Pankaj kumar</h1>
        <p>I am Frontend developer</p>
        <div className="home_btn">
          <button><Link to="/">Hire Me</Link></button>
          <button><Link to={btnNetlifyLink}>Projects</Link></button>
        </div>
        <div className="client_div">
          <div className="client_work">
            <p>{project}</p>
            <h3>Project</h3>
          </div>

          <div className="client_work2">
            <p>{client}</p>
            <h3>Client</h3>
          </div>
        </div>
      </div>
      <img src={img1} alt="" />

    </div>


    {/* My Services */}

    <div id="services">
      <div class="containers">
        {/* <h1 class="sub-tital"> My Services</h1> */}
        <div class="services_list">
          <div>
            <i class="fa-solid fa-code"></i>
            <h2>Web Design</h2>
            <p>Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience.</p>
            <Link to="/">Learn More </Link>
          </div>

          <div>
            <i class="fa-solid fa-crop"></i>
            <h2>UI?UX Design</h2>
            <p>We live in a beautiful era of design, with new techniques and trends coming and going. Frontend development is also gaining increased momentum, with more and more developers getting involved in UI/UX design.</p>
            <Link to="/">Learn More</Link>
          </div>

          <div>
            <i class="fa-brands fa-app-store-ios"></i>
            <h2>App Design</h2>
            <p>App design is the look and feel of a mobile application. This includes all of the visual elements and interactive elements that impact how the app functions..</p>
            <Link to="/appdesign">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
        <Myproject />


  </>
  )
}

export default Home