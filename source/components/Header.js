import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div className = 'header'>
                <div className = 'logo'></div>
                <input 
                    placeholder = 'Search'
                    type = 'text'
                />
                <div className = 'nav'>
                    <div className = 'explore'></div>
                    <div className = 'likes'></div>
                    <div className = 'settings'></div>
                </div>
            </div>

        );
    }
}
