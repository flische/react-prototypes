import React from 'react';

function Table() {
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>    
            <tbody>
                <tr>
                    <td>Bruce Wayne</td>
                    <td>Criminal Justice</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Barry Allen</td>
                    <td>Forensic Science</td>
                    <td>98</td>
                </tr>
                <tr>
                    <td>Clark Kent</td>
                    <td>Creative Writing</td>
                    <td>86</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;