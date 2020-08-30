
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
        type:'updateColorScheme',
        payload:newColourScheme,
    }
}

export const startFetchingPosts = () => {
    return {
        type: 'startFetchingPosts',
    }
}

export const stopFetchingPosts = () =>{
    return {
        type: 'stopFetchingPosts',
    }
}

export const updateCurrentUser = ( username ) =>{
    return {
        type: 'updateCurrentUser',
        payload: username,
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

export const logIn = () => {
    return {
        type:'logIn'
    }
}

export const logOut = () => {
    return {
        type:'logOut'
    }
}