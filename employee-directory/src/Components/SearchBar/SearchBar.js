import React from 'react'
import "./SearchBar.css"

export default function SearchBar(props) {

    return (

        <section className="filter-container">
            <form className="filter-form form-group">

                <input onChange={props.handleSearch} type="text"></input>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="male" />
                    <label class="form-check-label" for="male">Check me out</label>
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="female" />
                   <label class="form-check-label" for="female">Check me out</label>
                </div>

            </form>
        </section>


    )
}

