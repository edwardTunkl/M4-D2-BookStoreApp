import { Button, ListGroup } from "react-bootstrap"


const deleteComment = async (asin) => {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+asin, {
     method: 'DELETE',
     headers: {        
         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjViYjJkNTI2MjAwMTViNmRjOTMiLCJpYXQiOjE2MjkyODc4NjcsImV4cCI6MTYzMDQ5NzQ2N30.HkhDkrIcH7q04AsuHParGAbLEKxc3bvsAnjh3DGfZIE"
      }
      })

      if(response.ok){
        alert("Comment was deletet!")
      } else {
        console.log('error')
        alert('Comment still hereg')
      }
  }catch(err){
    console.log(err)
  }
}


const SingleComment = ({comment}) => ( 
  <ListGroup.Item>
    {comment.comment} 
    <Button variant="danger" className="ml-auto" onClick={() => deleteComment(comment._id)}>Delete</Button>
    </ListGroup.Item>
  )

export default SingleComment