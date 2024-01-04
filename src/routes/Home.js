import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer"

function Home(){
    return(
        <>
        <Navbar/>
       <Hero 
       cName='hero'
       heroImg="https://png.pngtree.com/thumb_back/fh260/background/20220314/pngtree-conceptual-photo-of-travel-plan-preparation-with-aircraft-model-image_1049777.jpg"
       title='Your Journey Your Story'
       text='Choose Your Favourite Destination.'
       buttontext='Travel Plan'
       url='/'
       btnClass='show'
       />
       
       <Destination/>
       <Trip/>
       <Footer/>
        </>
    )
    
    

}
export default Home