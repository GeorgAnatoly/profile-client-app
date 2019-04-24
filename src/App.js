import React, { Component } from 'react';
import './App.css';

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
                className={this.props.className}/>
        );
    }
}

// Works with smart watches through resolutions as low as 225x225

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
      <div className="App">
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
          <Body className="Body"/>
      </div>
    );
  }
}

export default App;