import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import AppleIcon from '../icons/AppleIcon';
import styles from './CreateUser.module.css';
import { useCreateUserMutation } from '../../store/api/usersApi';

const CreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = () => {
    console.log('submitting');

    if (firstName !== '' && lastName !== '') {
      setSubmitted(true);
      setFeedback(`Hej ${firstName} ${lastName}, wc!`);
      setTimeout(() => {
        setFeedback('');
        setFirstName('');
        setLastName('');
      }, 2000);

      createUser({
        user: {
          firstName: firstName,
          lastName: lastName,
        },
      });
    } else {
      setSubmitted(false);
      setFeedback('Fyll i alla fält!');
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <div>
            <AppleIcon color="rgb(0, 0, 0)" height={100} width={100} />
          </div>
          <TextInput
            value={firstName}
            placeholder="FirstName"
            onInput={(event: any) => {
              setFirstName(event.target.value);
            }}
          />
          <TextInput
            value={lastName}
            placeholder="lastname"
            onInput={(event: any) => {
              setLastName(event.target.value);
            }}
          />
          <button className={styles.button} onClick={submitHandler}>
            Create User
          </button>
          <p style={{ color: submitted ? 'green' : 'red' }}>{feedback}</p>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
