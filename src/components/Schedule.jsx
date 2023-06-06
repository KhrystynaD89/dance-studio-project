import React from 'react';
import './Schedule.css';

const Schedule = () => {
  return (
    <div className="schedule">
      <h2>Schedule</h2>
      <table className="table">
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <td class="change_color">
            Ballet Beginners <br />
            09:00-10:30
          </td>
          <td></td>
          <td class="change_color">
            Ballet Beginners <br />
            09:00 - 10:30
          </td>
          <td></td>
          <td class="change_color">
            Ballet Beginners <br />
            09:00-10:30
          </td>
          <td class="change_color">
            Ballet Advanced <br />
            11:00 - 12:30
          </td>
          <td class="change_color">
            Floorbarre Gymnastics <br />
            11:00-12:00
          </td>
       
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="change_color">
            Ballet on Pointe <br />
            11:00-12:30
          </td>
          <td class="change_color">
            Ballet on Pointe <br />
            13:00-14:00
          </td>
          <td class="change_color">
            Ballet Intermediate <br />
            12:30 - 14:00
          </td>
        </tr>
        <tr>
          <td></td>
          <td class="change_color">
            Character Dance Beginners <br />
            17:30-19:00
          </td>
          <td></td>
          <td class="change_color">
            Rehearsals for Stage Pefrormances <br />
            (Character dance) <br />
            17:00 - 19:00
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td class="change_color">
            Character Dance Intermediate <br />
            19:30-21:00
          </td>
          <td class="change_color">
            Ballet on Pointe <br />
            19:30-21:00
          </td>
          <td class="change_color">
            Rehearsals for Stage Performances <br />
            (Ballet dance) <br />
            19:00 - 21:00
          </td>
          <td></td>
          <td class="change_color">
            Character Dance Advanced <br />
            19:00-20:30
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Schedule;