import { MyComponent } from "../components/Background"
import { Navbars } from "../nav/NavBar"
import "./projects.css"

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
        As a software engineer, I have expertise in programming languages such as Javascript, Python, and Ruby. I have experience using various frameworks and tools in my projects, including React Native, Express.js, Postgres, Django, iOS Swift, and Flutter.
        </h3>
        <h3 style={styles.projects} className="projects">
            Projects
        </h3>
        <h5 style={styles.h5}>
        <a href="https://github.com/thiagobgarc/Verse-Me">Verse Me</a>
        </h5>
        <h5 style={styles.h5}>
            <a href="https://github.com/thiagobgarc/BullsEye">Bullseye</a>
        </h5>
        <h5 style={styles.h5}>
            <a href="https://github.com/s-laul/roomiefinderz-frontend">RoomieFinderz</a>
        </h5>
        <h5 style={styles.h5}>
            <a href="https://github.com/thiagobgarc/ReactMessage">React Message</a>
        </h5>
        <h5 style={styles.h5}>
            <a href="https://github.com/thiagobgarc/YadaFp-Frontend">Yada/Food Pantry</a>
        </h5>
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
        display: 'flex'
    },
    text2: {
        fontSize: '1.2rem', 
        lineHeight: '1.5', 
        marginBottom: '1rem', 
        marginRight: '18rem'
    },
    Display: {
        height: 'auto',
        width: 'auto',
        background: 'snow'
    },
    projects: {
        textAlign: 'right',
        marginBottom: '1rem', 
        fontSize: '1.5rem', 
        fontWeight: 'bold',
    },
    h5: {
        textAlign: 'right',
        marginBottom: '1rem', 
        fontSize: '1rem', 
        textDecoration: 'none',
        color: 'white',
    },
    box: {
        // backgroundColor: 'grey',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    image: {
        borderRadius: '20%',
        width: 25,
        height: 25,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        minHeight: '200px'
      }
    
}