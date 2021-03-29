import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function renderDish(dish) {
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

function renderComments(comments) {
    if(comments && comments.length) {
        comments = comments.map(comment => {
            return (
                <ul key={comment.id} className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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

function DishDetail(props) {

    if(props.dish)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {renderComments(props.dish.comments)}
                    </div>
                </div>
            </div>
        )

    return (
        <div></div>
    )

}

export default DishDetail;