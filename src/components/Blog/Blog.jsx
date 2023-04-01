import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faBookmark);

const Blog = (props) => {
    const {id, author_name, blog_title, author_img, read_time, publish_date, img} = props.blog;

    const handleMarkAsRead = props.handleMarkAsRead;
    const handleBookmark = props.handleBookmark;

    return (
        <div>
            <div className="card card-compact bg-base-100 rounded-none border-b-2 mb-4">
                <div className="flex justify-center align-middle p-2">
                    <img className="h-96 w-full rounded-md" src={img} alt="" />
                </div>
                <div className="flex justify-between p-2 mb-4">
                    <div className="flex align-middle gap-4">
                        <img className="w-10 h-10 rounded-full" src={author_img} alt=''></img>
                            <div className="text-sm">
                                <p className="font-bold">{author_name}</p>
                                <p>{publish_date}</p>
                            </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                             <p className=" gap-4 text-gray-400 text-sm font-semibold">{read_time} min read   </p>
                        </div>
                        <div>
                            <button onClick={() => handleBookmark(props.blog)} type="button">
                                <label className="swap">
        
                                    {/* this hidden checkbox controls the state */}
                                    {/* <input type="checkbox"/> */}
                                    
                                    {/* volume on icon */}
                                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>
                                    
                                    {/* volume off icon */}
                                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
                                    
                                </label>
                            </button>
                        </div>



                    </div>
                </div>
                <div className="p-2">
                    <h2 className="card-title font-bold">{blog_title}</h2>
                    <div className="flex gap-4 text-gray-400 text-sm font-semibold">
                        <p>#HTML</p>
                        <p>#CSS</p>
                        <p>#JS</p>
                    </div>
                </div>
                <div className="p-2 mb-4">
                    <button onClick={() => handleMarkAsRead(props.blog)} className="font-semibold border-b-2 hover:text-blue-600 hover:border-blue-600" type="button">Make as Read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;