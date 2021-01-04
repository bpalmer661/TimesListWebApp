


import React, {useState, useEffect} from 'react'
import firebase from '../firebaseConfig'

const SORT_OPTIONS = {
    'TIME_ASC': {colum: "time_seconds", direction: 'asc'},
    'TIME_DESC': {colum: 'time_seconds', direction: 'desc'},

    'TITLE_ASC': {colum: 'title', direction: 'asc'},
    'TITLE_DESC': {colum: 'title', direction: 'desc'},
}

function useTimes(sortBy = 'TIME_ASC') {
    const [times,setTimes] = useState([])


    useEffect(() =>{
        const unSubscribe = 
        firebase
        .firestore()
        .collection("times")
        .orderBy(SORT_OPTIONS[sortBy].colum, SORT_OPTIONS[sortBy].direction)
       // .orderBy("title","desc")
        .onSnapshot((snapshot) =>{
      
const newTimes = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
}))

console.log("SetTimes about to be set")
setTimes(newTimes)
})      

console.log("we are now unsubscribing")
return () => unSubscribe()

    },[sortBy])

    console.log("returning an array of: times")
    return times
}


const TimesList = () => {

    const [sortBy, setSortby] = useState('TIME_ASC')
    const times = useTimes(sortBy)

    return (
    <div>
        <h2>Times List</h2>{''}
        <div>
            <label>Sort By:</label>{''}
            <select value={sortBy} onChange={e => setSortby(e.currentTarget.value)}>
                <option value="TIME_ASC"> Times (fastest first) </option>
                <option value="TIME_DESC">Times (slowes first) </option>
                <option disabled>---</option>
                <option value="TITLE_ASC">Title (a-z)</option>
                <option value="TITLE_DESC">Title (z-a)</option>
            </select>
        </div>

        <ol>
            {times.map((time) => 
            <li key={time.id}>
            <div className="time-entry">
                {time.title}
                <code className="time">
                    {time.time_seconds} Seconds
                </code>
            </div>
        </li>
             ) }
            
        </ol>
    </div>
    )
}


export default TimesList
