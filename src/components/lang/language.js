import React, {Component} from 'react';
import './language.css';

class Language extends Component {
    render() {
        let {lang} = this.props;

        return (
            <div className="select_container">
                <select>
                    {this.props.lang.map(i => {
                        return <option> {i} </option>
                    })}
                </select>
            </div>
        );
    }
}

export default Language;