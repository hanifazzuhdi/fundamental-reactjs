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

    componentDidMount(){
        // Menggunakan Fetch
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(result => result.json())
        //     .then(datas => {
        //         this.setState({
        //             data: datas
        //         });
        //     });

        // Menggunakan Axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);

                this.setState({
                    data: response.data
                })
            })
    }

    render(){
        return (
            <Fragment>
                <p>React Blog Consume API</p>
                <hr/>
                <div className="cards">
                {
                    this.state.data.slice(0, 5).map(data => <BlogCard key={data.id} title={data.title} body={data.body}/>)
                }
                </div>
            </Fragment>
        )
    }
}