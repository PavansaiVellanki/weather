import { useState } from 'react';
import '../component-styles/SearchBar.css';

function SearchBar({onSearch}) {

    const [city, setCity] = useState("");

    const changeHandler = (event) => {
        setCity(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        onSearch(city);
        setCity("");
    }
    return (
        <div className='weather-info'>
            <h1 className='app-title'>Weather.info</h1>
            <form className="input-section" onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} value={city} placeholder="Location..."/>
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;