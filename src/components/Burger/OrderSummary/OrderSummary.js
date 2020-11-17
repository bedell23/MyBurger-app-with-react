import React from "react";
import Auxi from "../../../hoc/Auxi";
import Button from "../../UI/Button/Button";

function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxi>
      <h3>Your Order</h3>
      <p>
        Here is a list of your delicious Burger with the following ingredients:
      </p>
      <ul>{ingredientSummary}</ul>
      <h3 style={{ color: "red" }}>
        <strong>Total Price: {props.price.toFixed(2)} USD</strong>
      </h3>
      <p>Continue to checkout?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxi>
  );
}

export default OrderSummary;
