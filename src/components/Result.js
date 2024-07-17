import React, { Component } from "react";

class Result extends Component
{
    constructor()
    {
        super()
        this.state = {
            data: ''
        }
    }

    componentDidUpdate(prevProps, prevStates)
    {
        if (prevProps.Data !== this.props.Data)
        {
            this.setState({data: this.props.Data})
        }
    }

    convertMillisecondsToTime(milliseconds) 
    {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
      
        return `${minutes} minute${minutes === 1? '' : ''} and ${remainingSeconds} second${remainingSeconds === 1? '' : ''}`;
    }

    displayResult()
    {
        const songs = []
        if (this.state.data !== '')
        {
            for (let i = 0; i < this.state.data['tracks']['items'].length; i++)
            {
                songs.push(<div key={i} className="songs">
                    <img className='thumbnail' src={this.state.data['tracks']['items'][i]['data']['albumOfTrack']['coverArt']['sources'][0]['url']} alt="image"/>
                    <div style={{flexDirection:'column'}}>
                    <p className="name">{this.state.data['tracks']['items'][i]['data']['name']}</p>
                    <p className="artist">.{this.state.data['tracks']['items'][i]['data']['artists']['items'][0]['profile']['name']}</p>
                    <p>{this.convertMillisecondsToTime(this.state.data['tracks']['items'][i]['data']['duration']['totalMilliseconds'])}</p>
                    </div>
                </div>)
            }
        }
        return songs
    }

    render()
    {
        return (
            <div className="result light sec">
                {this.displayResult()}
            </div>
        )
    }
}

export default Result;