import React from "react";
import Post from "./Post/Post";
import Style from "./MyPosts.module.css"

const MyPosts = () => {

    let posts = [
        {src: "https://s1.1zoom.ru/b5050/460/Tanks_441653_3840x2400.jpg"},
        {src: "https://im0-tub-ua.yandex.net/i?id=8b5cd3e1b249a8fb5603cd8e63db9165&n=13"},
        {src: "https://pbs.twimg.com/media/EFJA1rPWwAARCn4.jpg"},
    ];

    let postElements = posts.map(p => <Post img={p.src}/>);

    return (
        <div className={Style.posts}>
            {postElements}
        </div>
    );
}

export default MyPosts;