import React, { useState, useEffect } from "react";
import {
    Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,Tooltip
} from 'recharts';


const AppsByCategory = (props) => {
  console.log("sdfgdsdf",props);
  
    return (
      <>
        <ResponsiveContainer width={'100%'} height={500}>
            <RadarChart outerRadius={200} width={'750'} height={250} data={props.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="Category" />
                <PolarRadiusAxis angle={30} domain={[0, 500]} />
                <Radar name="Apps" dataKey="value" stroke="#1184d8" fill="#1184d8" fillOpacity={0.7} />
                <Legend />
                <Tooltip />
            </RadarChart>
        </ResponsiveContainer>
      </>
    );
  
}
export default AppsByCategory;