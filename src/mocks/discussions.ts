import type { Comment } from '../types';

export const mockDiscussions: Comment[] = [
  {
    id: 'comment-001',
    author: 'User 01',
    authorAvatar: undefined,
    content: 'Hello, how is it going?',
    timestamp: '2025-12-21T17:00:00Z',
    replies: [
      {
        id: 'reply-001-01',
        author: 'User 02',
        authorAvatar: undefined,
        content: "Good, I'm fine.",
        timestamp: '2025-12-18T10:00:00Z',
      },
      {
        id: 'reply-001-02',
        author: 'User 03',
        authorAvatar: undefined,
        content: `I'm not good. I'm having a headaches.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        timestamp: '2025-12-15T14:30:00Z',
      },
    ],
  },
  {
    id: 'comment-002',
    author: 'User 04',
    authorAvatar: undefined,
    content: 'Has anyone reviewed the latest project proposal?',
    timestamp: '2026-01-03T09:15:00Z',
    replies: [
      {
        id: 'reply-002-01',
        author: 'User 05',
        authorAvatar: undefined,
        content: 'Yes, I went through it yesterday. Looks promising!',
        timestamp: '2026-01-03T14:20:00Z',
      },
    ],
  },
  {
    id: 'comment-003',
    author: 'User 06',
    authorAvatar: undefined,
    content: `We need to discuss the timeline for the upcoming release. I think we should schedule a meeting this week.`,
    timestamp: '2026-01-05T11:00:00Z',
    replies: [],
  },
  {
    id: 'comment-004',
    author: 'User 07',
    authorAvatar: undefined,
    content:
      'Quick question about the API documentation - where can I find the authentication section?',
    timestamp: '2026-01-06T15:45:00Z',
    replies: [
      {
        id: 'reply-004-01',
        author: 'User 08',
        authorAvatar: undefined,
        content: "It's in Chapter 3, under Security. I'll send you the direct link.",
        timestamp: '2026-01-06T16:00:00Z',
      },
      {
        id: 'reply-004-02',
        author: 'User 07',
        authorAvatar: undefined,
        content: 'Thanks! Found it.',
        timestamp: '2026-01-06T16:30:00Z',
      },
    ],
  },
  {
    id: 'comment-005',
    author: 'User 09',
    authorAvatar: undefined,
    content:
      'Great work on the new feature everyone! The user feedback has been overwhelmingly positive.',
    timestamp: '2026-01-07T08:30:00Z',
    replies: [
      {
        id: 'reply-005-01',
        author: 'User 10',
        authorAvatar: undefined,
        content: 'Thank you! Team effort really paid off.',
        timestamp: '2026-01-07T09:00:00Z',
      },
    ],
  },
];
