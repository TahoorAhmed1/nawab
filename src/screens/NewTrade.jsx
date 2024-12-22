import FAQ from "../components/Faqs"
import Footer from "../components/Footer"
import SmallCards from "../components/SmallCards"
import "../screens/NewTrade.css"

const NewTrade = () => {
  return (
    <>
    <div className="form1-back">
      <img src="../assets/back-Img.png" alt="" />
    </div> 

    <div className="center-content">


      <div className="center-content-left">
        <h1> The <span style={{color:"#F40000"}} >best</span> <br /> way to sell your <br /> car </h1>

        <h3>Tell us about your ride to get a firm offer in minutes.</h3>
      </div>


      <div className="center-content-right">

        <div className="center-upper-btn">
          <button>VIN</button>
        </div>

        <div className="content-inputs">
          <input type="text" placeholder="Number Plate (e.g. CLTC 123)"/>
          <input type="text" placeholder="Postal Code" />
        </div>

        <div className="center-simple-btn">
          <button>Continue</button>
        </div>

      </div>


    </div>

     <div className="how-its-work">
      <h1>How it Works</h1>
      </div>

      <div className="content-card-text">


     
      <SmallCards 
        title="Describe your ride" 
        details={[
          "Share a few quick details",
          "about your car’s",
          "condition and history"
        ]}
        iconClass="fa-solid fa-car"
      />
      
      <SmallCards 
        title="Set your budget" 
        details={[
          "Get a firm offer",
          "immediately, with",
          "insights on market trends"
        ]}
        iconClass="fa-solid fa-dollar-sign"
      />
      
      <SmallCards 
        title="Select features" 
        details={[
          "Drop your car off at one",
          "of our locations, or",
          "arrange a pick-up"
        ]}
        iconClass="fa-solid fa-cog"
      />
      
      <SmallCards 
        title="Find the best match" 
        details={[
          "A quick walkthrough and",
          "you get paid as you hand",
          "us keys"
        ]}
        iconClass="fa-solid fa-search"
      />
    

    </div>

     <div className="login-text-div">
        <button>Uber</button>
        <p>Well give you a <strong>$50 voucher</strong> for your ride home when you sell your car to Soni Auto Market and drop it off at select locations</p>
       </div>

       <div className="new-page-img-sec">
        <div>
          <img className="new-sec-card-img" src="../assets/new-img-card...png" alt="" />
        </div>
        <div>
          <h1 style={{fontWeight:'700'}}>27,000+</h1>
          <p style={{fontSize:'22px'}}>Cars sold to <span style={{color:'red'}}>Soni Auto Market </span>(and counting)</p>
          <p style={{lineHeight:'30px'}}>Himanshu was a pleasure to work with in selling my car. He
             was very thorough in his explanations of how the process
             works. I would recommend Soni Auto Market and Himanshu 
             to anyone interested in selling their car</p>
             <div className="star-icons-new">
              <div>
              <p style={{lineHeight:'20px'}}>Vince S. <br />Burlington, ON 9 days ago</p>
             
              </div>
              <div className="flex gap-1 ">
              <img src="../assets/googleIcon.png" alt="" />
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>

              </div>
             </div>

             <div className="last-arrow-cons">
             <i className="fa-solid fa-arrow-left"></i>
             <i className="fa-solid fa-arrow-right"></i>
             </div>
        </div>
       </div>

       <div className="trade-in-sec">
        <div >
          <h1 style={{fontSize:'38px',fontWeight:'700'}}>Trade in and save</h1>
          <p>Ready to upgrade? Get up to 20% more for your car through tax savings <br />
          when you trade it in</p>
          <button >Get an offer</button>
        </div>
        <div>
          <img src="../assets/trade-and-save_qpt2jf.png.png" alt="" />
        </div>

       </div>


        <div className="two-imgs">

          <div className="ball">
          <img src="../assets/basketball.png" alt="" />
          </div>

          <div className="trade">
          <img src="../assets/soni_auto_1 1.png" alt="" />
            <h2 style={{color:"#f3f3f3"}}>Official partner of the NBA</h2>
          </div>
         
        </div>


          <div className="faqs">
            <FAQ/>
          </div>
        







    <section className= "new-trade-3000">
        <Footer/>
      </section>   
    </>
  )
}

export default NewTrade
