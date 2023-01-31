import React from "react";

const events = [
{
name: "Bodybuilding Competition",
date: "March 15, 2023",
time: "9:00 AM - 5:00 PM",
location: "123 Main St, Anytown USA",
description: "Join us for our annual bodybuilding competition. Prizes will be awarded to the top male and female competitors. Registration is required. Contact us for more information."
},
{
name: "Yoga Retreat",
date: "April 10-12, 2023",
time: "All Day",
location: "A tranquil retreat center in the mountains",
description: "Take a break from the hustle and bustle of everyday life and join us for a weekend of yoga and relaxation. Our certified yoga instructors will lead you through a variety of practices designed to soothe your mind and body. Space is limited, so sign up today!"
},
{
name: "Fit Fest",
date: "May 22, 2023",
time: "11:00 AM - 4:00 PM",
location: "123 Main St, Anytown USA",
description: "Get ready for a day of fun, fitness, and community at our annual Fit Fest! This free event will feature group fitness classes, healthy food vendors, and activities for the whole family. We can't wait to see you there!"
}
];

function UpcomingEvents() {
return (
<section>
<h2 style={{color:'red', fontSize:'3rem'}}>Upcoming Events</h2>
{events.map((event, index) => (
<div key={index} className="event">
<h2 style={{fontSize:'2rem'}}>{event.name}</h2>
<p>Date: {event.date}</p>
<p>Time: {event.time}</p>
<p>Location: {event.location}</p>
<p>{event.description}</p>
</div>
))}
</section>
);
}

export default UpcomingEvents;