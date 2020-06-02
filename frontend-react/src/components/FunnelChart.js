import React, { useState, useEffect } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, ComposedChart, Area, LabelList, Funnel, FunnelChart
  } from 'recharts';



const OurFunnelChart = (props) => {
  
    return (
      <>
        <ResponsiveContainer width={'100%'} height={500}>
        <FunnelChart
          width="50" >
            <Tooltip />
            <Funnel
                dataKey="value"
                data={props.data}
                isAnimationActive
              
            >
                <LabelList position="right" fill="#000" stroke="none" dataKey="value" />
                <LabelList dataKey="name" fill='#000' position="center" />
            </Funnel>
        </FunnelChart>
        </ResponsiveContainer>
      </>
    );
  
}


export default OurFunnelChart;