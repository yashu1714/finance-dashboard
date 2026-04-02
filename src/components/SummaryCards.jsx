import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SummaryCards = () => {

  const { transactions } =
    useContext(AppContext);

  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {

    if (t.type === "income")
      income += t.amount;

    else
      expense += t.amount;

  });

  const balance =
    income - expense;

  return (

    <div className="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-6
    p-6
    ">
      <div className="
      bg-green-100
      p-6
      rounded
      shadow
      ">

        <h2 className="
        text-gray-700
        ">
          Balance
        </h2>

        <p className="
        text-2xl
        font-bold
        text-gray-900
        ">
          ₹{balance}
        </p>

      </div>

      <div className="
      bg-blue-100
      p-6
      rounded
      shadow
      ">

        <h2 className="
        text-gray-700
        ">
          Income
        </h2>

        <p className="
        text-2xl
        font-bold
        text-gray-900
        ">
          ₹{income}
        </p>

      </div>

      <div className="
      bg-red-100
      p-6
      rounded
      shadow
      ">

        <h2 className="
        text-gray-700
        ">
          Expenses
        </h2>

        <p className="
        text-2xl
        font-bold
        text-gray-900
        ">
          ₹{expense}
        </p>

      </div>

    </div>

  );

};

export default SummaryCards;
