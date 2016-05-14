import InlineSVG from 'svg-inline-react';

import './input_password.scss';

const eye = require("./eye.svg");

class PasswordInput extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleToggleInputMode = this.handleToggleInputMode.bind(this);

        this.state = {
            val: this.props.val,
            reveal: this.props.reveal
        };
    }

    handleToggleInputMode() {
        let newState = !this.state.reveal;

        this.setState({reveal: newState});
    }

    handleChange(e) {
        this.setState({val: e.target.value});

        // trigger the props onChange event - pass by the developer
        this.props.onChange(e);
    }

    render() {

        const {
            inputProps,
            revealActive
        } = this.props;

        let val =  this.state.val;
        let reveal =  this.state.reveal;

        let iconCls = (reveal) ? " active " : "";

        let revealActiveBoolean = ((revealActive == "true") || (revealActive)) ? true : false;

        return (
            <div className="input-password-wrapper">
                <input type={ reveal ? 'text' : 'password' }
                    {...inputProps}
                    defaultValue={val}
                    onChange={ this.handleChange }
                    className='password-input'/>

                    {(revealActiveBoolean == true) &&
                        <InlineSVG src={eye}
                        onClick={this.handleToggleInputMode}
                        className={iconCls + " icon-eye "} />}
            </div>
        )
    }
}

PasswordInput.defaultProps = {
    val: '',            // inital password
    onChange: () => {}, // each change to the input
    revealActive: true, // disable this functionality
    reveal: false       // control the inital state of reveal
}

export default PasswordInput;