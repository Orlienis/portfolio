import React, {Component} from 'react';
import ITEM from "./ITEM";

class LIST extends Component {
    render() {
        let {items,header} = this.props;

        return (
            <ul className={"list-unstyled"}>
                {header != "" ? <p>{header}</p> : null}
                {
                    items.map((i,key) => {
                        return (
                            <ITEM
                                key={key}
                                text={i.text.charAt(0).toUpperCase() + i.text.slice(1).toLowerCase()}
                                icon={i.icon}
                                link = {i.link}
                                style={i.style}
                            />
                        )
                    })
                }
            </ul>
        );
    }
}

export default LIST;