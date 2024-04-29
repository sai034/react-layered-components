import React, { useContext } from "react";
import './Table.css'
import { StudentDataContext } from "../App";

function TableWithContext()
{
    const studentsData = useContext(StudentDataContext)
    console.log({studentsData})
    const tableDataJsx = studentsData.map((row) => (
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
export default TableWithContext;