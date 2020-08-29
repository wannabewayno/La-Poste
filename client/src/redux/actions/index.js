
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

export const fetchingData = () => {
    return {
        type: 'FetchingData',
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

export const openModal = () => {
    return {
        type:'openModal'
    }
}

export const closeModal = () => {
    return {
        type:'closeModal'
    }
}