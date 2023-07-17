import { Card, CardBody, CardText, Button, CardGroup } from "reactstrap"
import seedData from "../seed/seedData"
import { Navbars } from "../nav/NavBar"
import { MyComponent } from "./Background"
const Projects = () => {

    return (
        <div>
        <Navbars/>
        <MyComponent style={{height: '1000vh'}}/>
        {/* H3 header for Projects */}
        <h3 style={styles.projects} className="projects">
            Projects
        </h3>
        {/* Separate div for MAP method */}
        <div
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center', 
            width: '100%'
          }}
        >
            {/* Mapping Seed Data */}
            {seedData.map((seed, index) => (
        <CardGroup style={{ width: '15rem',
            height: '20rem', marginTop: '7.5rem', 
            marginRight: '2.5rem', 
            marginLeft: '2.5rem'
            }} color="dark">
        <Card>
        <img
          alt="Projects"
          src={seed.image}
          style={{height: '12.5rem'}}
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
  <MyComponent/>
</div>
</div>
    )
}

export default Projects

const styles = {
    projects: {
        textAlign: 'center',
        marginBottom: '1rem', 
        marginTop: '-2rem',
        fontSize: '3rem', 
        fontWeight: 'bold',
    },
}