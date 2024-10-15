import React, { useState } from 'react'
import { format, addDays, subDays } from 'date-fns'
import { pl } from 'date-fns/locale'
import WidgetsIcon from '@mui/icons-material/Widgets'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const Navbar = () => {
	return (
		<>
			<div className="w-screen min-h-16 bg-navbar grid grid-cols-3 items-center">
				<WidgetsIcon className="justify-self-start ml-10"></WidgetsIcon>
				<p className="justify-self-center break-words text-center overflow-hidden max-w-full">
					Witaj, <span className="font-bold">username</span>
				</p>
				<NotificationsActiveIcon className="justify-self-end mr-10"></NotificationsActiveIcon>
			</div>
		</>
	)
}

const polishMonths = {
	stycznia: 'Styczeń',
	lutego: 'Luty',
	marca: 'Marzec',
	kwietnia: 'Kwiecień',
	maja: 'Maj',
	czerwca: 'Czerwiec',
	lipca: 'Lipiec',
	sierpnia: 'Sierpień',
	września: 'Wrzesień',
	października: 'Październik',
	listopada: 'Listopad',
	grudnia: 'Grudzień',
}

export const DateBox = () => {
	const [currentDate] = useState(new Date())

	const renderCurrentMonth = () => {
		const formattedDate = format(currentDate, 'MMMM yyyy', { locale: pl })
		const [month, year] = formattedDate.split(' ')
		const correctedMonth = polishMonths[month || month]
		return `${correctedMonth} ${year}`
	}

	return (
		<div className="w-screen h-60 bg-navbar mt-2 flex flex-col items-center">
			<p className="flex items-center justify-center gap-2 text-xl mt-5">
				<CalendarMonthIcon fontSize="medium"></CalendarMonthIcon>
				{renderCurrentMonth()}
			</p>
			{/* <CalendarBox></CalendarBox> */}
		</div>
	)
}

export default Navbar
