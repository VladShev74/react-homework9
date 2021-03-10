import React from 'react';
import Statistics from './Statistics/Statistics';
import statisticalData from './statistical-data.json';

export default function App() {
    return (
        <div>
            <Statistics title="Upload stats" stats={statisticalData}/>
        </div>
    )
}
