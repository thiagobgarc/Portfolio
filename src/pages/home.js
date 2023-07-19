import { MyComponent } from "../components/Background"
import { Navbars } from "../nav/NavBar"
import "./projects.css"
import seedData from "../seed/seedData"
import {  Button } from "reactstrap"

export const Home = () => {

    return (
        
        <div>
            {/* Navigation Bar */}
            <Navbars/>
            {/* Background image */}
            <MyComponent/>
            {/* div with old gray box used in first code */}
        <div style={styles.box} className="box">
            {/* Welcome header */}
        <h1 style={styles.Text} className="welcome">
           Welcome
        </h1>
        {/* Summary text */}
        <h3 style={styles.text2} className="text">
        I am a Software Engineer
        </h3>
        <Button color="light" outline
        href="/projects"
        style={{marginRight: '1rem', marginLeft: '2rem'}}
        >
          Projects
        </Button>
        <Button color="light" outline
        href='https://github.com/thiagobgarc'
        style={{marginRight: '1rem'}}
        >
          GitHub
        </Button>
        <Button color="light" outline
        href="https://www.linkedin.com/in/thiago-bueno-garcia-34604a25a/"
        >
          linkedIn
        </Button>
        </div>
        </div>
    )
}

const styles = {
    Text: {
        fontSize: '7rem', 
        lineHeight: '3', 
        marginBottom: '3rem', 
        marginTop: '1.5rem',
        fontWeight: 'bold',
        display: 'flex',
        color: 'white',
        top: '6rem'
    },
    // text2: {
    //     fontSize: '20px', 
    //     lineHeight: '1.5', 
    //     marginBottom: '1rem', 
    //     marginRight: '40rem',
    //     marginTop: '2rem',
    //     color: 'white',
    //     marginLeft: '.5rem'
    // },
    Display: {
        height: 'auto',
        width: 'auto',
        background: 'snow'
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