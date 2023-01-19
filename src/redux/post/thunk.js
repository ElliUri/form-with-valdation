import { getPostsReceiveActionCreator } from "./action"

const fetchPosts = () => async (dispatch) => {
    dispatch(getPostsRequestActionCreator())
    try {
        const parsedData = await req.json() 
        setTimeout(() => {
            dispatch(getPostsReceiveActionCreator(parsedData))
        })
    }
} 