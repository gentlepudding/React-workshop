import React from 'react';
import { Profile } from './Profile';
import { Stories } from './Stories';
import { Images } from './Images';

export class Content extends React.Component {
    render() {
        return (
            <div className = 'content'>
                <Profile />
                <Stories />
                <Images />
            </div>
        );
    }
}
