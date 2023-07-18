import { Navbars } from "../nav/NavBar"
import { MyComponent } from "./Background"
import "./project.css"

export const About = () => {
    return (
        <div style={styles.background} className="background">
            <Navbars/>
            <div>
        <h1 style={styles.aboutMe}>About Me</h1>
        <div>
        <h3 style={styles.text}>
        Hello and welcome to my software engineering portfolio! My name is Thiago Garcia and I am a software engineer with a passion for creating elegant and effective solutions to complex problems.
<br/>
<br/>
My journey into software engineering began with a desire to learn how technology could be used to solve real-world problems. I decided to pursue a career in software engineering. I enrolled in General Assembly's immersive bootcamp, where I gained hands-on experience with various programming languages and frameworks, including Javascript, React.js, Node.js, and Python.
<br/>
<br/>
During the bootcamp, I worked on a number of projects that allowed me to apply my new skills and knowledge to real-world problems. I collaborated with other students to develop web applications, mobile applications, and full-stack applications that integrated with various databases and APIs.
<br/>
<br/>
After completing the bootcamp, I continued to refine my skills and knowledge by working on personal projects and contributing to open-source projects.
<br/>
<br/>
In my current role as a software engineer, I am passionate about using technology to create innovative solutions that improve people's lives. I am dedicated to staying up-to-date with the latest trends and best practices in software engineering and am always seeking new challenges and opportunities to learn and grow.
<br/>
<br/>
Thank you for taking the time to learn more about me and my software engineering journey. I hope that my portfolio showcases my skills and passion for software engineering and demonstrates my ability to create effective and elegant solutions to complex problems.
        </h3>
        </div>
        </div>
        </div>
    )
}

const styles = {
    text: {
        paddingLeft: 100,
        paddingRight: 100,
        fontSize: 'small',
        position: 'relative',
        top: 50,
        paddingBottom: 50,
        color: 'white'
    },
    background: {
        backgroundColor: 'black',
        flex: '1',
        height: '46rem'
    },
    aboutMe: {
        borderBottom: "0.1875rem solid white",
        color: 'white',
        fontSize: '10rem'
    }
}