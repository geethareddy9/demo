import axios from 'axios';
import { useState, useEffect } from 'react';
import './FolderComponent.css';

function FolderComponent( { setFolder, setDescription }) {
    const [ folders, setFolders ] = useState([]);

    useEffect(() => {
        axios.get('/folders')
        .then(response => {
            setFolders(response.data.folders);
        });
    }, []);

    const displayFolders = () => {
        return folders.map(({ id, name }) => {
            return (<div key={name} className="hover-folder" onClick={() => { setFolder(id); setDescription(''); }}>
                        {name}
                    </div>);
        });
    };

    return (
        <div className="folder-wrapper outlook">
            {displayFolders()}
        </div>
    )
}

export default FolderComponent;