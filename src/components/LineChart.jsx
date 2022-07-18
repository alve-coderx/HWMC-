import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
{
  pv: 6.98,
},
{
  pv: 7.0,
},
{
  pv: 7.2,
},
{
  pv: 7.5,
},
{
  pv: 8,
},
];

const GradientColors = () => {
  return (
    <linearGradient id="lineColorView" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#E323FF" stopOpacity={1} />
      <stop offset="95%" stopColor="#7517F8" stopOpacity={1} />
    </linearGradient>
  );
};

const TinyLineChart = (props) => {

  return (
        <ResponsiveContainer width="100%" height="100%">
  
          <LineChart width={300} height={100} data={props.data}>
          <defs>
            <GradientColors />
          </defs>
            <Line type="natural" dataKey="pv" stroke="url(#lineColorView)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
  );
};

export default TinyLineChart;