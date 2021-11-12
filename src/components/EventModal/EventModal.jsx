import React from "react"
import styles from "./EventModal.module.scss"

const EventModal = ({hidden, setHidden,title,start,end,id,selectedEvent}) => {
	console.log(title,start,end,id)
	const closeBtn = () =>  setHidden(false)
	return (
			<>
				<div
					style={{ display: hidden ? "block" : "none" }}
					className={styles.overlay}>
					<div style={{ display: hidden ? "block" : "none" }}
						className={styles.modalWrapper}>
						<div className={styles.modalBox}>
							<h1>Event Description</h1>
							<div id={id} className={styles.modalForm}>
								<div className={styles.eventData}>Title: {selectedEvent.title}</div>
								<div className={styles.eventData}> Start date: {selectedEvent.start}</div>
								<div className={styles.eventData}>End date: {selectedEvent.end}</div>
								<button onClick={closeBtn} className={styles.formBtn}>
								Ok
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
	)
}

export default EventModal



