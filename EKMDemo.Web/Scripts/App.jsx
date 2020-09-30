class Button extends React.Component {
    handleClick = () => this.props.onClickFunction(this.props.increment);
    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                +{this.props.increment}
            </button>
        );
    }
}

class ButtonMultiply extends React.Component {
    handleClick = () => this.props.onClickFunction(this.props.factor);
    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                x{this.props.factor}
            </button>
        );
    }
}

class ResetButton extends React.Component {
    handleClick = () => this.props.onClickFunction();
    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                Reset
            </button>
        );
    }
}

class Display extends React.Component {
    render() {
        return (
            <div>Counter: {this.props.message}</div>
        );
    }
}


class Counter extends React.Component {
    state = {
        counter: 0,
    };
    incrementCounter = (incrementValue) => {
        this.setState({ counter: this.state.counter+incrementValue });
    }
    multiplyCounter = (incrementValue) => {
        this.setState({ counter: this.state.counter*incrementValue });
    }
    reset = () => {
        this.setState({ counter:0});
    }
    render() {
        return (
            <>
                <Display message={this.state.counter} />
                <Button onClickFunction={this.incrementCounter} increment={1} />
                <Button onClickFunction={this.incrementCounter} increment={5} />
                <Button onClickFunction={this.incrementCounter} increment={10} />
                <Button onClickFunction={this.incrementCounter} increment={100} />
                <ButtonMultiply onClickFunction={this.multiplyCounter} factor={2} />
                <ResetButton onClickFunction={this.reset} />
            </>
        );
    }
}

ReactDOM.render(
    <>
        <Counter />
    </>,
    document.getElementById('content'),
);