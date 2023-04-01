import React from 'react';

const SideBar = (props) => {
    const { sideBar } = props;
    const { bookmark } = props;

    let totalTime = 0;
    for (const blog of sideBar) {
        totalTime = totalTime + blog.read_time;
    }


    return (
        <div className='md:sticky md:top-0'>
            <div className="md:col-span-1">
                <div className="text-center p-2 mb-4">
                    <p className="bg-gray-100 text-violet-700 border-violet-700 text-xl font-bold px-4 py-5 border  rounded-md">Spent time on read: {totalTime} min</p>
                </div>
                <div className="p-2">
                    <div className="bg-gray-100 rounded-md">
                        <h3 className="text-lg font-bold p-8">Bookmarked Blogs : {bookmark.length}</h3>
                        
                        {bookmark.map((blog) => (
                            <div key={blog.id} className='px-8 pb-4'>
                                <p className="bg-white font-semibold p-4 rounded-md">{blog.blog_title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;