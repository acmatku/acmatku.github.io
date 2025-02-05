import type { Meeting } from "../data/meetings";
import { getFormattedDate } from "../utils/utils";

interface NextMeetingProps {
  meetings: Meeting[]
}

const NextMeeting = ({ meetings }: NextMeetingProps) => {
  const today = new Date();
  const nextMeeting = meetings.filter((meeting) => meeting.date >= today).at(0);

  return (
    nextMeeting && (
      <>
        <p
          className="text-base text-secondary dark:text-yellow-300 font-bold tracking-wide uppercase w-fit mx-auto p-3 text-xl"
        >
          UPCOMING MEETING
        </p>
        <header className="mb-8 p-3 md:mb-16 md:p-8 text-center max-w-3xl mx-auto bg-slate-900 rounded">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest font-heading">
            {nextMeeting.title}
          </h1>
          <p className="p-3 text-lg text-blue-300 font-medium">{getFormattedDate(nextMeeting.date)}</p>
          <p className="mt-2 md:mt-3 mx-auto text-xl text-gray-500 dark:text-slate-400 font-medium">
            {nextMeeting.subtitle}
          </p>
        </header>
      </>
    )
  )
}

export default NextMeeting
