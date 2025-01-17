import '@schedule-x/theme-shadcn/dist/index.css';

import { formatTasks } from '@/lib/utils';
import { useEffect, useState } from 'react';
import useAuthData from '@/hooks/useAuthData';
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createEventsServicePlugin } from '@schedule-x/events-service';
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react';
import { createViewDay, createViewMonthGrid, createViewWeek } from '@schedule-x/calendar';

const CalendarRoute = () => {
  const { user } = useAuthData();  
  
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    if (user && user.tasks) {
      const formattedTasks = formatTasks(user.tasks);
      setTasks(formattedTasks);
    }
  }, [user]);

  const eventsService = createEventsServicePlugin();
  
  const calendar = useCalendarApp({
    theme: 'shadcn',
    views: [createViewDay(), createViewWeek(), createViewMonthGrid()],
    events: tasks, 
    plugins: [eventsService, createEventModalPlugin()],
  });

  return (
    <div className="flex-col-5 p-3 px-5">
      <div className="flex-between mt-3">
        <h1 className="font-bold text-4xl">
         Your tasks as a tenant
        </h1>
      </div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};

export default CalendarRoute;
