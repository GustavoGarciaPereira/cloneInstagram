import React, {Component} from 'react';
import './Feed.css';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';


class Feed extends Component {
    render(){
        return(
           <section id="post-list">
               <article>
                <header>
                  <div className="user-info">
                    <span>Gustavo</span>
                    <span className="place">Sao sepe</span>
                  </div>
                  <img src={more} alt="mais"/>  
                </header>

                <img src="http://localhost:3333/files/finland-909746.jpg" alt="imagem"/>
                <footer>
                    <div className="actions">
                        <img src={like} alt="" />
                        <img src={comment} alt="" />
                        <img src={send} alt="" />
                    </div>
                </footer>
               </article> 
           </section>
        );
    }
}


export default Feed;