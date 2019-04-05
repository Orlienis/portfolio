import React, {Component} from 'react';
import ITEM from "./ITEM";

class LIST extends Component {
    render() {
        let {items} = this.props;

        return (
            <ul>
                {
                    items.map(i => {
                        return (
                            <ITEM text={i}/>
                        )
                    })
                }
            </ul>
        );
    }
}

export default LIST;