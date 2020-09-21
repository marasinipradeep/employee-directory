import React, { Component } from 'react'
import EmployeeTitles from "../EmployeeTitles/EmployeeTitles"
import TableHeading from "../TableHeading/TableHeading"
import data from "../../data"

import SearchBar from "../SearchBar/SearchBar"



export default class EmployeeData extends Component {

    //Setting this.state.data tot the data json array
    state = {
        data,
        search:""
    }



    handleSearch = (event) => {

        this.setState({search:event.target.value})
    }

    //Map over this.state.friends and render a EmployeeTitleComponent for each employeee object
    render() {

        let filterName = this.state.data.filter((name) => {
            console.log("filtername")
            return name.name.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1;
        })

        return (
            <div>
                <SearchBar
                    data={this.state.data}
                    handleSearch={this.handleSearch.bind(this)} />
                <TableHeading />
                {filterName.map(data => (
                    <EmployeeTitles
                        key={data.id}
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
