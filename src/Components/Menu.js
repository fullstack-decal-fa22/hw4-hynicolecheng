/* Add any imports you think you might need here! */
import Color from './Color.js';



const Menu = (props) => { 
    return ( 
      <div className="colorOptions">
          <Color color="red" handleClick={props.Post}></Color>
          <Color color="pink" handleClick={props.Post}></Color>
          <Color color="blue" handleClick={props.Post}></Color>
          <Color color="green" handleClick={props.Post}></Color>
      </div>
    );
}

export default Menu;