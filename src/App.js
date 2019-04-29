import React, { Component } from 'react';
import './App.css';

class JsDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    static async handleClick() {
        const response = await fetch("http://localhost:3000");
        const reader = response.body.getReader();

        let result = await reader.read();
        let total = 0;

        while(!result.done) {
            const value = result.value;

            total += value.length;

            console.log("Received Chunk", value);

            result = await reader.read();
        }

        console.log("Total received ", total);
    }

    render() {

        return (
            <>
                <button
                    onClick={JsDemo.handleClick}
                    >
                    Response Size
                </button>
            </>
        );
    }
}








class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: "Home"
        };
    }


    handleClick = event => {
        this.setState({
            clicked: event.target.innerHTML
        });
    };

    render() {
        const clicked = this.state.clicked;
        const active = "Header-menu Header-active";
        const inactive = "Header-menu";
        const homeClass = clicked === "Home" ? active : inactive;
        const newsClass = clicked === "News" ? active : inactive;
        const contactClass = clicked === "Contact" ? active : inactive;

        return (
            <>
            <MenuButton
                title="Home"
                className={homeClass}
                onClick={this.handleClick}
            />

            <MenuButton
        title="News"
        className={newsClass}
        onClick={this.handleClick}
        />

        <MenuButton
            title="Contact"
            className={contactClass}
            onClick={this.handleClick}
        />
        </>
        );
    }
}

class MenuButton extends Component {
    render() {
        return (
            <div
                className={this.props.className}
                onClick={this.props.onClick}
            >
                {this.props.title}
            </div>
        );
    }
}

class SubHeader extends Component {
    render() {
        return (
            <div className={this.props.className}/>
        );
    }
}

class Body extends Component {
    render() {
        return (
            <div
                className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

// Works through resolutions as low as 225x225

// Closer to a real app: disabled general text highlighting and
// disabled default context menu

class App extends Component {

  render() {

    return (
      <div className="App"
      onContextMenu={(event) => event.preventDefault()}>
        <header className="App-header">
            <NavigationBar/>
        </header>
          <SubHeader className="sub-Header" />
          <Body className="Body">
              <JsDemo />
          </Body>
          <footer className="Footer"/>
      </div>
    );
  }
}

export default App;