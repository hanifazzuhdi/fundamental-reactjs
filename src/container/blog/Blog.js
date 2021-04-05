import React, {Fragment, Component} from "react";
import BlogCard from "../../component/blog/BlogCard";
import axios from "axios";
import './Blog.css';

export default class Blog extends Component{

    constructor(props){
        super(props);

        this.state = {
            data: [],
            post: {
                userId: 1,
                id: 1,
                title: '',
                body: ''
            },
            isUpdate: false
        }
    }
 
    // API
    getPostApi = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then(response => {
            // console.log(response.data);
            this.setState({
                data: response.data
            })
        })
    }

    postData = () => {
        axios.post('http://localhost:3004/posts', this.state.post)
            .then(() => {
                this.setState({
                    post: {
                        userId: 1,
                        id: 1,
                        title: '',
                        body: ''
                    }
                });

                this.getPostApi()
            }, (err) => {
                alert(`error : ${err}`);
            });
    }

    updateData = () => {
        axios.put(`http://localhost:3004/posts/${this.state.post.id}`, this.state.post)
            .then(() => {
                this.setState({
                    post: {
                        userId: 1,
                        id: 1,
                        title: '',
                        body: ''
                    },
                    isUpdate: false
                });

                this.getPostApi();
            });
    }


    // Handle Action   
    handleRemove = (id) => {
        axios.delete(`http://localhost:3004/posts/${id}`)
            .then(response => {
                console.log(response);
                
                this.getPostApi();
            })
    }

    handleInput = (event) => {
        let postNew = {...this.state.post};

        if (!this.state.isUpdate){
            let id = new Date().getTime();
            postNew['id'] = id;
        }
        postNew[event.target.name] = event.target.value;

        this.setState({
            post: postNew
        });
    }

    handleUpdate = (data) => {
        console.log(data);

        this.setState({
            post: data,
            isUpdate: true
        })

    }

    handleSubmit = () => {
        if (this.state.post.title === '' && this.state.post.body === ''){
            return alert('Semua inputan tidak boleh kosong !');
        }

        if (!this.state.isUpdate){
            this.postData();
        }

        this.updateData();
        // const input = document.querySelectorAll('.form');
        // [...input].map(res => res.value = '');
    }


    // Cycle
    componentDidMount(){
        this.getPostApi();
    }

    render(){
        return (
            <Fragment>
                <p>React Blog Consume API</p>
                <hr/>
                <h3>Add Post</h3>
                <div className="form-post">
                    <label className="form-label">Title : </label>
                    <input className="form-input form" value={this.state.post.title} type="text" name="title" onChange={this.handleInput}/>
               
                    <label className="form-label">Content : </label>
                    <textarea className="form-textarea form" value={this.state.post.body} name="body" rows="10" onChange={this.handleInput}></textarea>
               
                    {
                        this.state.isUpdate === true 
                                ? <button className="form-button" onClick={this.handleSubmit}>Update</button> 
                                : <button className="form-button" onClick={this.handleSubmit}>Save</button>
                    }
                    
                </div>
                <div className="cards">
                {
                    this.state.data.map(data => <BlogCard key={data.id} data={data} remove={this.handleRemove} update={this.handleUpdate} />)
                }
                </div>
            </Fragment>
        )
    }
}