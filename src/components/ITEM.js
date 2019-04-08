import React, {Component} from 'react';
import LINK from "./LINK";
import ICON from "./ICON";

class Item extends Component {
    /*
    * <Item
            icon={"fas fa-rss"}
            text={"Hello World 2"}
            link = {"www.goo.com"}
            linkStyle = {"text-danger"}
            style={"active"}
        />
    */
    render() {
        let {icon,text,link,linkStyle,style} = this.props;
        return (
            <li className={style || null}>
                <LINK href={link} text={text} icon={<ICON style={icon}/> || null} style={linkStyle} />
            </li>
        );
    }
}

export default Item;