import React from 'react';
import avatar from '../theme/assets/avatars/nasa.jpg';

export class Profile extends React.Component {
    render() {
        return (
            <div className = 'profile'>
                <img className = 'avatar'
                    src = { avatar }
                />
                <div className = 'main'>
                    <span className = 'nickname'>nasa</span>
                    <div className = 'stats'>
                        <div>
                            <span>7.436&nbsp;</span>
                            posts
                        </div>
                        <div>
                            <span>34.9&nbsp;</span>
                            followers
                        </div>
                        <div>
                            <span>74&nbsp;</span>
                            following
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
