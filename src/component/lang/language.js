import React, {Component} from 'react';

class Language extends Component {
    render() {
        let {lang} = this.props;

        return (
            <div>
                <h3>Language Section</h3>
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