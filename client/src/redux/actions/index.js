
export const updateCurrentPost = ( postId ) => {
    return {
        type:'updateCurrentPost',
        payload:postId,
    }
}

export const updateAllPosts = ( posts ) => {
    return {
        type: 'updateAllPosts',
        payload: posts,
    }
}

export const updateColorScheme = ( newColourScheme ) => {
    return {
        type:'updateColorScheme',
        payload:newColourScheme,
    }
}

export const startFetchingData = () => {
    return {
        type: 'startFetchingData',
    }
}

export const stopFetchingData = () =>{
    return {
        type: 'stopFetchingData',
    }
}

export const updateCurrentUser = ( currentUser ) =>{
    return {
        type: 'updateCurrentUser',
        payload: currentUser,
    }
}