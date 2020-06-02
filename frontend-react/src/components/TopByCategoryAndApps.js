import React, { useState, useEffect } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, ComposedChart, Area, LabelList, ScatterChart, Scatter, ZAxis
  } from 'recharts';



const TopByCategoryAndApps = (props) => {
  
    return (
      <>
        <ResponsiveContainer width={'100%'} height={450}>
            <ComposedChart data={props.data}>
              <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"/>
                <YAxis unit='0M' />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Area type="monotone" dataKey="value" name='Installs' fill="#8884d8" stroke="#8884d8" unit='0M'/>
                <Line type="count_apps" dataKey="count_apps" name='Apps' stroke="#ff7300" unit=' apps'/>
            </ComposedChart>
        </ResponsiveContainer>
      </>
    );
  
}


export default TopByCategoryAndApps;