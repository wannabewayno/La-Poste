import React from 'react';
import { Button } from 'grass-roots-react';

export default function({ posts }){


    return (
        <ul>
            {posts.map(({ title },index) => (
                    <li key={index} >
                        {title}
                    </li>
                )
            )}
        </ul>
    )
}