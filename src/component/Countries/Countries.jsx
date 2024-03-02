import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>Countries {data.length} </h2>
            <div>
                {
                    data.map(item => <Link to={`/countries/${item.cca2}`} className='m-4 border'> {item.name.common} </Link>  )
                }
            </div>
        </div>
    );
};

export default Countries;