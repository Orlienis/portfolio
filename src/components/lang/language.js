import React, {Component} from 'react';
import './language.css';

class Language extends Component {
    render() {
        let {lang} = this.props;

        return (
            <div>
                <h3 className={'text'}>Language Section</h3>
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