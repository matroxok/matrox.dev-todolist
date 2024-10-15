import React, { useState } from 'react'
import { format, addDays, subDays } from 'date-fns'
import { pl, enUS } from 'date-fns/locale'

const CalendarX = () => {
	// Ustawienia dla dzisiejszej daty jako początkowej
	const [currentDate, setCurrentDate] = useState(new Date())

	// Funkcja do zmiany daty na wcześniejszą
	const handlePrevious = () => {
		setCurrentDate(subDays(currentDate, 1))
	}

	// Funkcja do zmiany daty na późniejszą
	const handleNext = () => {
		setCurrentDate(addDays(currentDate, 1))
	}

	const renderCurrentMonth = () => {
		return format(currentDate, 'MMMM yyyy') // Wyświetlamy pełną nazwę miesiąca i rok, np. "Październik 2024"
	}

	const userLocale = navigator.language

	const getLocale = locale => {
		switch (locale) {
			case 'pl':
			case 'pl-PL':
				return pl // Lokalizacja polska
			case 'en':
			case 'en-US':
				return enUS // Lokalizacja angielska
			default:
				return enUS // Domyślnie angielska
		}
	}

	const locale = getLocale(userLocale)

	// Renderowanie dni tygodnia, w tym wybranego dnia
	const renderDays = () => {
		const days = []
		for (let i = -2; i <= 2; i++) {
			const day = addDays(currentDate, i)
			days.push(
				<div key={i} className={`w-auto h-auto flex flex-col items-center justify-center ${i === 0 ? ' ' : ' '}`}>
					<p className="text-3xl font-bold">{format(day, 'dd')}</p>
					<p className="uppercase justify-self-center text-center font-thin">{format(day, 'EEE', { locale })}</p>
				</div>
			)
		}
		return days
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

export default CalendarX
