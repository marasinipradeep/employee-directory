import React, { Component } from 'react'
import EmployeeTitles from "../EmployeeTitles/EmployeeTitles"
import TableHeading from "../TableHeading/TableHeading"
import data from "../../data"

import SearchBar from "../SearchBar/SearchBar"



export default class EmployeeData extends Component {

    //Setting this.state.data tot the data json array
    state = {
        data,
        search:"",
        isMale:"",
        isFemale:""
    }



    handleSearch = (event) => {
        this.setState({search:event.target.value})
    }
    handleMaleCheck=()=>{
        console.log("On male check box clicked")
        let FilterByGender = this.state.data.filter(gender=>{
            return gender.gender==="male"
        })
        this.setState({data:FilterByGender})
    }

    handleFemaleCheck=()=>{
        console.log("On female check box clicked")
    }

      render() {

        let filterName = this.state.data.filter((name) => {
            return name.name.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1;
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
