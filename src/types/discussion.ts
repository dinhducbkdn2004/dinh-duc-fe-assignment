export interface Reply {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  timestamp: string; // ISO 8601 format
}

export interface Comment {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  timestamp: string; // ISO 8601 format
  replies: Reply[];
}

export interface ReplyFormData {
  commentId: string;
  content: string;
}
