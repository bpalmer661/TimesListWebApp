
import react, { useState } from 'react'
import firebase from '../firebaseConfig'


const AddTimeEntryForm = () => {

const [title,setTitle] = useState('')
const [time, setTime ] = useState('')

function onSubmit(e) {
    e.preventDefault()

    firebase.firestore()
    .collection('times')
    .add({
        title,
        time_seconds: parseInt(time)
    })
    .then(() => {
   setTitle("")
   setTime("")
    })
}
    return(
    <form onSubmit={onSubmit}>
         <h4> Add Time Entry</h4>
        <div>
            <label>
                Title 
            </label>
            <input value={title} onChange={e => setTitle(e.currentTarget.value)} type="text"/>
        </div>

        <div>
            <label>
                Time
            </label>
            <input value={time} onChange={e => setTime(e.currentTarget.value)} type="number" />
        </div>

        <button>
        Add Time Entry
        </button>

    </form>
    )
}

export default AddTimeEntryForm
