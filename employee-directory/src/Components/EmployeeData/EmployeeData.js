import React, { Component } from 'react'
import EmployeeTitles from "../EmployeeTitles/EmployeeTitles"
import TableHeading from "../TableHeading/TableHeading"
import data from "../../data"

import SearchBar from "../SearchBar/SearchBar"

export default class EmployeeData extends Component {

    //Setting this.state.data tot the data json array
    state={
        data
    }

    handleSearch=()=>{
        console.log("pradeep")
    }

    //Map over this.state.friends and render a EmployeeTitleComponent for each employeee object
    render() {
        console.log(this.state)
        return (
            <div>
                 <SearchBar 
                 data={this.state.data}
                 handleSearch={this.handleSearch}/>
                <TableHeading/>
                {this.state.data.map(data=>(
                    <EmployeeTitles
                    id={data.id}
                    image={data.image}
                    name={data.name}
                    phone={data.phone}
                    email={data.email}
                    birthday={data.DOB}
                    />

                )
                
                )}
                
            </div>
        )
    }
}
