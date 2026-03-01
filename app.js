import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = ()=> (
    <h1> React Header </h1>
)

// this is also valid 
const Title2 = function(){
    return (<h1> component title 2</h1>);
}

const elem = <span> i am an elemnet inside react elemet </span>
const title = (
    <h2>    
        Hey i am just a react elemets which ultimately is a Java script object
        {elem}
    </h2>
)

// This is called component composition:-  adding/ rendering  a  component inside another component 

//  <Cpom name/> this is how babel understands it 
const ContentPage = () => (
    <div> 
        <Title/>
        <Title2/>
        <Title2></Title2>
        {title} 
        {console.log('i am a normal javascript')}
        {2+2}

        <p> let's learn react </p>
                      </div>
)

// anytjing inside {} will be considered as javscript 
// this {} jsx sanitises it first. i.e. it stops the Cross Side Scripting (XSS) attacks . 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ContentPage/>);