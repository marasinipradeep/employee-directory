import React, { Component } from 'react'
import "./SearchBar.css"
import data from "../../data"
import EmployeeTitles from "../EmployeeTitles/EmployeeTitles"

export default class SearchBar extends Component {

    state = {
        data: null
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({
            data: keyword
        })
    }
    render() {
        return (

            <section className="filter-container">
                <form className="filter-form">
                    <input placeholder="Input" onChange={(e) => this.searchSpace(e)}></input>
                    <button type="submit">Submit</button>
                </form>
            </section>


        )
    }
}
