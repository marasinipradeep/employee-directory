import React, { Component } from 'react'

import Heading from "../Heading/Heading"
import SearchBar from "../SearchBar/SearchBar"
import EmployeeTitles from "../EmployeeTitles/EmployeeTitles"

export default class Home extends Component {
    render() {
        return (
            <div>
              <Heading/>
              <SearchBar/>
              <EmployeeTitles/>
            </div>
        )
    }
}
