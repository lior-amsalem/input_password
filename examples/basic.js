import PasswordInput from '../src/input_password';

class MyApp extends React.Component {

    exampleOnChange() {
        console.log("custom onchange")
    }

    render() {
        return (
            <div className="widget-wrapper">
                <h1>Basic Password Input</h1>
                <PasswordInput
                    onChange={this.exampleOnChange}/>
            </div>
        )
    }
}

ReactDOM.render(
    <MyApp/>,
    document.querySelector('.MyApp')
);
