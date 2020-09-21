import React from 'react'
import "./EmployeeTitles.css"

export default function EmployeeTitles(props) {

    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td><img src={props.image}></img></td>
                        <td>{props.name}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                        <td>{props.birthday}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
