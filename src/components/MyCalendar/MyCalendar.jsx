import React, {useEffect, useState,useMemo} from "react"
import {Calendar,Views} from 'react-big-calendar';

import {localizer} from '../../utils/localizer'
import {createEvent, editEvent, getEvents} from '../../services/services'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";import "react-big-calendar/lib/css/react-big-calendar.css"
import "./MyCalendar.css"
import {Redirect} from "react-router-dom";
import EventModal from "../EventModal/EventModal";

const MyCalendar = ({isAuth,setIsAuth,isAdmin}) => {
	const [hidden, setHidden] = useState(false);
	const [selectedEvent,setSelectedEvent] = useState({
		id:Date.now(),
		title: "",
		start: "",
		end: ""})

	const [newEvent, setNewEvent] = useState({
		id:Date.now(),
		title: "",
		start: "",
		end: ""});

	const [allEvents, setAllEvents] =
		useState(JSON.parse(localStorage.getItem("events")) || []);

	const handleLogout = () => {
		setIsAuth(localStorage.removeItem("ISAUTH"));
		setIsAuth(localStorage.removeItem("ADMIN"));
		setIsAuth(localStorage.removeItem("USERID"));
	};
	const handleAddEvent = () => {
		setAllEvents([...allEvents, newEvent]);
			createEventFunc(newEvent)
	}
	useEffect(() => {
		localStorage.setItem("events", JSON.stringify(allEvents));
	}, [allEvents])


	const openModal = (id) => {
		const hasId = allEvents.filter((item) => item.id !== id);
		if(hasId){
			setHidden(true);
		}
		setSelectedEvent(hasId)
		console.log(hasId)
	}

	const createEventFunc = async (data) => {
		await createEvent(data)
	}

	return (
		<>
			<div className={"calendarWrapper"}>
				<button onClick={handleLogout} className={"logout"}>log out</button>
				<div
					style={{ display: isAdmin ? "block" : "none" }}
					className={"createBox"}>
					<h1 className={"title"}>Calendar Panel</h1>
					<input className={"create-input"} type="text" placeholder="Add Title"
								 value={newEvent.title}
								 onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}/>
					<DatePicker className={"create-input"}
											placeholderText="Start Date"
											selected={newEvent.start}
											onChange={(start) =>
											setNewEvent({ ...newEvent, start })}
					/>
					<DatePicker className={"create-input"}
											placeholderText="End Date"
											selected={newEvent.end}
											onChange={(end) => setNewEvent({ ...newEvent, end })} />
					<button onClick={handleAddEvent}>Add Event</button>
				</div>
					<Calendar
						className={"calendar"}
						selectable={true}
						localizer={localizer}
						events={allEvents}
						startAccessor="start"
						endAccessor="end"
						defaultDate={new Date()}
						onSelectEvent={openModal}
						views={['day','month','week', 'agenda']}
					/>
				{!isAuth && <Redirect to={"/login"}/>}
			</div>
			{hidden && <EventModal hidden={hidden} setHidden={setHidden} selectedEvent={selectedEvent} />}
	</>
	)
}

export default MyCalendar




// const handleChange = (event) => {
// 	const selectedItem = allsEvents.filter((item) => event.id === item.id)
// 	const title = window.prompt('New Event name', selectedItem[0].title)
// 	if (title) {
// 		const selectedEvent = {
// 			id: event.id,
// 			start: event.start,
// 			end: event.end,
// 			title: title || event.title
// 		}
// 		setAllsEvents([...allsEvents, selectedEvent])
// 	}
// }
