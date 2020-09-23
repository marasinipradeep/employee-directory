import React from 'react'
import "./SearchBar.css"

export default function SearchBar(props) {

    return (
       
            <section className="filter-container">
                <form className="filter-form form-group ">
                    
                    <div className="row">
                    <p className="col-md-6">Sort By : </p>
                    
                    <input onChange={props.handleSearch} type="text"></input>
                    </div>

                    <div className="">
                    <div className="form-check">
                        <label className="form-check-label" >Male:</label>
                        <input type="checkbox" className="form-check-input" id="male" onChange={props.handleMaleCheck} />

                    </div>

                    <div className="form-check">
                        <label className="form-check-label">Female :</label>
                        <input type="checkbox" className="form-check-input" id="female" onChange={props.handleFemaleCheck} />

                    </div>

                    <div className="form-check">
                        <label className="form-check-label">Ascending Name :</label>
                        <input type="checkbox" className="form-check-input " id="sort" onChange={props.handleSortByName} />

                    </div>

                    <div className="form-check">
                        <label className="form-check-label">Descending Name :</label>
                        <input type="checkbox" className="form-check-input " id="sortDecend" onChange={props.handleSortByDecendingName} />

                    </div>
                    </div>

                </form>
            </section>


    )
}

