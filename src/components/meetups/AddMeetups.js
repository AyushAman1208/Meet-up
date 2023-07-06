import React from "react";
import Cards from "../../ui/Cards";
import classes from './AddMeetups.module.css'
import { useRef } from "react";

function AddMeetups(props) {
    const titleInputRef= useRef();
    const addressInputRef= useRef();
    const imageInputRef= useRef();
    const descriptionInputRef= useRef();


    function submitHandler(event){
        event.preventDefault();

        const enteredTitle= titleInputRef.current.value;
        const enteredImage= imageInputRef.current.value;
        const enteredAddress= addressInputRef.current.value;
        const enteredDescription= descriptionInputRef.current.value;

        const meetupData={
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription
        }
        
        props.addMeetUp(meetupData);
        



    }
    
  return (
    <Cards>
      <form action="#" className={classes.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label><br />
          <input type="text" name="title" required id="title" ref={titleInputRef}/>
        </div>
        <div>
          <label htmlFor="address">Venue</label><br />
          <input type="text" name="address" required id="address" ref={addressInputRef}/>
        </div>
        <div>
          <label htmlFor="image">Image</label><br />
          <input type="url" name="image" required id="image" ref={imageInputRef}/>
        </div>
        <div>
          <label htmlFor="description">Description</label><br />
          <textarea name="description" required id="" cols="30" rows="10" ref={descriptionInputRef}></textarea>
        
          
        </div>
        <div>
            <button>Add Meetup</button>
        </div>
      </form>
    </Cards>
  );
}

export default AddMeetups;
