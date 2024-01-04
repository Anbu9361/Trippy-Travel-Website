import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"

function About(){
    return(
        <>
        <Navbar/>
       <Hero 
       cName='hero-mid'
       heroImg="https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxuaWdodHxlbnwwfHwwfHx8MA%3D%3D"
       title='About'
      btnClass='hide'
    />
      <AboutUs/>

       <Footer/>
        </>
    )
    }
export default About