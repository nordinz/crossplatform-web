import { useGetUsersQuery } from '../../store/api/usersApi';
import { useDeleteUserMutation } from '../../store/api/usersApi';
import EditUser from '../EditUser/EditUser';
import { DeleteIcon } from '../icons/DeleteIcon';
import { ReloadIcon } from '../icons/ReloadIcon';
import styles from './UserList.module.css';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

function UserList() {
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
    } catch (error) {
      console.log(error);
    }
  };

  const { data, error, isLoading, refetch } = useGetUsersQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Laddar</div>;

  return (
    <div className={styles.userListStyle}>
      <ul>
        {data.map((user: User) => {
          return (
            <li key={user.id}>
              <p>
                {' '}
                {user.firstName} {user.lastName}
              </p>
              <div>
                <EditUser refetch={refetch} user={user} />
                <button
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                >
                  <DeleteIcon fontSize={'1.7rem'} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <button onClick={refetch}>
        <ReloadIcon fontSize={'2rem'} />
      </button>
    </div>
  );
}

export default UserList;
