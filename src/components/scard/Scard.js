import React from 'react';
import {Card, CardImg, CardText,CardBody, CardTitle,Button} from 'reactstrap';
import {Link, browserHistory} from 'react-router';

//This class is a component that should describe the layout
//for suggestion cards

//TODO
//handlers should modified firebase values

class Scard extends React.Component{
    constructor(props){
        //Default states
        super(props);

        this.state = {
            str_card_img_url:this.props.str_card_img_url,
            str_card_title:this.props.str_card_title,
            str_card_text:this.props.str_card_text,
            int_upvote:this.props.int_upvote,
            int_downvote:this.props.int_downvote
        };

        //Bind functions to the Component
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
    }

    //Event handler when user hits the upvote button
    handleUp(event){
        let newVal = this.state.int_upvote+1;
        this.setState({"int_upvote":newVal});
    }

    //Event handler when user hits the downvote button
    handleDown(event){
        let newVal = this.state.int_downvote+1;
        this.setState({"int_downvote":newVal});
    }

    //This function renders the suggestion card component
    render(){
        let str1 = "Yes " + this.state.int_upvote;
        let str2 = "No " + this.state.int_downvote;
        return (
            <div className="outsideCard">
                <Card>
                    <CardImg top width="100%" src={this.state.str_card_img_url}/>
                    <CardBody>
                        <CardTitle>{this.state.str_card_title}</CardTitle>
                        <CardText>{this.state.str_card_text}</CardText>
                        <Button color="primary" onClick={this.handleUp}>{str1}</Button>{' '}
                        <Button color="danger" onClick={this.handleDown}>{str2}</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }

}

export default Scard;
