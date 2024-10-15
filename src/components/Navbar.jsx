import WidgetsIcon from '@mui/icons-material/Widgets'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { CalendarBox } from './CalendarBox'

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

export const DateBox = () => {
	return (
		<div className="w-screen h-60 bg-navbar mt-2 flex flex-col items-center">
			<p className="flex items-center justify-center gap-2 text-xl mt-5">
				<CalendarMonthIcon fontSize="medium"></CalendarMonthIcon>
				{renderMonth()}
			</p>
			<CalendarBox></CalendarBox>
		</div>
	)
}

export default Navbar
