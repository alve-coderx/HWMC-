import React from "react";
import { createUseStyles } from "react-jss";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

/** 
 * Stylesheet using react-jss
 */


/** 
 * Define all colors for linear gradient with an id 
 */
const GradientColors = () => {
  return (
    <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="#E2BDFE" stopOpacity={0.2} />
      <stop offset="75%" stopColor="#F0DEFE" stopOpacity={0.05} />
      <stop offset="95%" stopColor="#F8EFFF" stopOpacity={0.02} />
    </linearGradient>
  );
};
const GradientColors2 = () => {
  return (
    <linearGradient id="colorView2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="#B2FFFB" stopOpacity={0.2} />
      <stop offset="75%" stopColor="#D9FFFD" stopOpacity={0.05} />
      <stop offset="95%" stopColor="#ECFFFE" stopOpacity={0.02} />
    </linearGradient>
  );
};
const GradientColors3 = () => {
  return (
    <linearGradient id="colorView3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="#FFE5C8" stopOpacity={0.2} />
      <stop offset="75%" stopColor="#FFF2E3" stopOpacity={0.05} />
      <stop offset="95%" stopColor="#FFF9F1" stopOpacity={0.02} />
    </linearGradient>
  );
};

const MyGraph = ({ data }) => {
  return (
    <div className="w-full h-96 text-white rounded-lg transition ease-in-out delay-150">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <GradientColors />
        </defs>
          <defs>
            <GradientColors2 />
          </defs>
          <defs>
            <GradientColors3 />
          </defs> 
          <Tooltip contentStyle={{background: "#0b0d12", border: "0.5px solid #767676", borderRadius: "10px"}} cursor={{ fill: 'rgba(245, 238, 254, 0.233)' }} />
          <XAxis dataKey="name" tick={{ fill: "#17ab9c" }} stroke="white" />
          <YAxis tick={{ fill: "#17ab9c" }} stroke="#EEEEEE" />
          <Area
            dataKey="view"
            type="monotone"
            stroke="#01F1E3"
            strokeWidth={1}
            strokeOpacity={1}
            fill="url(#colorView2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyGraph;
