import React from 'react'
import "./SearchBar.css"

export default function SearchBar() {
    return (
        <section className="filter-container">
            <form className="filter-form">
                <input placeholder="Input"></input>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
