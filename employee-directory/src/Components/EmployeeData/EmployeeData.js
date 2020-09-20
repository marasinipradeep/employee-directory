import React, { Component } from 'react'
import EmployeeTitles from "../EmployeeTitles/EmployeeTitles"
import data from "../../data.json"

export default class EmployeeData extends Component {

    //Setting this.state.data tot the data json array
    state={
        data
    }

    //Map over this.state.friends and render a EmployeeTitleComponent for each employeee object
    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.data.map(data=>(
                    <EmployeeTitles
                    id={data.id}
                    image={data.image}
                    name={data.name}
                    phone={data.phone}
                    email={data.email}
                    birthday={data.DOB}
                    />

                    

                ))}
                
            </div>
        )
    }
}
