import React from 'react';

const Renatalnav = ({rental}) => {
    return (
        <div className="col-xl-12 col-lg-12 col-md-12">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                   
                    
                    <li className="breadcrumb-item active" aria-current="page">
                        { rental.title}
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default Renatalnav;
