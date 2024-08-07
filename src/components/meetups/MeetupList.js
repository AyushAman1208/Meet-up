import React from "react";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
    console.log(props.meetup)
  return (
    
    
      <ul className="flex flex-col gap-y-3 p-5 bg-red-100">
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
