import React from 'react';
import {Button} from 'reactstrap';
import {Link,browserHistory} from 'react-router';
import Scard from '../scard/Scard.js';

const defaultCard = {
    "str_card_img_url": "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
    "str_card_title": "Title",
    "str_card_text": "The quick brown fox jumped over the lazy dog",
    "int_upvote": 0,
    "int_downvote": 0   
}

class Board extends React.Component{
    //Load default as test
    testload(){
        return(
            <div>
                <h1>test load</h1>
                <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                                    <Scard str_card_img_url={defaultCard.str_card_img_url} str_card_title={defaultCard.str_card_title}
                    str_card_text={defaultCard.str_card_text} int_upvote={defaultCard.int_upvote} int_downvote={defaultCard.int_downvote}/>
                    
            </div>
        )
    }

    //Renderer
    render(){
        var test = this.testload();
        return(
            <div>
                {test}
                <Button onClick={this.handleAdd}>Edit or Add</Button>
            </div>
        );
    }
}

export default Board;