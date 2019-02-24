import React, { Component } from 'react';
import './article.css';
import axios from 'axios';


class Article extends Component {

    constructor() {
		super()
		this.state = {
			categories: []
		}
	}

    componentDidMount(){
		axios.get('https://young-retreat-10768.herokuapp.com/article')
		.then(response => {
            this.setState({categories: response.data});
        });
	}


     render() {
        
        return (
            <div className='article-main'>
               <div className='wrapper'>
                    <div className='article'>

                {
                    this.state.categories.map(category => {
                    return (

                        <div className='cards'>
                        <h2>{category.title}</h2>
                        <p>{category.article}</p>
                        <p><strong>{category.name}</strong></p>
                        <small>Date - {category.date}</small>
                        </div>
                        )

                     })

                 }
                            
                        
                    </div>
               </div>

               <div className='article-bottom-grid'></div>
            </div>
        );
    }
}

export default Article;