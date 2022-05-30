import React , {Component} from "react";
import axios from "axios";

export default class EditPost extends Component{

    componentDidMount(){
        const id = this.props.match.params.id;
        // console.log(id);
        axios.get(`http://localhost:8000/post/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    topic:res.data.post.topic,
                    description:res.data.post.description,
                    postCategory:res.data.post.postCategory
                });
                console.log(this.state.post);
            }
        });
    
    }
    constructor(props){
        super(props);
        this.state={
          topic:"",
          description:"",
          postCategory:""
        }
      }
      
      handelInputChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
          ...this.state,
          [name]:value
        })
      }
      
      onSubmit = (e)=>{
        e.preventDefault();
        const id = this.props.match.params.id;
        const {topic,description,postCategory} = this.state;
        const data = {
          topic:topic,
          description:description,
          postCategory:postCategory
        }
        console.log(data);
      
        axios.put(`http://localhost:8000/post/update/${id}` , data).then((res)=>{
          if(res.data.success){
              alert("post updated succesfully")
            this.setState({
              topic:"",
            description:"",
            postCategory:""
            })
          }
        })
      
      }
    render(){

        return(
          <div class="create-blog">
            <h1>Add New Student</h1>
            <form>
              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Full Name</label>
                <input type="text"
                className="form-control"
                name="topic"
                placeholder="Enter Full Name"
                value={this.state.topic}
                onChange={this.handelInputChange} />
              </div>
              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Address</label>
                <input type="text"
                className="form-control"
                name="topic"
                placeholder="Enter Address"
                value={this.state.description}
                onChange={this.handelInputChange} />
              </div>
              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Grade</label>
                <input type="text"
                className="form-control"
                name="topic"
                placeholder="Enter Grade"
                value={this.state.postCategory}
                onChange={this.handelInputChange} />
              </div>
              <button className="btn btn-success" type="submit" style={{marginTop:'15pc'}} onClick={this.onSubmit}><i class="fa-solid fa-check"></i>&nbsp;Save</button>
            </form>
        
    </div>
        )
    }
}