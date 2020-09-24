import {combineReducers} from 'redux'

const imagesArr = []

const imagesReducer = (images = imagesArr, action) => {
    if (action.type === 'SET_IMAGES') {
        return action.payload
    }
    return images
}

const selectedImageReducer = (image = null, action) => {
    if (action.type === 'SELECT_IMAGE') {
        return action.payload
    }
    return image
}

const goNextReducer = (next = false, action) => {
    if (action.type === 'NEXT') {
        return action.payload
    }

    return next
}

export default combineReducers({
    images: imagesReducer,
    selectedImage: selectedImageReducer,
    next: goNextReducer
})
