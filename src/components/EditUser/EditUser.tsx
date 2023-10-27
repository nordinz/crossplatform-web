import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import { EditUserIcon } from '../icons/EditUserIcon';
import styles from './EditUser.module.css';
import { useUpdateUserMutation } from '../../store/api/usersApi';
import { User } from '../UserList/UserList';

type props = {
  user: User;
  refetch: () => void;
};

function EditUser({ user, refetch }: props) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [updateUser] = useUpdateUserMutation();

  const submitHandler = async () => {
    try {
      await updateUser({
        user: {
          ...user,
          firstName: firstName,
          lastName: lastName,
        },
      });
      refetch();
      setIsEditOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={() => setIsEditOpen(!isEditOpen)}>
        <EditUserIcon fontSize={'1.7rem'} />
      </button>

      {isEditOpen && (
        <div className={styles.edit}>
          <TextInput
            value={firstName}
            placeholder="FirstName"
            onInput={(event: any) => {
              setFirstName(event.target.value);
            }}
          />
          <TextInput
            value={lastName}
            placeholder="LastName"
            onInput={(event: any) => {
              setLastName(event.target.value);
            }}
          />
          <button
            onClick={() => {
              submitHandler();
            }}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
}

export default EditUser;
