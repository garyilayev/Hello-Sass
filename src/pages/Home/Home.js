import React from 'react';
import UserCard from '../../components/UserCard/UserCard';
import { useState, useEffect, useRef } from 'react';
import './Home.scss';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        let isMounted = true; 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                if (isMounted){
                    setData(data)
                    setLoading(false);
                    handleFocus();
                }
            });
            return () => { isMounted = false };
    }, [])
    
    const handleFocus = () => {
        inputRef.current.focus();
    }

    const handleChange = e => {
        setInput(() => e.target.value);
    }

    return !loading ? (<div className="main-container">
        <div className="search-field">
            <input ref={inputRef} value={input} placeholder={'🔍 Search Here...'} onChange={e => handleChange(e)}/>
        </div>
            <div className="user-list">
                {data.filter(user => user.name.toLowerCase().includes(input) || user.username.toLowerCase().includes(input)).map((user) => (
                            <UserCard key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} />
                ))}
            </div>
        </div>) : (<><h1>Loading...</h1></>);
}

export default Home;