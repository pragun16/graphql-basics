import React from 'react';

import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthors = gql`
    {
        authors{
            name
            age
            id
        }
    }
`

class AddBook extends React.Component{
    displayAuthors(){
        var data = this.props.data;
        if(!data.loading){
            data.authors.map(author => {
                return (
                    <option key={ author.id } value={ author.id }>
                        { author.name }
                    </option>
                );       
            });
        }
    }

    render(){
        return(
            <form id="add-book">
                <div>
                    <label>Name:</label>
                    <input type="text" />    
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" />    
                </div>
                <div>
                    <label>Author:</label>
                    <select>
                        { this.displayAuthors() }
                    </select>
                </div>
                <div>
                    <button> + </button>
                </div>
            </form>
        );
    }
}

export default graphql(getAuthors)(AddBook);