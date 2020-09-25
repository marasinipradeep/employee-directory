import React from 'react'
import "./SearchBar.css"

export default function SearchBar(props) {

    return (

        <section className="filter-container">
            <form className="filter-form form-group ">

                <div className="row">
                    <h4 className="col-md-12">Filter By Name: </h4>
                    <input onChange={props.handleSearch} type="text"></input>
                </div>

               
               <div className="row">
                    <div className="form-check col-lg-6">
                       
                        <input type="checkbox" className="form-check-input" id="male" onChange={props.handleMaleCheck} />
                        <p className="form-check-label" >Male:</p>
                    </div>
                    

                    <div className="form-check col-lg-6">
                        
                        <input type="checkbox" className="form-check-input" id="female" onChange={props.handleFemaleCheck} />
                        <p className="form-check-label">Female:</p>
                    </div>
                    </div>



            </form>
        </section>


    )
}

