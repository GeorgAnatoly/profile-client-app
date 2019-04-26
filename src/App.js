import React, { Component } from 'react';
import './App.css';

class JsDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            string: "Please visit Microsoft!",
            input: "",
            output: ""
        };
    }
// TODO use replace() method on user input string and allow user
    // to select check boxes for case insensitive - use reg ex /i
    // as well as global match - use reg ex /g
    render() {

        return (
            <>
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
                {this.props.content}
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
    constructor(props) {
        super(props);

        this.state = {
            homeButtonClass: "Header-menu Header-active",
            newsButtonClass: "Header-menu",
            contactClass: "Header-menu"
        };
    }

    homeClick = () => {
        this.setState({
            homeButtonClass: "Header-menu Header-active",
            newsButtonClass: "Header-menu",
            contactClass: "Header-menu"
        });

        document.title = "Symbosoft - Home";
    };

    newsClick = () => {
        this.setState({
            homeButtonClass: "Header-menu",
            newsButtonClass: "Header-menu Header-active",
            contactClass: "Header-menu"
        });

        document.title = "Symbosoft - News";
    };

    contactClick = () => {
        this.setState({
            homeButtonClass: "Header-menu",
            newsButtonClass: "Header-menu",
            contactClass: "Header-menu Header-active"
        });

        document.title = "Symbosoft - Contact";
    };

  render() {
    return (
      <div className="App"
      onContextMenu={(event) => event.preventDefault()}>
        <header className="App-header">
            <MenuButton content="Home"
            className={this.state.homeButtonClass}
            onClick={this.homeClick}/>
            <MenuButton content="News"
                        className={this.state.newsButtonClass}
                        onClick={this.newsClick}/>
                        <MenuButton
                            content="Contact"
                            className={this.state.contactClass}
                            onClick={this.contactClick}/>
        </header>
          <SubHeader className="sub-Header" />
          <Body className="Body">
              <JsDemo/>
          </Body>
          <footer className="Footer"/>
      </div>
    );
  }
}

export default App;