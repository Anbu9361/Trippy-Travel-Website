import '../components/HeroStyle.css'


function Hero(props){
    return(
        <>
        <div className={props.cName}>
        <img alt='HeroImg' src={props.heroImg}/>
        
        <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.buttontext}</a>
        </div>
        
        </div>
     
        </>
    )
    
    

}
export default Hero