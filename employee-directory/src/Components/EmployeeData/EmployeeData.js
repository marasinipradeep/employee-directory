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
        isFemale: false,
        isName: false,
        sortName: data
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

    //Filter if sort by name check box is clicked
    handleSortByName = (event) => {
        this.setState({ isName: event.target.checked })
        console.log(this.state.isName)
        if (event.target.checked) {
            console.log("inside if ")
            this.state.data.sort(function (a, b) {
                var nameA = a.name.toLowerCase()
                var nameB = b.name.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1
                else if (nameA > nameB)
                    return 1
                else return 0 //default return value (no sorting)
            })
         }
        //else if(!event.target.checked){

        //     this.state.data.sort(function (a, b) {
        //         var nameA = a.name.toLowerCase()
        //         var nameB = b.name.toLowerCase()
        //         if (nameB < nameA) //sort string ascending
        //             return -1
        //         else if (nameB > nameA)
        //             return 1
        //         else return 0 //default return value (no sorting)
        //     })

        // }
    }

    //Filter if sort by descending name check box is clicked
    handleSortByDecendingName = (event) => {
        this.setState({ isName: event.target.checked })
        console.log(this.state.isName)
        if(event.target.checked){
            this.state.data.sort(function (a, b) {
                var nameA = a.name.toLowerCase()
                var nameB = b.name.toLowerCase()
                if (nameB < nameA) //sort string ascending
                    return -1
                else if (nameB > nameA)
                    return 1
                else return 0 //default return value (no sorting)
            })

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
                    handleSortByName={this.handleSortByName.bind(this)}
                    handleSortByDecendingName={this.handleSortByDecendingName.bind(this)}
                />
                <TableHeading  handleSortByName={this.handleSortByName.bind(this)}/>
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
