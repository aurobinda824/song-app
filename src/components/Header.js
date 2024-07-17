import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return (
            <div className="header light sec">
                <input placeholder="Enter Song Name..." type='text' className="input"/>
                <button type="submit" className="submit" onClick={this.props.searchSongs}>Search</button>
                <button type='submit' className="login" >Log In</button>
            </div>
        )
    }
}

export default Header;