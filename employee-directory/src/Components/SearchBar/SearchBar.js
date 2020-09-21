import React from 'react'
import "./SearchBar.css"

export default function SearchBar(props) {

    return (

        <section className="filter-container">
            <form className="filter-form form-group">

                <input onChange={props.handleSearch} type="text"></input>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="male" onChange={props.handleMaleCheck} />
                    <label className="form-check-label" >Male</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="female" onClick={props.handleFemaleCheck} />
                    <label className="form-check-label">Female</label>
                </div>

            </form>
        </section>


    )
}

