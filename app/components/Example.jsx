var React = require('react');

// var Example = React.createClass({
//     render : function(){
//         return(
//             <h3>Example component.</h3>
//         );
//     }
// });

var Example = (props) => {
        return(
            <div>
                <h3>Example component.</h3>
                <p>welcome to example!!!!</p> 
            </div>
           
         );
}

module.exports = Example;