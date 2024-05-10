import { baseApi } from "./config";


const api = {
    blogsPostApi: () => `${baseApi}/public/v2/posts` ,
    usersApi: () => `${baseApi}/public/v2/users`,
}

export default api;