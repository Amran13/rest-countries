import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const [found, setFound] = useState([])
    const data = useLoaderData();
    console.log(data)
    const handleSearch = (event) => {
        event.preventDefault()
        const searchText = event.target.search.value;
        const filteredData = data.filter(item => item.name.common === searchText)
        setFound(filteredData)
        console.log('filteredDAta',filteredData)
    }
    console.log('data found', found)
    return (
        <div className='space-y-4'>
            <form onSubmit={handleSearch}>
                <input name='search' type="text" placeholder="Search" className="input input-bordered w-60 md:w-auto" />
                <button className='btn btn-primary'>Search</button>
            </form>

            <h2>Countries {data.length} </h2>
            <div>
                
            </div>

            <div>
                
                {
                    found.length > 0 ? <Link className='m-4 border text-2xl font-bold' to={found[0].cca2}> {found[0].name.common} </Link> : data.map(item => <Link key={item.cca2} to={`/countries/${item.cca2}`} className='m-4 border'> {item.name.common} </Link>)  
                }
                
            </div>
        </div>
    );
};

export default Countries;