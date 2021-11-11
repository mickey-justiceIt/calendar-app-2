import React from "react"
import styles from "./EventModal.module.scss"


const EventModal = ({hidden, setHidden,selectedEvent}) => {
	const closeBtn = () =>  setHidden(false)
	return (
			<>
				<div
					style={{ display: hidden ? "block" : "none" }}
					className={styles.overlay}>
					<div style={{ display: hidden ? "block" : "none" }}
						className={styles.modalWrapper}>
						<div className={styles.modalBox}>
							<h1>Selected Event Description</h1>
							<div className={styles.modalForm}>
								<div>{selectedEvent.title || "NO"}</div>
								<div>{selectedEvent.start || "NO"}</div>
								<div>{selectedEvent.end || "NO"}</div>
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



