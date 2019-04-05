import React, {Component} from 'react';

class LINK extends Component {

    render() {
        let {icon, text, href, style} = this.props;

        return (
            <a href={href} className={style}>
                {icon}{text}
            </a>
        );
    }
}

export default LINK;