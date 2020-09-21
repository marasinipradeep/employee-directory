import React from 'react'


import Heading from "../Heading/Heading"
import SearchBar from "../SearchBar/SearchBar"
import EmployeeData from "../EmployeeData/EmployeeData"

export default function EmployeeContainer() {
    return (
        <div>
            <Heading />
            <SearchBar />
            <EmployeeData />
        </div>
    )
}
