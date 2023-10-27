import { useState } from 'react';
import CreateUser from '../../components/CreateUser/CreateUser';
import UserList from '../../components/UserList/UserList';
import Nav from '../Nav/Nav';
import styles from './Main.module.css';
import Welcome from './Welcome';

function Main() {
  const [create, setCreate] = useState(false);
  const [wc, setWc] = useState(true);
  const [userList, setuserList] = useState(false);

  function navToCreate() {
    setuserList(false);
    setWc(false);
    setCreate(true);
  }
  function navToUser() {
    setCreate(false);
    setWc(false);
    setuserList(true);
  }
  function navToHome() {
    setWc(true);
    setCreate(false);
    setuserList(false);
  }
  return (
    <>
      <div className={styles.container}>
        <Nav CreateBtn={navToCreate} UserBtn={navToUser} HomeBtn={navToHome} />

        {wc && <Welcome />}
        {create && <CreateUser />}
        {userList && <UserList />}
      </div>
    </>
  );
}

export default Main;
