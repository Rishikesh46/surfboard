Created a simple express server application that serves blog data. The api end-points supports the following operations

    Gets all the blogs
    Gets a specific blog with a blogId sent as a route parameter.
    Can create a new blog.
    
    
    1.To start 
    node server.js
    2.To find blogs
    url ie. blogs/find
    3. To find by id
    blogs/blog/:id
    4.To create new blog
    /create and in body {"author","title","content","imageUrl"}
    5. To update
    /blogs/update/:id
    6.To delete 
    /blogs/delete/:id
