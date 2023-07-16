import { MyComponent } from "../components/Background"
import { Navbars } from "../nav/NavBar"
import "./projects.css"
import seedData from "../seed/seedData"
import { Card, CardBody, CardTitle, CardText, Button, CardGroup } from "reactstrap"

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
        I am a Software Engineer
        </h3>
        {/* H3 header for Projects */}
        <h3 style={styles.projects} className="projects">
            Projects
        </h3>
        {/* Separate div for MAP method */}
        <div>
            {/* Mapping Seed Data */}
            {seedData.map((seed, index) => (
        <CardGroup style={{
            width: '50rem', marginBottom: '7rem',display: 'flex',
            justifyContent: 'center',
            alignItems: 'center ', textAlign: 'center',
            marginLeft: '23.5%', marginTop: '-5rem', top: '-5rem'}}>
        <Card
        style={{
          width: '18rem',
        }}
      >
        <img
          alt="Projects"
          src={seed.image}
          style={{height: '20rem'}}
        />
        <CardBody>
          <CardText>
            {seed.description}
          </CardText>
          <Button color="primary" outline>
            <a href={seed.link}>GitHub</a>
          </Button>
        </CardBody>
      </Card>
      </CardGroup>
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
        fontSize: '1.7rem', 
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
        marginTop: '-2rem',
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