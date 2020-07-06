import React from 'react';
import './styles.css';
import selfie from './about_man2.png'
import fundo from './about_tringle.png'

const AboutMe =()=>{
	return(

  <>
<section id="about">
     
  <div className="container">
    <div className="">
    <div className="col-md-5">
      <div className="about-img">
            <img className="shape" src={fundo} alt=""/>
            
            <img className="man" src={selfie} alt=""/>
            
      </div>
    </div>
    <br/>
    <div className="col-md-7 about-right">
      
      <h2 ><b>Quem sou eu?</b>
      </h2>
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nesciunt sint, esse iure eius voluptatibus perspiciatis sequi fuga magni perferendis beatae ratione, nam culpa veritatis dolore sunt ut minus qui Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea delectus doloremque adipisci autem deleniti non nostrum, suscipit soluta perferendis.
      </p>
      <p >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores pariatur animi sunt, assumenda dicta distinctio nostrum nisi, ullam dignissimos dolor!
      </p>

    </div>
   
    </div>
  </div>
  
   </section>

    </>

		)
}

export default AboutMe;