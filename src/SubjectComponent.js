import { useState, useEffect } from 'react';
import axios from 'axios';
import './SubjectComponent.css';

function SubjectComponent({ folder, setDescription }) {
    const [ subjects, setSubjects ] = useState([]);

    useEffect(() => {
        if (folder) {
            axios.get(`/folder/${folder}/subjects`)
            .then(response => {
                console.log(response);
                setSubjects(response.data.subjects);
            });
        }
    }, [folder]);

    const displaySubjects = () => {
        return subjects.map(subject => {
            return (<div key={subject.subject} className="hover-folder" onClick={() => setDescription(subject.description)}>
                        {subject.subject} {subject.receivedDate}
                    </div>);
        });
    };

    return (
        <div className="subject-wrapper outlook">
            {displaySubjects()}
        </div>
    )
    
}

export default SubjectComponent;