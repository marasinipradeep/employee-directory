import React, { Component } from 'react'

import "./EmployeeTitles.css"
import data from "../../data.json"

export default class EmployeeTitles extends Component {

    //Setting this.state.data tot the data json array
    state={
        data
    }

    //Map over this.state.friends and render a friendcard
    render() {
        return (
            <div>
                <table class="table">
                    <thead class="thead-dark">
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
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        )
    }
}
