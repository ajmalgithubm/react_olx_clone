import { createContext, useState } from "react";
const PostContext = createContext(null)


export const Post = ({children}) => {
    const [postDetails, setPostDetails] = useState('')
    return(
        <PostContext.Provider value = {{postDetails, setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}
export default PostContext