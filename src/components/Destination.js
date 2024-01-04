import "../components/DestinationStyles.css"
import DestinationData from "./DestinationData"

const Destination =()=>{
    return(
        <div className="destination">
             <h1>Popular Destination</h1>
             <p>Tours give you the opportunity to see a lot, within a time frame.</p>

             <DestinationData  className='first-des'
                   heading="Taal Volcano,Batanga"  
                  
                   text="One of the more devastating eruptions of Taal took place in November 11 1911. During the night of the  of that month, the seismographs at the Manila Observatory commenced to register frequent disturbances, which were at first of insignificant importance, but increased rapidly in frequency and intensity. The total recorded shocks on that day numbered 26. During the  there were recorded 217 distinct shocks, of which 135 were microseismic and 10 quite severe. The frequent and increasingly strong earthquakes caused much alarm in Manila, but the observatory staff was soon able to locate their epicenter in the region of Taal Volcano and assured the public that Manila was in no danger,
                   as Taal was some 60 km (37 mi) away, too far to directly damage the city.[23]"
            
                  img1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXummsdk0sEh-Ud37-mt7p2GqVPP8ZcnI0iA&usqp=CAU'
                  img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgiBiGjvCRh7bllS9aWO5DZv7GQRe5MoZjA&usqp=CAU'
                 
                 />

                 <DestinationData   className='first-des-reverse'
                   heading="Mt.Daguldul,Batangas"  
                  
                   text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain.

                   The Tagalog word “Daguldol” means a feeling of apprehension and grandiosity. According to locals, the mountain was named as such because it describes the magnificence of the mountain range and the blunt rolling of its slopes. Mt. Daguldol has a total trail length of nine kilometers. "
            
                  img1='https://hiketomountains.com/wp-content/uploads/2022/01/Mt-Daguldol-Day-Hike-29-768x576.jpg'
                  img2='https://hiketomountains.com/wp-content/uploads/2022/02/Mt-Daguldol-Day-Hike-49-768x576.jpg'
                 
                 />
        
        </div>

    )
}
export default Destination

//    <div className="first-des">
          
        //      <div className="des-text">
        //            <h2>Taal Volcano,Batanga</h2>
        //             <p>One of the more devastating eruptions of Taal took place in November 11 1911. During the night of the 27th of that month, the seismographs at the Manila Observatory commenced to register frequent disturbances, which were at first of insignificant importance, but increased rapidly in frequency and intensity. The total recorded shocks on that day numbered 26. During the 28th there were recorded 217 distinct shocks, of which 135 were microseismic and 10 quite severe. The frequent and increasingly strong earthquakes caused much alarm in Manila, but the observatory staff was soon able to locate their epicenter in the region of Taal Volcano and assured the public that Manila was in no danger,
        //              as Taal was some 60 km (37 mi) away, too far to directly damage the city.[23]</p>
        //      </div>

        //      <div className="image">
        //      <img alt="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXummsdk0sEh-Ud37-mt7p2GqVPP8ZcnI0iA&usqp=CAU"/>
        //      <img alt="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgiBiGjvCRh7bllS9aWO5DZv7GQRe5MoZjA&usqp=CAU"/>
        //      </div>


        //     </div>