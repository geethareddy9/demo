function Contact({ type, setCounter }) {
   
    return (
        <div>Welcome to Contact {type} </div>
        <button onClick={setCounter}>+</button>
    )
}

export default Contact;