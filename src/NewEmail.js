import { useState } from 'react';
import axios from 'axios';
//import './NewEmail.css';

function NewEmail() {
    const [ item, setItem ] = useState({});

    const handleInputChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = () => {
        axios.post('/email', item)
        .then(() => 
            alert('Email sent successfully')
        );
    };

    return (
        <div className="NewEmail-wrapper">
            <form onSubmit={handleSubmit}>
            <br/><br/>
                Subject: <input type="text" name="subject" onChange={(e) => handleInputChange(e)} /><br/><br/>
                Description: <textarea name="description" onChange={(e) => handleInputChange(e)} /><br/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default NewEmail;