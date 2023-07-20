import { useState } from "react"
import { Navbars } from "../nav/NavBar"
import { MyComponent } from "./Background"
import "./about.css"

/**
 * Render the About component.
 *
 * @return {ReactNode} The rendered component.
 */
export const About = () => {
    const [hiddenText, setHiddenText] = useState(true)

    return (
        <div>
            <Navbars/>
            <MyComponent/>
            <div>
                <h1 className="title">About Me</h1>
                <div>
                    <h3 className="noHiddenText">
                        Hello and welcome to my software engineering portfolio! My name is Thiago Garcia and I am a software engineer with a passion for creating elegant and effective solutions to complex problems.
                        <br/>
                        <br/>
                        My journey into software engineering began with a desire to learn how technology could be used to solve real-world problems. I decided to pursue a career in software engineering. I enrolled in General Assembly's immersive bootcamp, where I gained hands-on experience with various programming languages and frameworks, including Javascript, React.js, Node.js, and Python.
                    </h3>

                    <h3 className={hiddenText ? 'hiddenText' : ''}>
                        During the bootcamp, I worked on a number of projects that allowed me to apply my new skills and knowledge to real-world problems. I collaborated with other students to develop web applications, mobile applications, and full-stack applications that integrated with various databases and APIs.
                        <br/>
                        <br/>
                        After completing the bootcamp, I continued to refine my skills and knowledge by working on personal projects and contributing to open-source projects.
                        <br/>
                        <br/>
                        In my current role as a software engineer, I am passionate about using technology to create innovative solutions that improve people's lives. I am dedicated to staying up-to-date with the latest trends and best practices in software engineering and am always seeking new challenges and opportunities to learn and grow.
                    </h3>

                    <h3 className="noHiddenText">
                        Thank you for taking the time to learn more about me and my software engineering journey. I hope that my portfolio showcases my skills and passion for software engineering and demonstrates my ability to create effective and elegant solutions to complex problems.
                    </h3>
                </div>
            </div>
        </div>
    )
}
