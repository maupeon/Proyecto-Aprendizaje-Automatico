import React, { useState, useEffect } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, ComposedChart, Area, LabelList, RadialBarChart, RadialBar
  } from 'recharts';



const AndroidVersions = (props) => {
    return (
      <>
      {/* <div style={{width:"1000px", height:"500"}}> */}
        <ResponsiveContainer  width={'100%'} height={500}>
            <RadialBarChart 
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
				innerRadius="10%" 
				outerRadius="140%" 
				data={props.data} 
				startAngle={0} 
				endAngle={355}
				>
				<Legend iconSize={10} width={120} height={140} layout='horizontal' verticalAlign='top' align="right" />
				<RadialBar minAngle={50} width={1500} clockWise={true} dataKey='value' name='Apps' nameKey='name' />
				<Tooltip />
			</RadialBarChart>
        </ResponsiveContainer>
        {/* </div> */}
      </>
    );
  
}


export default AndroidVersions;