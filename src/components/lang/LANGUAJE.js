import React, {Component} from 'react';
import './language.css';

class LANGUAJE extends Component {
    constructor(props){
        super(props);

        this.state = {
            season : "spring"
        }

    }
    render() {
        let {lang} = this.props;

        return (
            <div className="select_container">
                <select onChange={this.update.bind(this)} className={this.state.season.toLowerCase() === "spring" ? "text-warning" : "text-primary"}>
                    {lang.map(i => {
                        return <option> {i.toUpperCase()} </option>
                    })}
                </select>
            </div>
        );
    }

    update(e){
        this.setState({
            season : e.target.value
        })
    }
}

export default LANGUAJE;