import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2 className='my-4'>Total Countries : {data.length}</h2>
            {
                data.map(country => <Link key={country.cca2} to={`/countries/${country.cca2}`}> <button className='m-4'> {country.name.common} </button> </Link>)
            }
        </div>
    );
};

export default Countries;