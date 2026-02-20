const heading = React.createElement("h1",
    {
id:'heading', class:' pt-4 font-semibold'
},"Hello world from React!");
/*
<div class="parent">
    <div class="child">
        <h1>I am a H1 tag</h1>
        <h2> i AM A H2 Tag</h2>
    </div>
    <div class="child">
        <h1>I am a H1 tag</h1>
        <h2> i AM A H2 Tag</h2>
    </div>
</div>

*/

const nestedEle = React.createElement("div",{class:"parent"},  
    [React.createElement("div",{class:"child"},  
        [React.createElement("h1",{},"I am a H1 tag"), React.createElement("h2",{},"I am a H2 Tag")]), React.createElement("div",{class:"child2"},   [React.createElement("h1",{},"This is h1 tag of child 2 "), React.createElement("h2",{},"This is h2 tag of child2")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("hello"));
root.render(nestedEle);