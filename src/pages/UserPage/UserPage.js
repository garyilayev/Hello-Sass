import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './UserPage.scss';

const UserPage = () => {

    let { id } = useParams();

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true; 
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then(jsonData => {
                if (isMounted){
                    setData(jsonData);
                    setLoading(false);
                }
            });
            return () => { isMounted = false };

    }, [id])

    return !loading ? (
        <div className="container-outer">
            <div className="container-border">
            <div className="container-inner">
                <div className="name">
                    <h1>{data.name && data.name.substr(0, data.name.indexOf(' ')) + ` "${data.username}" ` + data.name.substr(data.name.indexOf(' '))}</h1>
                </div>
                <div className="desc">
                    <h5>📫 {data.email}</h5>
                    <h5>📞 {data.phone}</h5>
                </div>
                <div className="info">
                    <p>🌎 Lives in {`${data?.address?.city}`}, {`${data?.address?.street}`} {data?.address?.zipcode}</p>
                </div>
                <div className="info">
                    <p>💻 {`http://www.${data.website}`}</p>
                </div>
            </div>
            </div>
        </div>
    ) : (<div>
        <h1>Loading...</h1>
    </div>);
}

export default UserPage;