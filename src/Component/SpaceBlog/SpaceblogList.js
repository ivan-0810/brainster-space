import React from 'react';
import "../Homepage/HomePage.scss";


const SpaceblogList = ({data}) => {
    
    return (
      <div className="spaceblog-list box-1">
          {data.map(card => (
              <a key={card.id} href="https://brainster.co/" className="homepage-zanas-card">
              <div  className="img-div" style={{
                  backgroundImage: "url("+ require(`../../sliki/space_blog/${parseInt(card.id)+1}.jpg`)+ ")",
                  backgroundPosition:"center",
                  backgroundSize:"cover"
              }}>
    
              </div>
              <div className="txt-div">
                    <h3>{card.title}</h3>
              
          <p>{card.description}</p>
              </div>
              <div className="spaceblog-card-btn">
                 <span className="description space-description">{card.category}</span>
                  <span className="space-btn-card"><i className="fas fa-arrow-right"></i></span></div>
            </a>
    
          ))}
          
      </div>
    );
  }
  
  export default SpaceblogList;