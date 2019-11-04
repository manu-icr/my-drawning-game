import React from 'react';
import Typed from 'typed.js';


class TextBlock extends React.Component {

    componentDidMount() {
        const { strings } = this.props;
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: true,
            onComplete: (self) => {
                // remove cursor once done typing
                self.cursor.style.display = "none";
            }
        };
        this.typed = new Typed(this.el, options);
    }
    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <div className="type-wrap textBlock">
                <span
                    style={{ whiteSpace: 'pre' }}
                    ref={(el) => { this.el = el; }}
                />
            </div>
        );
    }
}


export default TextBlock;