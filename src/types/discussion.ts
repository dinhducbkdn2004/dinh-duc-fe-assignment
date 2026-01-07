export interface Reply {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  timestamp: string;
}

export interface Comment {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  timestamp: string;
  replies: Reply[];
}

export interface ReplyFormData {
  commentId: string;
  content: string;
}
