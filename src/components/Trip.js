import '../components/TripStyles.css'
import TripData from './TripData'
import France from'../assets/France.jpg'
import Indo from'../assets/Indo.jpg'
import Malaysia from'../assets/Malaysia.jpg'

function Trip(){
    return(
        <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using google Maps.</p>

        <div className='tripcard'>

        <TripData
        image={France}    
        heading="Trip in France"
        text='France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history'
        />

        <TripData
        image={Indo}    
        heading="Trip in Indonesia"
        text='Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea'
        />

        <TripData
        image={Malaysia}    
        heading="Trip in Malaysia"
        text='Malaysia, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history'
        />
        </div>
        </div>
    )
}
export default Trip