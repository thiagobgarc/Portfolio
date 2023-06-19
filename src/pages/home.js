import { MyComponent } from "../components/Background"
import { Navbars } from "../nav/NavBar"
import "./projects.css"
import seedData from "../seed/seedData"
import images from "../images/verseMe"

export const Home = () => {

    return (
        
        <div>
            <Navbars/>
            <MyComponent/>
        <div style={styles.box}>
        <h1 style={styles.Text} className="welcome">
           Welcome
        </h1>
        <h3 style={styles.text2} className="summary">
        As a software engineer, I have expertise in programming languages such as Javascript, Python, and Dart. I have experience using various frameworks and tools in my projects, including React Native, Express.js, Postgres, Django, iOS Swift, and Flutter.
        </h3>
        <h3 style={styles.projects} className="projects">
            Projects
        </h3>
        {/* <h5 style={styles.h5}>
            <a href={seedData.verseMe.link}>{seedData.verseMe.projectName}</a>
        </h5>
        <h5 style={styles.h5}>
            <a href={seedData.bullsEye.link}>{seedData.bullsEye.projectName}</a>
        </h5>
        <h5 style={styles.h5}>
            <a href={seedData.roomieFinderz.link}>{seedData.roomieFinderz.projectName}</a>
        </h5>
        <h5 style={styles.h5}>
            <a href={seedData.reactMessage.link}>{seedData.reactMessage.projectName}</a>
        </h5>
        <h5 style={styles.h5}>
            <a href={seedData.yada.link}>{seedData.yada.projectName}</a>
        </h5> */}
<div>
  {seedData.map((seed, index) => (
    <h5 style={styles.h5} key={index}>
      <a href={seed.link}>{seed.projectName}</a>
    </h5>
  ))}
</div>
        </div>
        </div>
    )
}

const styles = {
    Text: {
        fontSize: '5rem', 
        lineHeight: '3', 
        marginBottom: '3rem', 
        marginTop: '1.5rem',
        fontWeight: 'bold',
        display: 'flex',
        color: 'white'
    },
    text2: {
        fontSize: '1.2rem', 
        lineHeight: '1.5', 
        marginBottom: '1rem', 
        marginRight: '40rem',
        color: 'white',
    },
    Display: {
        height: 'auto',
        width: 'auto',
        background: 'snow'
    },
    projects: {
        textAlign: 'center',
        marginBottom: '.5rem', 
        fontSize: '3rem', 
        fontWeight: 'bold',
    },
    h5: {
        textAlign: 'center',
        marginBottom: '.5rem', 
        fontSize: '1rem', 
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold'
    },
    box: {
        // backgroundColor: 'grey',
        marginLeft: '1.2500em',
        marginRight: '1.2500em',
        marginBottom: '1.2500em',
    },
    image: {
        borderRadius: '20%',
        width: '1.5625em',
        height: '1.5625em',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        minHeight: '200px'
      }
    
}