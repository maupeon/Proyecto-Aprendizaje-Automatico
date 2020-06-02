import React, { useState, useEffect } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, ComposedChart, Area, LabelList, ScatterChart, Scatter, ZAxis
  } from 'recharts';



const TopByInstalls = (props) => {
  
    return (
      <>
        <ResponsiveContainer width={'100%'} height={400}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" unit="" />
            <YAxis dataKey="value" name="value" unit=" stars" />
            <ZAxis dataKey="Installs" range={[2, 750]} name="Installs" unit="M" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="Google Play Store Apps" data={props.data} fill="#3182FC" />
        </ScatterChart>
        </ResponsiveContainer>
      </>
    );
  
}


export default TopByInstalls;