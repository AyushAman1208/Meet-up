import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";



function AllMeetups() {
  
  const [isLoading,setIsLoading]=useState(true);
  const [loadedMeetups,setLoadedMeetups]=useState([])
  useEffect(()=>{
    setIsLoading(true)
    fetch('https://meetup-b2f19-default-rtdb.firebaseio.com/meetups.json').then((response)=>{
    return response.json();
  }).then((data)=>{
    const meetups=[]
    for(const key in data){
      const meetup={
        id:key,
        ...data[key]

      }
      meetups.push(meetup)
    }
    setIsLoading(false)
    setLoadedMeetups(meetups);
  })
    
  },[])

  if(isLoading){
    return <section>Loading.....</section>
  }

  
  return (
    <>
      <h2>All Meetups</h2>
      <MeetupList meetup={loadedMeetups} />
    </>
  );
}

export default AllMeetups;
