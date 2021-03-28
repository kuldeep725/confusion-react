import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {

    renderDish(dish) {
        if (dish)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        return(
            <div></div>
        );
    }

    renderComments(comments) {
        if(comments && comments.length) {
            comments = comments.map(comment => {
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {new Date(comment.date).toDateString()}</li>
                    </ul>
                )
            })
            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div> 
            )
        }
        
        return <div></div>
    }

    render() {
        if(this.props.dish)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            )

        return (
            <div></div>
        )
    }

}

export default DishDetail;