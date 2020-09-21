import React from 'react'
import "./SearchBar.css"

export default function SearchBar(props) {

    return (

        <section className="filter-container">
            <form className="filter-form form-group">

                <input onChange={props.handleSearch} type="text"></input>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="male" onClick={props.handleMaleCheck}/>
                    <label class="form-check-label" for="male">Male</label>
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="female" onClick={props.handleFemaleCheck} />
                   <label class="form-check-label" for="female">Female</label>
                </div>

            </form>
        </section>


    )
}

