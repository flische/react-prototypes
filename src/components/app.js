import React from 'react';
import Table from './table';


function App() {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>

    )
}

export default App;

const students = [
    {
        name: 'Peter Pan',
        course: 'NeverNeverLand',
        grade: 100
    },
    {
        name: 'Captain Hook',
        course: 'Clocks',
        grade: 1
    },
    {
        name: 'Robin Williams',
        course: 'Life',
        grade: 100
    }
];
