import styles from "./Logo.module.css";

const Logo = (props) => {
  const logoSize = props.logoSize ? { fontSize: props.logoSize } : null;
  const contained = props.contained ? styles.contained : null;

  return (
    <>
      <span className={styles.logo + " " + contained} style={logoSize}>
        <span className={styles.eat}>Eat</span>
        <span className={styles.joy}>Joy</span>
      </span>
    </>
  );
};

export default Logo;
