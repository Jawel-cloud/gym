import React from 'react';

const Classes = () => {
const classes = [
{
name: "Yoga",
description: "Yoga is a form of exercise that uses physical postures and breathing techniques to help improve physical health, reduce stress and promote relaxation.",
schedule: "Monday, Wednesday, Friday at 9:00am"
},
{
name: "Pilates",
description: "Pilates is a form of exercise that focuses on strengthening and toning the core muscles, improving posture, and promoting balance and flexibility.",
schedule: "Tuesday, Thursday, Saturday at 11:00am"
},
{
name: "Zumba",
description: "Zumba is a high-energy dance fitness class that combines Latin and international music with dance moves to provide a fun and effective workout.",
schedule: "Sunday, Monday, Wednesday at 7:00pm"
},
{
name: "Kickboxing",
description: "Kickboxing is a high-energy martial arts-inspired workout that combines punches, kicks, and aerobic exercises to help improve cardiovascular health and build strength.",
schedule: "Tuesday, Thursday at 6:00pm"
},
{
name: "Crossfit",
description: "Crossfit is a high-intensity workout program that incorporates a mix of strength training, cardio, and gymnastics exercises to help build strength and improve overall fitness.",
schedule: "Monday, Wednesday, Friday at 5:00pm"
},
{
name: "Dance",
description: "Dance is a fun and energetic workout that combines different styles of dance with high-energy music to provide a fun and effective workout.",
schedule: "Saturday at 2:00pm"
}
];

return (
    <section>
<div className="classes-container container">
<h2>Our Classes</h2>
<div className="classes-list">
{classes.map((classItem, index) => (
<div key={index} className={`class-item-container ${classItem.name}`}>
    <div className='class-item'>
<h3 className="class-item-title">{classItem.name}</h3>
<p className="class-item-description">{classItem.description}</p>
<p className="class-item-schedule">{classItem.schedule}</p>
</div>
</div>
))}
</div>
</div>
</section>
);
};

export default Classes;
