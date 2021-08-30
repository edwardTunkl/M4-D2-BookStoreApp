import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";



class CommentArea extends Component {

  state = {
    comments:[]
  }

  componentDidMount(){
    this.fetchComments()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.asin !== this.props.asin){
      this.fetchComments()
    }
  }

  fetchComments = async () => {

      try {
          let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.asin, {
          headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjViYjJkNTI2MjAwMTViNmRjOTMiLCJpYXQiOjE2MjkyODc4NjcsImV4cCI6MTYzMDQ5NzQ2N30.HkhDkrIcH7q04AsuHParGAbLEKxc3bvsAnjh3DGfZIE"
          }
        })
        let comments = await response.json()
        this.setState({comments:comments})
        console.log("THIS IS FETCH")
      } catch (err) {
        console.log(err)
      }
    }




  render(){
      return (
          <div style={{color:'black'}} > 
            <AddComment asin={this.props.asin} />
            <CommentList commentsToShow={this.state.comments} />
          </div>
    )
  }
}

export default CommentArea