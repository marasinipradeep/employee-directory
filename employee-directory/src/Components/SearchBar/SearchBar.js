import React  from 'react'
import "./SearchBar.css"

export default function SearchBar (props) {
   
        return (

            <section className="filter-container">
                <form className="filter-form">
                    <input onChange={props.handleSearch}></input>
                </form>
            </section>


        )
    }

