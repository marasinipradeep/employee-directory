import React, { Component } from 'react'

import Heading from "../Heading/Heading"
import EmployeeContainer from "../EmployeeContainer/EmployeeContainer"

export default class Home extends Component {
    render() {
        return (
            <div>
              <Heading/>
              <EmployeeContainer/>
            </div>
        )
    }
}
