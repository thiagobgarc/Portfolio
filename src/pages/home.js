import { MyComponent } from "../components/Background"
import { Navbars } from "../nav/NavBar"
import "./projects.css"
import seedData from "../seed/seedData"

export const Home = () => {

    return (
        
        <div>
            {/* Navigation Bar */}
            <Navbars/>
            {/* Background image */}
            <MyComponent/>
            {/* div with old gray box used in first code */}
        <div style={styles.box}>
            {/* Welcome header */}
        <h1 style={styles.Text} className="welcome">
           Welcome
        </h1>
        {/* Summary text */}
        <h3 style={styles.text2} className="summary">
        I am a Full-Stack Software Engineer
        </h3>
        {/* H3 header for Projects */}
        <h3 style={styles.projects} className="projects">
            Projects
        </h3>
        {/* Separate div for MAP method */}
        <div>
            {/* Mapping Seed Data */}
            {seedData.map((seed, index) => (
            <h5 style={styles.h5} key={index}>
                <a href={seed.link}>{seed.projectName}
                <br/>
                <img src={seed.image} style={{ height: '200px', width: '400px', borderRadius: '20%', alignItems: 'center', justifyContent: 'center' }}/>
                <br/>
                <p style={styles.p}>
                    {seed.description}
                </p>
                </a>
                <br/>
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
        fontSize: '1.75rem', 
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
        marginBottom: '1rem', 
        marginTop: '1.75rem',
        fontSize: '3rem', 
        fontWeight: 'bold',
    },
    h5: {
        textAlign: 'center',
        marginBottom: '1rem', 
        fontSize: '1.25rem', 
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',

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
      },
      image: {
        borderRadius: '20%',
        height: '200',
        width: '200'
      },
      p: {
        marginLeft: '20em',
        marginRight: '20em'
      }
    
}