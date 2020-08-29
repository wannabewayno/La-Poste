
export const updateCurrentPost = postId => {
    return {
        type:'updateCurrentPost',
        payload: postId,
    }
}

export const updatePosts = newPosts => {
    return {
        type: 'updatePosts',
        payload: newPosts,
    }
}

export const updateColorScheme = newColourScheme => {
    return {
        type:'updateColourScheme',
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