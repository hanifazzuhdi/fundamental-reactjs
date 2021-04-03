import React, {Fragment, Component} from "react";
import BlogCard from "../../component/blog/BlogCard";
import axios from "axios";
import './Blog.css';

export default class Blog extends Component{

    constructor(props){
        super(props);

        this.state = {
            data: []
        }
    }

    // Note : props bisa diisi dengan fungsi
    handleRemove = (id) => {
        // console.log(id);

        axios.delete(`http://localhost:3004/posts/${id}`)
            .then(response => {
                console.log(response);
                
                this.getPostApi();
            })
    }

    // Menggunakan Axios
    getPostApi = () => {
        axios.get('http://localhost:3004/posts')
        .then(response => {
            // console.log(response.data);
            this.setState({
                data: response.data
            })
        })
    }

    componentDidMount(){
        this.getPostApi();
    }

    render(){
        return (
            <Fragment>
                <p>React Blog Consume API</p>
                <hr/>
                <div className="cards">
                {
                    this.state.data.map(data => <BlogCard key={data.id} data={data} remove={this.handleRemove}/>)
                }
                </div>
            </Fragment>
        )
    }
}