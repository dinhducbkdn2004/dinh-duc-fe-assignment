import type { Message } from '../types';

export const mockMessages: Message[] = [
  {
    id: 'msg-001',
    from: 'Ms. Sarah Williams',
    recipients: ['Michael Brown'],
    subject: 'Art Exhibition Opening',
    content: `Hi [First Name],

Your appointment is confirmed.

Appointment details
• Date: [Day, Month Date, Year]
• Time: [Time] ([Time Zone])
• Host: [Name]
• Meeting type: Video meeting

Join your meeting
Please use this link at the scheduled time:
[Meeting Link]

Before the meeting (2-5 minutes)
1. Join from a quiet, distraction-free place
2. Check your internet connection
3. Have any relevant documents or notes ready

Need to reschedule or cancel?
Please contact us at [Phone] or reply to this email at least 2 hours in advance.

We look forward to speaking with you.

Best regards,
[Your Name]`,
    date: '2025-02-15T10:00:00Z',
    category: 'user-management',
    tags: ['user-management'],
    isRead: true,
  },
  {
    id: 'msg-002',
    from: 'Mr. James Smith',
    recipients: ['Emily Davis'],
    subject: 'Cooking Class Registration',
    content: `Hi [First Name],

Your appointment is confirmed.

Appointment details
• Date: [Day, Month Date, Year]
• Time: [Time] ([Time Zone])
• Host: [Name]
• Meeting type: Video meeting

Join your meeting
Please use this link at the scheduled time:
[Meeting Link]

Before the meeting (2-5 minutes)
1. Join from a quiet, distraction-free place
2. Check your internet connection
3. Have any relevant documents or notes ready

Need to reschedule or cancel?
Please contact us at [Phone] or reply to this email at least 2 hours in advance.

We look forward to speaking with you.

Best regards,
[Your Name]`,
    date: '2025-03-10T14:30:00Z',
    category: 'user-management',
    tags: ['user-management'],
    isRead: true,
  },
  {
    id: 'msg-003',
    from: 'Dr. Rachel Green',
    recipients: ['Thomas Harris'],
    subject: 'Book Club Meeting',
    content: `Dear Team,

This is a friendly reminder about our upcoming meeting.

Meeting Details:
• Date: [Day, Month Date, Year]
• Time: [Time] ([Time Zone])
• Location: Conference Room A
• Duration: 1 hour

Agenda:
1. Review Q4 progress
2. Discuss new initiatives
3. Q&A session

Please confirm your attendance.

Best regards,
Rachel Green`,
    date: '2025-04-05T09:00:00Z',
    category: 'meeting-reminder',
    tags: ['meeting-reminder'],
    isRead: true,
  },
  {
    id: 'msg-004',
    from: 'Ms. Laura White',
    recipients: ['Joshua Miller'],
    subject: 'Photography Workshop',
    content: `Hello Joshua,

We're excited to announce our photography workshop next month!

Workshop highlights:
• Professional photography techniques
• Hands-on practice sessions
• Portfolio review
• Networking opportunities

Limited seats available. Register now!

Regards,
Laura White`,
    date: '2025-05-20T11:15:00Z',
    category: 'general',
    tags: [],
    isRead: true,
  },
  {
    id: 'msg-005',
    from: 'Mr. Daniel Taylor',
    recipients: ['Sophie Wilson'],
    subject: 'Music Festival Tickets',
    content: `Hi Sophie,

Your tickets for the Annual Music Festival are ready!

Event Details:
• Date: June 15, 2025
• Time: 6:00 PM onwards
• Venue: Central Park Arena
• Gates open: 5:00 PM

Please bring this confirmation email and a valid ID.

See you there!
Daniel Taylor`,
    date: '2025-06-15T16:00:00Z',
    category: 'general',
    tags: [],
    isRead: true,
  },
  {
    id: 'msg-006',
    from: 'Ms. Anna Martinez',
    recipients: ['Chris Anderson'],
    subject: 'Dance Class Enrollment',
    content: `Dear Chris,

Thank you for enrolling in our dance classes!

Class Schedule:
• Every Monday & Wednesday
• Time: 7:00 PM - 8:30 PM
• Level: Intermediate
• Instructor: Anna Martinez

First class starts next week. Please arrive 15 minutes early.

Best,
Anna`,
    date: '2025-07-01T19:00:00Z',
    category: 'user-management',
    tags: ['user-management'],
    isRead: true,
  },
  {
    id: 'msg-007',
    from: 'Dr. Robert Lee',
    recipients: ['Olivia Clark'],
    subject: 'Science Fair Judging',
    content: `Dear Olivia,

We're honored to invite you as a judge for our Annual Science Fair.

Event Information:
• Date: August 18, 2025
• Time: 9:00 AM - 4:00 PM
• Location: University Hall
• Lunch provided

Please confirm by August 10th.

Sincerely,
Dr. Robert Lee`,
    date: '2025-08-18T09:00:00Z',
    category: 'meeting-reminder',
    tags: ['meeting-reminder'],
    isRead: true,
  },
  {
    id: 'msg-008',
    from: 'Mr. John Kim',
    recipients: ['Ava Lewis'],
    subject: 'Theater Performance',
    content: `Hi Ava,

Your reservation for "Romeo and Juliet" is confirmed!

Show Details:
• Date: September 10, 2025
• Time: 7:30 PM
• Seats: Row F, Seats 12-13
• Theater: Grand Performance Hall

Doors open at 6:30 PM. Enjoy the show!

John Kim
Box Office Manager`,
    date: '2025-09-10T19:30:00Z',
    category: 'general',
    tags: [],
    isRead: true,
  },
  {
    id: 'msg-009',
    from: 'Ms. Lisa Hall',
    recipients: ['Ethan Young'],
    subject: 'Charity Gala Invitation',
    content: `Dear Ethan,

You're cordially invited to our Annual Charity Gala.

Event Details:
• Date: October 22, 2025
• Time: 6:00 PM - 11:00 PM
• Venue: Grand Hotel Ballroom
• Dress Code: Black Tie

RSVP by October 15th.

All proceeds go to local charities.

Warm regards,
Lisa Hall`,
    date: '2025-10-22T18:00:00Z',
    category: 'meeting-reminder',
    tags: ['meeting-reminder'],
    isRead: true,
  },
  {
    id: 'msg-010',
    from: 'Mr. Kevin Scott',
    recipients: ['Mia Allen'],
    subject: 'Tech Conference Registration',
    content: `Hi Mia,

Welcome to TechConf 2025!

Conference Schedule:
• Day 1: Keynote speeches
• Day 2: Workshop sessions
• Day 3: Networking events

Dates: November 30 - December 2, 2025
Location: Convention Center

Your badge will be available at registration.

See you there!
Kevin Scott`,
    date: '2025-11-30T08:00:00Z',
    category: 'user-management',
    tags: ['user-management'],
    isRead: true,
  },
];
