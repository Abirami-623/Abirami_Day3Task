import React, { useState } from "react";
import './App.css';
import Card from './Components/Card';

function App() {
    const [name, setName] = useState('Your Name');
    const [job, setJob] = useState('Job Title');
    const [about, setAbout] = useState("She radiates joy and positivity, always lighting up the room with her infectious smile. Her creativity knows no bounds, as she effortlessly brings imagination to life. With her kind heart and adventurous spirit, she's always ready to help others, spreading warmth wherever she goes. Her confident attitude and bright personality make her a true inspiration to those around her, showing everyone the power of positivity.");

    return (
        <div className='App'>
            
             <Card name={'Abirami'} job={'Instagram'} about={about}/> 
        </div>
    );
}

export default App;
