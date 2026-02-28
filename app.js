import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX is transpilled before it reaches JS ==> Trnaspiling is done by BAbel managed by parcel
// JSX ==>  Babel transpiles it into React.createElement ==> ReactElement.JS object ==> HTML (render)

//React Element
const JsxHeader = (<h1 className=
"heading"
> hellow from Jsx Window</h1>);
const root = ReactDOM.createRoot(document.getElementById('root'))

const HeaderComp = ()=> JsxHeader;
const Headercomp2 = () => <h1 className="heading">Hi from comp </h1>;

const HeaderComp3 = () =>(
    <h1 className="head">
        H from comp3 </h1>
);

const Headercomp4 =()=> {
 <h1 className="heade" > hello from5</h1>;
}

const HeaderComp5=() => {

return  <h1 className = "Head" >Hellow from comp 5</h1>;
}


// all the headercomp are same.


const NestedJsx =() =>{
    <div>
        <h1 className='nested'   >
            Hello guys 
        </h1>
    </div>
}

// or 

const Nested2 = () => (
    <div id="container">
        <h1>
            hlw from nested 2 
        </h1>
    </div>
);

root.render(JsxHeader)