var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass(
//   {
//       render : function(){
//           return(
//               <div>
//                 <Nav></Nav>
//                 <h2>this is from main</h2>
//                 {this.props.children}
//               </div>
              
//           );
//       }
//   }  
// );

var Main = (props) => {
     return(
        <div>
        <Nav></Nav>
        <h2>this is from main</h2>
        {props.children}
        </div>
        
    );
}

module.exports = Main;