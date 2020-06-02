import React, { useState, useEffect } from "react";
import {
    Treemap, ResponsiveContainer, Tooltip, LabelList
  } from 'recharts';

const TopByCategory = (props) => {
  
    return (
      <>
      <ResponsiveContainer width={'100%'} height={500}>
            <Treemap
            data={props.data}
            dataKey="value"
            nameKey='name'
            ratio={4 / 3}
            stroke="#fff"
            fill="#3182FC"
            unit = '0 M'
            isAnimationActive = {false}
            scaleToFit = {true}
            >
                    <Tooltip />
            </Treemap>
        
        </ResponsiveContainer>
      </>
    );
  
}


export default TopByCategory;