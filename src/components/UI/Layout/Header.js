import eatJoyImage from "images/eatJoyImage.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <Logo logoSize="30px" contained />
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={eatJoyImage} alt="people eating" />
      </div>
    </>
  );
};

export default Header;
