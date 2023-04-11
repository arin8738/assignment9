import React from 'react';

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
  } from "recharts";
  
  const data = [
    {
      name: "Assignment 1",
      Marks: 60,
      Marks: 60,
      Marks: 60,
      Marks: 60,
    },
    {
      name: "Assignment 2",
      Marks: 60,
      Marks: 60,
      Marks: 60,
      Marks: 60,
    },
    {
      name: "Assignment 3",
      Marks: 60,
      Marks: 60,
      Marks: 60,
      Marks: 60,
    },
    {
      name: "Assignment 4",
      Marks: 59,
      Marks: 59,
      Marks: 59,
      Marks: 59,
    },
    {
      name: "Assignment 5",
      Marks: 59,
      Marks: 59,
      Marks: 59,
      Marks: 59,
    },
    {
      name: "Assignment 6",
      Marks: 59,
      Marks: 59,
      Marks: 59,
      Marks: 59,
    },
    {
      name: "Assignment 7",
      Marks: 59,
      Marks: 59,
      Marks: 59,
      Marks: 59,
    },
    {
      name: "Assignment 8",
      Marks: 60,
      Marks: 60,
      Marks: 60,
      Marks: 60,
    },
  ];

const Statistics = () => {
    return (
        <div>
            <div className="flex justify-center mt-16">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="Marks"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="Marks" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="Marks" stroke="#ff7300" />
            <Scatter dataKey="Marks" fill="red" />
          </ComposedChart>
        </div>
        <h3 className="text-center my-10 font-bold text-2xl text-blue-500">All Assignments marks</h3>

        </div>
    );
};

export default Statistics;