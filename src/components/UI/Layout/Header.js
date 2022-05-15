import eatJoyImage from "images/eatJoyImage.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>EatJoy</h1>
        <button>Cart</button>
      </header>
      <div className={"main-image"}>
        <img src={eatJoyImage} />
      </div>
    </>
  );
};

export default Header;
