import React from 'react';
import images from '../theme/assets/images.json';
import { Image } from './Image';

export class Images extends React.Component {
    render() {
        const imagesJSX = images.map((image) => {
            return (
                <Image
                    src = { image.src }
                    public = { image.public }
                    key = { image.id }
                />
            );
        });

        return (
            <div className = 'images'>
                { imagesJSX }
            </div>
        );
    }
}
