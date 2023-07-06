import React from "react";
import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css'

function MeetupList(props) {
    console.log(props.meetup)
  return (
    
    
      <ul className={classes.lists}>
        {props.meetup.map(meetup => 
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            description={meetup.description}
            location={meetup.location}
            
          />
        )}
      </ul>
    
  );
}

export default MeetupList;
