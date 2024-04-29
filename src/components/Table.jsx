import React from "react";
import './Table.css'
function Table(props)
{
    console.log(props);
    const tableDataJsx = props.studentsData.map((row) => (
        <tr> 
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.status}</td>
            <td>{row.enrolledIn}</td>
            <td>{row.marks}</td>
        </tr>
    ))
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Enrolled In</th>
                    <th>Marks</th>
                </tr>
                {tableDataJsx}
            </table>
        </div>
    )
}
export default Table;