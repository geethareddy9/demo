import { useState } from 'react';
import FolderComponent from './FolderComponent';
import SubjectComponent from './SubjectComponent';
import EmailDescriptionComponent from './EmailDescriptionComponent';
import './Outlook.css';

function Outlook() {
    const [ folder, setFolder ] = useState('');
    const [ description, setDescription ] = useState('');
    return (
        <div className="outlook-wrapper">
            <FolderComponent setFolder={setFolder} setDescription={setDescription}/>
            <SubjectComponent folder={folder} setDescription={setDescription}/>
            <EmailDescriptionComponent description={description}/>
        </div>
    )
}

export default Outlook;