import { format, addDays, subDays } from 'date-fns'
import { useState } from 'react'

export const CalendarBox = () => {
	const [currentDate, setCurrentDate] = useState(new Date())
	const handlePrevious = () => {
		setCurrentDate(subDays(currentDate, 1))
	}
	const handleNext = () => {
		setCurrentDate(addDays(currentDate, 1))
	}
	const renderDays = () => {
		const days = []
		for (let i = -2; i <= 2; i++) {
			const day = addDays(currentDate, i)
			days.push(
				<div
					key={i}
					className={`flex flex-col items-center justify-center ${
						i === 0 ? 'text-3xl font-bold' : 'text-lg opacity-50'
					}`}>
					<span>{format(day, 'dd')}</span>
					<span>{format(day, 'EEE')}</span>
				</div>
			)
		}
		return days
	}

	return (
		<div className="w-auto h-auto mt-5 flex flex-row justify-start items-center space-x-6">
			<button onClick={handlePrevious}>{'<'}</button>
			{renderDays()}
			<button onClick={handleNext}>{'>'}</button>
		</div>
	)
}
