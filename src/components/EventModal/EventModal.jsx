import React from "react"
import styles from "./EventModal.module.scss"


const EventModal = (hidden, setHidden,selectedEvent) => {

	return (
			<>
				<div style={{ display: hidden ? "block" : "none" }}
						 className={styles.overlay}>
					<div style={{ display: hidden ? "block" : "none" }}
						className={styles.modalWrapper}>
						<div className={styles.modalBox}>
							<h1>Selected Event Description</h1>
							<div className={styles.modalForm}>
								{/*<div>{selectedEvent.title}</div>*/}
								{/*<div>{selectedEvent.start}</div>*/}
								{/*<div>{selectedEvent.end}</div>*/}
								<button onClick={() => setHidden(false)} className={styles.formBtn}>
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



