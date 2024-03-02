import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Country = () => {
    const data = useLoaderData();
    const navigate = useNavigate()
    const { name, capital, population, area, flags } = data[0]
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-16">
            <figure className="px-10 pt-10">
                <img src={flags.png} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {name.common} </h2>
                <p>Capital :  {capital} </p>
                <p> Population : {population} </p>
                <p>Area : {area} </p>
                <div className="card-actions">
                    <Link to="/countries"><button className="btn btn-primary">Go Back</button></Link>
                    <button onClick={() => navigate(-1)}>BAck</button>
                </div>
            </div>
        </div>
    );
};

export default Country;