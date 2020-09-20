import React from 'react'
import "./EmployeeTitles.css"



export default function EmployeeTitles(props) {

    console.log(props)
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <img src={props.image}></img>
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
