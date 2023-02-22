import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const formSubmitHandler = (enteredMeetupData) =>{
        console.log(enteredMeetupData);
    }

    return(
        <div>
            <NewMeetupForm onAddMeetup={formSubmitHandler}/>
        </div>
    )

}

export default NewMeetupPage;