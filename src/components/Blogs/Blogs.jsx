import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Blog from '../Blog/Blog';
import SideBar from "../SideBar/SideBar";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [sideBar, setSideBar] = useState([]);
    const [bookmark, setBookmark] = useState([]);


    useEffect( () => {
        fetch("fakedb.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
    }, []);

    const handleMarkAsRead = (blog) => {
        const newElement = [ ...sideBar, blog];
        setSideBar(newElement);
    }

    const handleBookmark = (blog) => {
        const newBookmark = [ ...bookmark];
        const existingBookmark = newBookmark.find((bl) => bl.id === blog.id);

        if (existingBookmark) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Bookmark Already Added',
                showConfirmButton: false,
                timer: 1500
              });
            return;
        }
        newBookmark.push(blog);
        setBookmark(newBookmark);
    }



    return (
        <div className='md:w-[70%] md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
            <div className='md:col-span-2'>
                <div className='card card-compact bg-base-100 rounded'>
                {blogs.map((blog) => (
                        <Blog
                        key={blog.id}
                        blog={blog}
                        handleMarkAsRead={handleMarkAsRead}
                        handleBookmark={handleBookmark}>
                        </Blog>
                    ))}
                </div>                
            </div>
            <div className='md:col-span-1'>
                <SideBar
                sideBar={sideBar}
                handleBookmark={handleBookmark}
                bookmark={bookmark}>
                </SideBar>
            </div>
        </div>
        
    );
};

export default Blogs;