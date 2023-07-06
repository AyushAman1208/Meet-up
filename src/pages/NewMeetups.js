
import React from 'react'
import AddMeetups from '../components/meetups/AddMeetups'

function addMeetupHandler(meetupData){

  
  fetch('https://meetup-b2f19-default-rtdb.firebaseio.com/meetups.json',
  {
    method:'POST',
    body:JSON.stringify(meetupData),
    headers:{
      'Content-Type':'application/json'
    }
  
  }).then(()=>{
    
  })
}

function NewMeetups() {
  
  return (
    <div>
      New Meetups
      <AddMeetups addMeetUp={addMeetupHandler}/>
    </div>
    
  )
}

export default NewMeetups
