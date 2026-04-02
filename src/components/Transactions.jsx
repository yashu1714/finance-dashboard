import {
  useContext,
  useState
} from "react";

import {
  AppContext
} from "../context/AppContext";

const Transactions = () => {

  const {
    transactions,
    setTransactions,
    role,
    search,
    setSearch
  } = useContext(AppContext);

  const [editingIndex,
    setEditingIndex] =
    useState(null);

  const [form,
    setForm] =
    useState({
      date: "",
      amount: "",
      category: "",
      type: "expense"
    });

  const handleChange =
    (e) => {

      setForm({
        ...form,
        [e.target.name]:
          e.target.value
      });

    };

  const handleSubmit =
    (e) => {

      e.preventDefault();

      const newTransaction = {

        ...form,
        amount:
          Number(form.amount)

      };

      if (
        editingIndex !== null
      ) {

        const updated =
          [...transactions];

        updated[editingIndex] =
          newTransaction;

        setTransactions(
          updated
        );

        setEditingIndex(
          null
        );

      } else {

        setTransactions(
          [
            ...transactions,
            newTransaction
          ]
        );

      }

      setForm({
        date: "",
        amount: "",
        category: "",
        type: "expense"
      });

    };

  const handleDelete =
    (index) => {

      const filtered =
        transactions.filter(
          (_, i) =>
            i !== index
        );

      setTransactions(
        filtered
      );

    };

  const handleEdit =
    (index) => {

      setForm(
        transactions[index]
      );

      setEditingIndex(
        index
      );

    };

  const exportCSV =
    () => {

      const headers =
        [
          "Date",
          "Amount",
          "Category",
          "Type"
        ];

      const rows =
        transactions.map(
          (t) => [
            t.date,
            t.amount,
            t.category,
            t.type
          ]
        );

      let csv =
        headers.join(",")
        + "\n";

      rows.forEach(
        (row) => {

          csv +=
            row.join(",")
            + "\n";

        }
      );

      const blob =
        new Blob(
          [csv],
          {
            type:
              "text/csv"
          }
        );

      const url =
        window.URL.createObjectURL(
          blob
        );

      const a =
        document.createElement(
          "a"
        );

      a.href = url;

      a.download =
        "transactions.csv";

      a.click();

    };

  const filtered =
    transactions.filter(
      (t) =>
        t.category
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (

    <div className="p-6">

      <h2 className="
      text-xl
      font-bold
      mb-3
      ">
        Transactions
      </h2>

      <input
        type="text"
        placeholder="Search by category"
        value={search}
        onChange={
          (e) =>
            setSearch(
              e.target.value
            )
        }
        className="
        w-full
        border
        p-2
        mb-3
        rounded
        bg-white
        dark:bg-gray-800
        "
      />

      <button
        onClick={exportCSV}
        className="
        bg-green-500
        text-white
        px-3
        py-2
        rounded
        mb-4
        "
      >
        Export CSV
      </button>

      {role === "admin" && (

        <form
          onSubmit={
            handleSubmit
          }
          className="
          grid
          grid-cols-2
          gap-3
          mb-4
          bg-white
          dark:bg-gray-800
          p-4
          rounded
          shadow
          "
        >

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={
              handleChange
            }
            required
            className="border p-2"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={
              handleChange
            }
            required
            className="border p-2"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={
              handleChange
            }
            required
            className="border p-2"
          />

          <select
            name="type"
            value={form.type}
            onChange={
              handleChange
            }
            className="border p-2"
          >

            <option value="income">
              Income
            </option>

            <option value="expense">
              Expense
            </option>

          </select>

          <button
            className="
            bg-blue-600
            text-white
            p-2
            rounded
            col-span-2
            "
          >
            {editingIndex !== null
              ? "Update Transaction"
              : "Add Transaction"}
          </button>

        </form>

      )}

    <table className="
w-full
border
bg-white
shadow
text-left
">

  <thead className="
  bg-gray-200
  ">

    <tr>

      <th className="p-3">Date</th>

      <th className="p-3">Amount</th>

      <th className="p-3">Category</th>

      <th className="p-3">Type</th>

      <th className="p-3">Actions</th>

    </tr>

  </thead>

  <tbody>

    {filtered.map(
      (t, index) => (

        <tr
          key={index}
          className="border-t"
        >

          <td className="p-3">
            {t.date}
          </td>

          <td className="p-3">
            ₹{t.amount}
          </td>

          <td className="p-3">
            {t.category}
          </td>

          <td className="p-3">
            {t.type}
          </td>

          <td className="p-3 space-x-2">

            {role === "admin" && (

              <>
                <button
                  onClick={() =>
                    handleEdit(index)
                  }
                  className="
                  bg-yellow-500
                  text-white
                  px-2
                  py-1
                  rounded
                  "
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(index)
                  }
                  className="
                  bg-red-500
                  text-white
                  px-2
                  py-1
                  rounded
                  "
                >
                  Delete
                </button>
              </>

            )}

          </td>

        </tr>

      )
    )}

  </tbody>

</table>

    </div>

  );

};

export default Transactions;