import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    
    /* Use the map() function to render multiple Blocks! */
    const [block, setBlock] = useState([]); // TODO: edit this variable
    const posts = block.map((color) => <Block color={color}></Block>)
    return (
        <div>
            <Menu Post={(color) => setBlock(block => [color, ...block])} ></Menu>
            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;