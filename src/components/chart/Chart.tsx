import {
  //   LineChart,
  //   Line,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

type PropsType = {
  selectedCurrency: string;
};

const data = [
  {
    name: "00.00",
    Dollars: 4000,
    Naira: 2400,
  },
  {
    name: "2.00",
    Dollars: 3000,
    Naira: 1398,
  },
  {
    name: "4.00",
    Dollars: 2000,
    Naira: 9800,
  },
  {
    name: "6.00",
    Dollars: 2780,
    Naira: 3908,
  },
  {
    name: "8.00",
    Dollars: 1890,
    Naira: 4800,
  },
  {
    name: "10.00",
    Dollars: 2390,
    Naira: 3800,
  },
  {
    name: "12.00",
    Dollars: 3490,
    Naira: 4300,
  },
  {
    name: "14.00",
    Dollars: 3490,
    Naira: 4300,
  },
  {
    name: "16.00",
    Dollars: 3490,
    Naira: 4300,
  },
  {
    name: "18.00",
    Dollars: 3490,
    Naira: 4300,
  },
  {
    name: "20.00",
    Dollars: 3490,
    Naira: 4300,
  },
  {
    name: "22.00",
    Dollars: 3490,
    Naira: 4300,
  },
];

function Chart({ selectedCurrency }: PropsType) {
  return (
    <div className="mt-3 bg-white shadow-sm rounded-md pt-5">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {selectedCurrency === "NGN" && <Bar dataKey="Naira" fill="#41E755" />}
          {selectedCurrency === "USD" && (
            <Bar dataKey="Dollars" fill="#346FFF" />
          )}
          {selectedCurrency === "All" && (
            <>
              <Bar dataKey="Dollars" fill="#346FFF" />
              <Bar dataKey="Naira" fill="#41E755" />
            </>
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
