import { User } from '../types/index';
import { Link } from 'react-router-dom';

const Users = ({ displayedUsers } : {displayedUsers: User[]} ) => {
 return (
    <div className="flex flex-wrap gap-8 p-8 w-full justify-center">
        {displayedUsers.map((user: User) => (
          <div key={user.login.uuid}>
            <Link
              to={{ pathname: `/profiles/${user.login.uuid}` }}
              state={{ user: user }}
              className="flex justify-between flex-col h-full"
            >
              <div className="bg-white w-[300px] h-[200px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-32 h-32 mb-3 rounded-full shadow-lg"
                    src={`${user.picture.medium}`}
                    alt={`${user.name.first} ${user.name.last}`}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{`${user.name.first} ${user.name.last}`}</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{user.gender}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
 )
}

export default Users;