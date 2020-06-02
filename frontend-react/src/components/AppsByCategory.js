import React, { useState, useEffect } from "react";
import {
    Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,Tooltip
} from 'recharts';


const AppsByCategory = (props) => {
  console.log("sdfgdsdf",props);
  
    return (
      <>
        <ResponsiveContainer width={'100%'} height={500}>
            <RadarChart outerRadius={200} data={props.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="Category" domain={[0, 1700]}/>
                <Radar name="Apps" dataKey="value" stroke="#1184d8" fill="#1184d8" fillOpacity={0.7} />
                <Tooltip />
            </RadarChart>
        </ResponsiveContainer>
      </>
    );
  
}
export default AppsByCategory;
