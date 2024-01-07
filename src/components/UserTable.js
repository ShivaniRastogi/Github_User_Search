import React, { useState } from 'react';
import './us.css';

const UserTable = ({users}) => {
  return (
    <>
      {users?.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.login}</td>
                <td>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    View Profile
                    </a>

                {/* followers count was not available in the api  */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserTable;
