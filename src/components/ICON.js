import React, {Component} from 'react';

class ICON extends Component {
    render() {
        let {style} = this.props;

        return (
            <i className={style}></i>
        );
    }
}

export default ICON;