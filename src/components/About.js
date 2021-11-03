import React, {useState} from 'react'
// import { Accordion} from 'react-bootstrap'



export default function About(props) {
  let style={
    color:props.mode==="dark"?"white":"black",
    backgroundColor:props.mode==="dark"?"#212529":"white",
    border:"2px solid",
    borderColor:props.mode==="dark"?"white":"black"
  }


    return (
        <>
        <div className="container" >
        <h1 >About Us</h1>
        <h3>Our Story</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat, eaque mollitia aliquam consequuntur aliquid eos odit impedit quibusdam nihil at ut. Molestias nulla id alias, fuga qui, doloribus atque molestiae maxime doloremque iste fugit aliquam totam reiciendis asperiores error in vitae nihil libero dolorem vero. Voluptatibus quibusdam deserunt porro laborum nostrum labore iste repellendus cumque eum. Voluptate optio doloribus deserunt laborum corporis porro debitis expedita accusantium, laudantium ex commodi? Adipisci laborum inventore reprehenderit modi. Facilis, sit deleniti eligendi dignissimos ipsam distinctio tempora, quod quisquam, eius facere laborum quas optio voluptatem commodi nemo laudantium iure cumque fugit iste consectetur quam?</p>
        <h3>FAQs</h3>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={style}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      {/* <button type="button" className="btn btn-primary mx-1 my-2" onClick={toggleColor}>{TxtMode}</button> */}
        </div>
        </>
    )
}
