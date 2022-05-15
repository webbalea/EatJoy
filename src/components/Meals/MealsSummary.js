import classes from "./MealsSummary.module.css";
import Logo from "components/UI/Logo/Logo";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>
        Order and '<Logo logoSize="35px" />' your food!
      </h2>
      <p>All our meals are cooked with high-quality ingredients,</p>
      <p>just-in-time and by experienced chefs</p>
      <p>and of course, with joy!</p>
    </section>
  );
};

export default MealsSummary;
