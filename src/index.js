import React from 'react';
import ReactDOM from 'react-dom';

// for some reason I thought I could do it like this...(below) //

// function greeting(user){
//     const divContainer = () =>{
//         return (
//             <div className="container">
//                 <h1>Hello!{user.name}</h1>
//                 <h2 className='text-muted'>Your lucky number is: {User.luckyNumber}</h2>
//             </div>
//         );
//     }
// }
    const greeting = sudip =>{
        return (
            <div className="container">
                <h1>Hello {sudip.name}!</h1>
                <h2 className='text-muted'>Your lucky number is: {sudip.randomNumber()}</h2>
            </div>
        );
    };

class User{
    constructor(name){
        this.name = name;
        // this.luckyNumber = luckyNumber;
    }
    randomNumber(){
        //returns random number between 1-1000
        this.luckyNumber = Math.floor((Math.random()*1000) + 1);
        return this.luckyNumber;
    }
}

const sudip = new User('Sudip');

ReactDOM.render(
    greeting(sudip),
    document.getElementById('root')
);