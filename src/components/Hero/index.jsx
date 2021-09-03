import styles from './styles.module.scss';

const Hero = ({ children }) => {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>{children}</div>
    </header>
  );
};

export default Hero;
