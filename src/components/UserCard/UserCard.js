import React from 'react';
import { Link} from 'react-router-dom';
import './UserCard.scss';

const UserCard = ({ id, name, username, email }) => {

     const index =  name.indexOf(' ');
     const fullName = name.substr(0, index) + ` "${username}" ` + name.substr(index);

     return (  
          <div className="card">
               <Link to={`/users/${id}`}>
                    <div className="container">
                         <h4><b>{fullName}</b></h4>
                         <p>📫 {email}</p>
                    </div>
               </Link>
          </div>
     );
}

export default UserCard;