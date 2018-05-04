import React from 'react';

import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
    {
        books{
            name
            genre
            id
        }
    }
`
class BookList extends React.Component{
    displayBooks(){
        var data = this.props.data;
        if(data.loading){
            return(
                <p> Fetching Books... </p>
            );
        }
        else{
            return data.books.map(book=>{
                return(
                    <li key={ book.id }>{ book.name }</li>
                );
            });
        }
    }

    render(){
        return(
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);