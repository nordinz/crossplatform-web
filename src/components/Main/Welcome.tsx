import styles from '../Main/Main.module.css';
function Welcome() {
  return (
    <div className={styles.containerMain}>
      <h1 style={{ color: 'black' }}>Welcome</h1>
      <p style={{ textAlign: 'center' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        tempore ratione repudiandae asperiores illo molestiae dolore cumque
        explicabo blanditiis. Placeat quo officia exercitationem corporis
        blanditiis.
      </p>
    </div>
  );
}

export default Welcome;
