export const setImages = (images) =>{
    return {
        type: 'SET_IMAGES',
        payload: images
    }
}

export const selectImage = (image) => {
    return {
        type: 'SELECT_IMAGE',
        payload: image
    }
}

export const nextAction = (next) => {
    return{
        type: 'NEXT',
        payload: next
    }
}