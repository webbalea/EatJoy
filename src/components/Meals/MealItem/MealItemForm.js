import Input from "components/UI/UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <>
      <form className={styles.form}>
        <Input
          label="Amount"
          input={{
            id: "amount_" + props.id, // this changed!
            type: "number",
            min: "1",
            max: "10",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
      </form>
    </>
  );
};

export default MealItemForm;