
import { Calendar } from '@fullcalendar/core'
import ICalendar from '@fullcalendar/icalendar'
import timeGridPlugin from '@fullcalendar/timegrid'
import momentTimezonePlugin from '@fullcalendar/moment-timezone';

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new Calendar(calendarEl, {
        plugins: [ICalendar, timeGridPlugin, momentTimezonePlugin],
        initialView: 'timeGridWeek',
        events: {
            url: 'test.ics',
            format: 'ics'
        },
        views: {
            timeGridWeek: {
                nowIndicator: true,
                scrollTime: '09:00:00'
            }
        },
        eventClick: function (info) {
            console.log(info);
        }
    });
    calendar.render();
});

