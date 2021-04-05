import React from 'react';

const BlogCard = (props) => {
    return (  
        <div className="card-post">
            <img className="thumb-post" src={props.thumb} alt="thumb post"/>
            <div className="content-post">
                <p className="title-post">{props.data.title}</p>
                <p className="body-post">{props.data.body}</p>
                <button className="btn-remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                <button className="btn-update" onClick={() => props.update(props.data)}>Update</button>
            </div>
        </div>
    )
}

BlogCard.defaultProps = {
    thumb: "https://source.unsplash.com/200x200/?nature,water,tech",
    title: "Judul Konten",
    body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic ullam libero animi suscipit aut."
}

export default BlogCard;