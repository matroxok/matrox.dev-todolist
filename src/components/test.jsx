import { useState } from 'react'
import { format, addDays, subDays } from 'date-fns'
import { monthsInYear } from 'date-fns/constants'

export const DateCarousel = () => {
	// Ustawienia dla dzisiejszej daty jako początkowej
	const [currentDate, currnetMonth, setCurrentDate] = useState(new Date())
	clg

	// Funkcja do zmiany daty na wcześniejszą
	const handlePrevious = () => {
		setCurrentDate(subDays(currentDate, 1))
	}

	// Funkcja do zmiany daty na późniejszą
	const handleNext = () => {
		setCurrentDate(addDays(currentDate, 1))
	}

	const showCurrentMonth = () => {
		currnetMonth(showCurrentMonth)
	}

	// Renderowanie dni tygodnia, w tym wybranego dnia
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

	const renderMonth = () => {
		showCurrentMonth.push(
			<div
				key={i}
				className={`flex flex-col items-center justify-center ${
					i === 0 ? 'text-3xl font-bold' : 'text-lg opacity-50'
				}`}>
				<span>{format(monthsInYear, 'dd')}</span>
			</div>
		)
	}

	return (
		<div className="flex items-center justify-center space-x-6">
			{/* Przycisk do przewijania do tyłu */}
			<button onClick={handlePrevious}>{'<'}</button>

			{/* Renderowanie dni */}
			{renderDays()}

			{/* Przycisk do przewijania do przodu */}
			<button onClick={handleNext}>{'>'}</button>
		</div>
	)
}
