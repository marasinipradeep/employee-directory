import React, { Component } from 'react'
import EmployeeTitles from "../EmployeeTitles/EmployeeTitles"
import TableHeading from "../TableHeading/TableHeading"
import data from "../../data"

import SearchBar from "../SearchBar/SearchBar"



export default class EmployeeData extends Component {

    //Setting this.state.data tot the data json array
    state = {
        data,
        search: "",
        isMale: false,
        isFemale: false

    }

    //Search by Input
    handleSearch = (event) => {
        this.setState({ search: event.target.value })
    }

    //Filter if Male check box is clicked
    handleMaleCheck = (event) => {

        this.setState({ isMale: event.target.checked })

        if (!this.state.isMale) {

            let filterByGender = this.state.data.filter(gender => {
                return gender.gender === "male"
            })
            this.setState({ data: filterByGender })
        } else {

            this.setState({ data })

        }
    }

    //Filter if Female check box is clicked
    handleFemaleCheck = (event) => {
        this.setState({ isFemale: event.target.checked })

        if (!this.state.isFemale) {
            let filterByGender = this.state.data.filter(gender => {
                return gender.gender === "female"
            })
            this.setState({ data: filterByGender })
        } else {
            this.setState({ data })
        }
    }

    render() {

        let filterName = this.state.data.filter((name) => {
            return name.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })

        return (
            <div>
                <SearchBar
                    data={this.state.data}
                    handleSearch={this.handleSearch.bind(this)}
                    handleMaleCheck={this.handleMaleCheck.bind(this)}
                    handleFemaleCheck={this.handleFemaleCheck.bind(this)}
                />
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
