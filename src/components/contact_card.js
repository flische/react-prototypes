import React from 'react';

export default props => {
    // return <h1>Full Name: { props.firstName } { props.lastName }</h1>
    const {alias, firstName, lastName, phone, email} = props.contact;
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">
                    {alias}
                </div>
                <div className="card-block">
                    <h4 className="card-title">{firstName + ' ' + lastName}</h4>
                    <div className="card-text">
                        <p><b>Phone: {phone}</b></p>
                        <p><b>Email: {email}</b></p>
                    </div>
                </div>
            </div>
        </div>
    );

}