import React from "react";
import Post from "./Post/Post";
import Style from "./MyPosts.module.css"

const MyPosts = () => {
    return(
        <div className={Style.posts}>
            <Post img={"https://s1.1zoom.ru/b5050/460/Tanks_441653_3840x2400.jpg"}/>
            <Post img={"https://im0-tub-ua.yandex.net/i?id=8b5cd3e1b249a8fb5603cd8e63db9165&n=13"}/>
            <Post img={"https://pbs.twimg.com/media/EFJA1rPWwAARCn4.jpg"}/>
        </div>
    );
}

export default MyPosts;