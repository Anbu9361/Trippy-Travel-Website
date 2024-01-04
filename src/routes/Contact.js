import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName='hero-mid'
        heroImg="https://media.istockphoto.com/id/478266572/photo/tokyo-subway-tracks.jpg?s=612x612&w=0&k=20&c=6Moc2q7r0iB4fRlpFCx-XagOWUyE63xqr8EDAH32zXI="
        title='Contact'
       btnClass='hide'
        
        />
        <ContactForm/>
        <Footer/>
        </>
    )
    
    

}
export default Contact