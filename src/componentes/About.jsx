import React from 'react'
import { AiFillHtml5 } from "react-icons/ai"
import { RiCss3Fill } from "react-icons/ri"
import { DiJavascript1 } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"
import { SiNetlify } from "react-icons/si"
import { FaSass } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import img from "../assets/img.webp"
const About = () => {

  return (
    <>

      <div className="about_container">
        <div className="about_image">
          <img src={img} alt="" />
        </div>

        <div className="about_image">
          <div className="about_text">
            <h1>About Me</h1>
            <p>I am a pankaj fontend developer with 1.5 Years of experience in creating custom websites and web applications. As a dedicated web developer, I am committed to staying up-to-date with the latest technologies and trends in the industry. I approach each project with enthusiasm, creativity, and a focus on delivering a high-quality end product that meets the unique needs of each client.</p>
          </div>
          <div className="about_skill">
            <h3>Skills</h3>
            <hr></hr>
            <h4 style={{ color: "red" }}>UI/UX</h4>
            <span>Desigining Web/App interfaces</span>

            <h4 style={{ color: "red" }}>Web Development</h4>
            <span>Desigining Web/App Development</span>

            <h4 style={{ color: "red" }}>Web Development</h4>
            <span>I'm Frontand</span>
          </div>

          <div className="about_skill">
            <h3>Experience</h3>
            <hr></hr>
            <h4 style={{ color: "red" }}>2021 - Current</h4>
            <span>UI/UX Design Traning at Youtube Platform</span>

            <h4 style={{ color: "red" }}>2021 - 2023</h4>
            <span>I'm Singal Lead at Website/App</span>

            <h4 style={{ color: "red" }}>2022 - 2025</h4>
            <span>Internship Try For Compuny</span>
          </div>

          <div className="about_skill">
            <h3>Education</h3>
            <hr></hr>
            <h4 style={{ color: "red" }}>2019</h4>
            <span>Matrick Pass</span>

            <h4 style={{ color: "red" }}>2020</h4>
            <span>ITI For One year</span>

            <h4 style={{ color: "red" }}>2021</h4>
            <span>ADCA Course One years</span>

            <h4 style={{ color: "red" }}>2022-2025</h4>
            <span>BCA from Dynamic ara bihar</span>
          </div>
        </div>
      </div>

      {/* skills  */}
      <div className="skills_text">
        <h1>Skill * </h1>
        <span>Tools I Use To Build Applications</span>
      </div>

      {/* first coloum  */}
      <div className="skills_container">
        <div className="skills_bar">
          <div className="skills">
            <AiFillHtml5 />
            <h1>Html</h1>
          </div>
        </div>

        <div className="skills_bar">
          <div className="skills">
            <RiCss3Fill />
            <h1>CSS</h1>
          </div>
        </div>

        <div className="skills_bar">
          <div className="skills">
            <DiJavascript1 />
            <h1>JavaScript</h1>
          </div>
        </div>

        <div className="skills_bar">
          <div className="skills">
            <FaReact />
            <h1>React js</h1>
          </div>
        </div>
      </div>

      {/* second coloum*/}
      <div className="skills_container">
        <div className="skills_bar">
          <div className="skills">
            <AiFillGithub />
            <h1>Github</h1>
          </div>
        </div>

        <div className="skills_bar">
          <div className="skills">
            <SiNetlify />
            <h1>Netlify</h1>
          </div>
        </div>

        <div className="skills_bar">
          <div className="skills">
            <FaSass />
            <h1>SASS</h1>
          </div>
        </div>

        <div className="skills_bar">
          <div className="skills">
            <SiMongodb />
            <h1>MogoDB</h1>
          </div>
        </div>

      </div>

      {/* third coloum  */}
      <div className="skills_container">
        <div className="skills_bar">
          <div className="skills">
            <FaNodeJs />
            <h1>Node js</h1>
          </div>
        </div>

        
      </div>



    </>
  )
}

export default About