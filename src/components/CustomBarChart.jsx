import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const GradientColors = () => {
  return (
    <linearGradient id="barColorView" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#E323FF" stopOpacity={1} />
      <stop offset="95%" stopColor="#7517F8" stopOpacity={1} />
    </linearGradient>
  );
};
const GradientColors2 = () => {
  return (
    <linearGradient id="barColorView2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FFD422" stopOpacity={1} />
      <stop offset="95%" stopColor="#FF7D05" stopOpacity={1} />
    </linearGradient>
  );
};

const CustomBarChart = (props) => {

  return (
    <div className=" w-full h-96 bg-bg rounded-lg py-6 custom-bar-chart px-6 ">
      <div>
        <h2 className="text-dark dark:text-white font-semibold text-2xl  m-0 font-neuePlak">BTC Minned</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={600}
          height={300}
          data={props.value}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          stackOffset="none"
        >
          {/* <Tooltip
            itemStyle={{ color: "#fff", backgroundColor: "#0A1322", borderRadius: "10px" }}
            contentStyle={{ backgroundColor: "#0A1322" }}
          /> */}
          <defs>
            <GradientColors />
          </defs>
          <defs>
            <GradientColors2 />
          </defs>
          <Legend formatter={(value,entry,index) => <span className="font-medium text-dark dark:text-white">{value}</span>} verticalAlign="top" align="right" wrapperStyle={{ top: "-30px", color: "#fff", borderRadius: "9999px" }} />
        {/*   <CartesianGrid strokeDasharray="0 1 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background: "#0b0d12", border: "0.5px solid #767676", borderRadius: "10px"}} cursor={{ fill: 'rgba(245, 238, 254, 0.233)' }} />
     
          <Bar dataKey="BTC" className="font-medium text-dark dark:text-white" stackId="a" background={{ fill: '#00000021' }} barSize={10} fill="url(#barColorView)" 
            radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

}
export default CustomBarChart;