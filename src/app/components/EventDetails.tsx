import { calendarEvents, eventDetail } from "../lib/data";
import React, { useState } from "react";

const EventDetails = ({selectedId}:{selectedId:string}) => {
	const [activeId, setActiveId] = useState<string | null>(selectedId);
	const getEventsByDay=(events:any[])=>{
		const dayOfWeek=['CHỦ NHẬT','THỨ 2','THỨ 3','THỨ 4','THỨ 5','THỨ 6','THỨ 7']
		const EventsByDay:{[key:string]:any[]}={}
		dayOfWeek.forEach((day)=>{
			EventsByDay[day]=[]
		})
		events.forEach((event)=>{
			const day = dayOfWeek[new Date(event.start).getDay()]// vì xử lý theo phương thức getDay với CN=0,...
			EventsByDay[day].push(event)
		})
		return EventsByDay
	}
	const getExercisesByEvent = (eventId: number) => {
		return eventDetail.filter((exercise) => exercise.idcalendar === eventId);
	};	
	const eventsByDay=getEventsByDay(calendarEvents)
	React.useEffect(() => {
		if (selectedId) {
		  const targetElement = document.getElementById(selectedId);
		  if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
			setActiveId(selectedId);
		  }
		}
	  }, [selectedId]);
  return (
	<div className=''>
		{Object.keys(eventsByDay).map((day,index)=>(
			<div key={index} className="mb-8">
				<h3 className="font-bold text-lg mb-2">{day}</h3>
				{eventsByDay[day].map((event)=>{
					const exercises = getExercisesByEvent(event.id);
					const isActive = activeId === event.id.toString();
					return(
						<div key={event.id} id={event.id.toString()} className={`border rounded p-4 mb-4 ${
							isActive ? "bg-gradient-to-r from-brown-red to-bright-orange" : "bg-base-100"
						  }`}>
							<p>
								<strong>Thời gian:</strong>{" "}
								{new Date(event.start).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
								})}{" "}
								-{" "}
								{new Date(event.end).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
								})}
							</p>
							<p>
								<strong>Nhóm cơ:</strong> {event.type}
							</p>
							<p>
								<strong>Huấn luyện viên:</strong> {event.trainer}
							</p>
							<h5 className="font-bold mt-4">Danh sách bài tập:</h5>
							{exercises.length>0?(
								<ul className="list-disc list-inside">
									{exercises.map((exercise)=>(
										<li key={exercise.id}>
											<strong>{exercise.title}</strong>: {exercise.notes}
										</li>
									))}
								</ul>
							):(
								<p>Không có bài tập nào.</p>
							)}
						</div>
					)
				})}
			</div>
		))}
	</div>
  );
};

export default EventDetails;