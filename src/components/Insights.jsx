import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {

  const { transactions } =
    useContext(AppContext);

  let income = 0;
  let expense = 0;

  const categoryTotals = {};

  transactions.forEach((t) => {

    if (t.type === "income")
      income += t.amount;

    if (t.type === "expense") {

      expense += t.amount;

      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0)
        + t.amount;

    }

  });

  let highestCategory = "";
  let highestAmount = 0;

  for (let category in categoryTotals) {

    if (
      categoryTotals[category]
      > highestAmount
    ) {

      highestAmount =
        categoryTotals[category];

      highestCategory =
        category;

    }

  }

  return (

    <div className="p-6">

      <h2 className="
      text-xl
      font-bold
      mb-4
      ">
        Insights
      </h2>

      <div className="
      grid
      grid-cols-1
      md:grid-cols-4
      gap-6
      ">

        {/* Highest Category */}

        <div className="
        bg-purple-100
        p-4
        rounded
        shadow
        ">

          <h3 className="text-gray-700">
            Highest Category
          </h3>

          <p className="
          font-bold
          text-lg
          ">
            {highestCategory}
          </p>

          <p>
            ₹{highestAmount}
          </p>

        </div>

        {/* Total Income */}

        <div className="
        bg-green-100
        p-4
        rounded
        shadow
        ">

          <h3 className="text-gray-700">
            Total Income
          </h3>

          <p className="
          font-bold
          text-lg
          ">
            ₹{income}
          </p>

        </div>

        {/* Total Expenses */}

        <div className="
        bg-red-100
        p-4
        rounded
        shadow
        ">

          <h3 className="text-gray-700">
            Total Expenses
          </h3>

          <p className="
          font-bold
          text-lg
          ">
            ₹{expense}
          </p>

        </div>

        {/* Total Transactions */}

        <div className="
        bg-blue-100
        p-4
        rounded
        shadow
        ">

          <h3 className="text-gray-700">
            Total Transactions
          </h3>

          <p className="
          font-bold
          text-lg
          ">
            {transactions.length}
          </p>

        </div>

      </div>

    </div>

  );

};

export default Insights;