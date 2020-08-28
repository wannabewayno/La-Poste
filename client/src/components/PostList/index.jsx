import React from 'react';
import { Button } from 'grass-roots-react';

export default function({ posts }){


    return (
        <>
            {posts.map(({ text },index) => (
                    <div key={index} >
                        {text}
                    </div>
                )
            )}
        </>
    )
}