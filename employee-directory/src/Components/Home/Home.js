import React, { Component } from 'react'

import Heading from "../Heading/Heading"
import SearchBar from "../SearchBar/SearchBar"
import EmployeeData from "../EmployeeData/EmployeeData"

export default class Home extends Component {
    render() {
        return (
            <div>
              <Heading/>
              <SearchBar/>
              <EmployeeData/>
            </div>
        )
    }
}
