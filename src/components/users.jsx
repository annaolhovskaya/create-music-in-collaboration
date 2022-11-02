import React, { useEffect, useState } from 'react';
import api from '../api';
import _ from 'lodash';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const randomNumberArray = _.shuffle(_.range(0, users.length)).slice(0, 8);
  const randomUsers = randomNumberArray.map((number) => users[number]);

  useEffect(() => {}, []);

  return (
    <>
      {randomUsers.map((user) => (
        <div className="user__item" key={user._id}>
          <img className="user__avatar" />
          <div className="user__info">
            <h3 className="user__item__name">{user.name}</h3>
            <div className="label__item">
              <div className="label label--blue">collaboration</div>
              <div className="label label--pink">remix</div>
            </div>
            <div className="user__music__styles">
              {user.style.map((item) => (
                <div className="music__styles__item" key={item._id}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default Users;
