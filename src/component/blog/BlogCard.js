import React from 'react';

const BlogCard = (props) => {
    return (
        <div className="card-post">
            <img className="thumb-post" src={props.thumb} alt="thumb post"/>
            <div className="content-post">
                <p className="title-post">{props.title}</p>
                <p className="body-post">{props.body}</p>
            </div>
        </div>
    )
}

BlogCard.defaultProps = {
    thumb: "https://placeimg.com/200/150/tech",
    title: "Judul Konten",
    body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic ullam libero animi suscipit aut."
}

export default BlogCard;