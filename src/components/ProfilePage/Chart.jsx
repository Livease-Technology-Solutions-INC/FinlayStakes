import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const DonutChart = ({StatsData , inRadius, outRadius}) => {
    const transformedData = StatsData.map(item => ({
        name: item.name,
        value: parseFloat(item.stat.replace(/[^\d.]/g, '')), 
        color: item.color,
      }));

 return(
    <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={transformedData}
        cx="40%"
        cy="27%"
        innerRadius={{inRadius}?(inRadius):30}
        outerRadius={{outRadius}?(outRadius):27}
        startAngle={90}
        endAngle={450}
        paddingAngle={9}
        dataKey="value"
      >
        {transformedData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {/* <Legend /> */}
    </PieChart>
  </ResponsiveContainer>
    )
        };

export default DonutChart;

// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
//   const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

//   return (
//     <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };