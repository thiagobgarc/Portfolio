import { useEffect, useState } from "react"
import { Navbars } from "../nav/NavBar"
import { MyComponent } from "./Background"
import { Button, Input } from "reactstrap"
import URL from "./URL"

export const Contact = () => {
    // State for storing data from API
    const [data, setData] = useState([])
    // State for name input
    const [name, setName] = useState('')
    // State for phone input
    const [phone, setPhone] = useState('')
    // State for email input
    const [email, setEmail] = useState('')

    // Get Data 
    const getData = () => {
        fetch(`${URL}`)
        .then(resp => resp.json())
        .then(data => {
            console.log('data:', data)
            // Set the fetched data in state
            setData(data)
        })
        // Catch error
        .catch(error => console.error(error))
    }

    const handleNameChange = (event) => {
        // Update name state on input change
        setName(event.target.value)
    }
    
    const handlePhoneChange = (event) => {
        // Update phone state on input change
        setPhone(event.target.value)
    }
    
    const handleEmailChange = (event) => {
        // handle email state on input change
        setEmail(event.target.value)
    }

    const handleSubmit = async() => {
        // LOGS
        console.log('New name:', name)
        console.log('New phone:', phone)
        console.log('New email:', email)

        const response = await fetch(`${URL}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            // Send form data to the API
            body: JSON.stringify({name: name, phone: phone, email: email})
        })
        console.log('Response:', response)
        const json = await response.json()
        console.log('New data:', json)
        // Clear name input
        setName('')
        // Clear phone input
        setPhone('')
        // Clear email input 
        setEmail('')
        // Refresh the data by fetching it again
        getData()
    }

    useEffect(()=> {
        // Fetch data when the component mounts
        getData()
    }, [])

    return (
        <div>
            <Navbars/>
            <MyComponent/>
        <div className="input" style={styles.div}>
            <h2 style={styles.h1}>
                Want to keep in touch?
            </h2>
        <Input
            style={styles.nameInput}
            placeholder="What's your name?"
            type="text"
            value={name}
            bsSize="sm"
            onChange={handleNameChange}
        />
        <br/>
        <Input
            style={styles.input}
            placeholder="Phone #"
            value={phone}
            onChange={handlePhoneChange}
            bsSize="sm"
            type="phone"
        />
        <br/>
        <Input
        style={styles.emailInput}
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            type="email"
            bsSize="sm"
        />
        <br/>
        <Button onClick={handleSubmit} style={styles.button} color='primary'
        outline
        type="Submit"
        value="Submit">
            Submit
        </Button>
        </div>
        </div>
    )
}

const styles = {
    input: {
        alignItems: 'center',
        position: 'fixed',
        borderRadius: 20,
        padding: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 0,
        textAlign: 'center'
    }, 
    button: {
        alignItems: 'center',
        position: 'fixed',
        marginTop: 275,
        padding: 5,
        paddingRight: 50,
        paddingLeft: 50,
        textAlign: 'center',
        borderRadius: 10
    },
    div: {
        // backgroundColor: 'grey',
        opacity: '80%',
        borderRadius: '20%',
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    }, 
    h1: {
        marginBottom: 350,
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        opacity: '70%',
        color: 'white'
    },
    nameInput: {
        alignItems: 'center',
        position: 'fixed',
        borderRadius: 20,
        padding: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 150,
        textAlign: 'center',
    },
    emailInput: {
        alignItems: 'center',
        position: 'fixed',
        borderRadius: 20,
        padding: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 150,
        textAlign: 'start',
        textAlign: 'center'
    }
}