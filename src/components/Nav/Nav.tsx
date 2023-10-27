import { CreateIcon } from '../icons/CreateIcon';
import { HomeIcon } from '../icons/HomeIcon';
import { ListIcon } from '../icons/ListIcon';
import styles from './Nav.module.css';
type props = {
  CreateBtn: () => void;
  UserBtn: () => void;
  HomeBtn: () => void;
};

function Nav({ CreateBtn, UserBtn, HomeBtn }: props) {
  return (
    <div className={styles.nav}>
      <button className={styles.btn} onClick={HomeBtn}>
        <HomeIcon fontSize={'3rem'} color="red" />
        Home
      </button>
      <button className={styles.btn} onClick={CreateBtn}>
        <CreateIcon fontSize={'3rem'} />
        Create
      </button>
      <button className={styles.btn} onClick={UserBtn}>
        <ListIcon fontSize={'3rem'} color="green" />
        UserList
      </button>
    </div>
  );
}

export default Nav;
