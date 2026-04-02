import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

const pieData = [
  { name: "Food", value: 1200 },
  { name: "Shopping", value: 2000 },
  { name: "Transport", value: 800 }
];

const lineData = [
  { month: "Jan", balance: 4000 },
  { month: "Feb", balance: 6000 },
  { month: "Mar", balance: 5000 }
];

const Charts = () => {

  return (

    <div className="
    grid
    grid-cols-1
    md:grid-cols-2
    gap-6
    p-6
    ">

      {/* Pie Chart */}

      <div className="
      bg-white
      p-4
      rounded
      shadow
      ">

        <h2 className="
        font-bold
        mb-3
        ">
          Spending Breakdown
        </h2>

        <PieChart width={300} height={300}>

          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            fill="#8884d8"
            label
          />

          <Tooltip />

          <Legend />

        </PieChart>

      </div>

      {/* Line Chart */}

      <div className="
      bg-white
      p-4
      rounded
      shadow
      ">

        <h2 className="
        font-bold
        mb-3
        ">
          Balance Trend
        </h2>

        <LineChart
          width={400}
          height={300}
          data={lineData}
        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line dataKey="balance" />

        </LineChart>

      </div>

    </div>

  );

};

export default Charts;