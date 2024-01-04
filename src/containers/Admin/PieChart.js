import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';

const data = [
  { name: "tien", value: 50000 },
  { name: "ve_si", value: 60000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="percentage">{`${((payload[0].value / data.reduce((a, b) => a + b.value, 0)) * 100).toFixed(2)}%`}</p>
      </div>
    );
  }

  return null;
};

const MyPieChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie dataKey="value" data={data} nameKey="name" cx="50%" cy="50%" outerRadius={80}>
        <Cell fill="#F41B3F" name="tien" />
        <Cell fill="#1B08F4" name="ve_si" />
      </Pie>
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
  </ResponsiveContainer>
);

export default MyPieChart;