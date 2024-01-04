import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Trip from "../components/Trip"

function Service(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName='hero-mid'
        heroImg="https://media.istockphoto.com/id/1044726826/vector/abstract-concept-currency-earth-blue-line.jpg?s=612x612&w=0&k=20&c=Wv2uP9wxznUm5osEhAvm_N51dOsPIIp82zgmW0EkH-o="
        title='Service'
       btnClass='hide'
        
        />
        <Trip/>
        <Footer/>
        </>
    )
    
    

}
export default Service

