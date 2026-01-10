import { useState, useCallback, useMemo } from 'react';
import { useUser } from '@/contexts';
import type { Comment, Reply } from '@/types/discussion';

interface EditingReply {
  commentId: string;
  replyId: string;
}

interface UseDiscussionStateReturn {
  comments: Comment[];
  sortedComments: Comment[];
  editingCommentId: string | null;
  editingReply: EditingReply | null;
  replyingToCommentId: string | null;
  showNewCommentInput: boolean;
  lastCreatedCommentId: string | null;

  addComment: (content: string) => Promise<void>;
  editComment: (commentId: string, content: string) => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;

  addReply: (commentId: string, content: string) => Promise<void>;
  editReply: (commentId: string, replyId: string, content: string) => Promise<void>;
  deleteReply: (commentId: string, replyId: string) => Promise<void>;

  startEditingComment: (commentId: string) => void;
  startEditingReply: (commentId: string, replyId: string) => void;
  startReplyingToComment: (commentId: string) => void;
  cancelAllActions: () => void;
  showNewCommentForm: () => void;

  getCommentById: (commentId: string) => Comment | undefined;
  getReplyById: (commentId: string, replyId: string) => Reply | undefined;
}

export const useDiscussionState = (initialComments: Comment[]): UseDiscussionStateReturn => {
  const { currentUser } = useUser();
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingReply, setEditingReply] = useState<EditingReply | null>(null);
  const [replyingToCommentId, setReplyingToCommentId] = useState<string | null>(null);
  const [showNewCommentInput, setShowNewCommentInput] = useState(true);

  const [lastCreatedCommentId, setLastCreatedCommentId] = useState<string | null>(null);

  const sortedComments = useMemo(() => {
    return [...comments].sort((a, b) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
  }, [comments]);

  const addComment = useCallback(
    async (content: string) => {
      const newId = `comment-${Date.now()}`;
      const newComment: Comment = {
        id: newId,
        author: currentUser.name,
        authorAvatar: currentUser.avatar,
        content,
        timestamp: new Date().toISOString(),
        replies: [],
      };
      setComments((prev) => [newComment, ...prev]);
      setLastCreatedCommentId(newId);
      setShowNewCommentInput(true);
    },
    [currentUser.name, currentUser.avatar],
  );

  const editComment = useCallback(async (commentId: string, content: string) => {
    setComments((prev) =>
      prev.map((comment) => (comment.id === commentId ? { ...comment, content } : comment)),
    );
    setEditingCommentId(null);
    setShowNewCommentInput(true);
  }, []);

  const deleteComment = useCallback(async (commentId: string) => {
    if (confirm('Are you sure you want to delete this comment?')) {
      setComments((prev) => prev.filter((comment) => comment.id !== commentId));
    }
  }, []);

  const addReply = useCallback(
    async (commentId: string, content: string) => {
      const newReply: Reply = {
        id: `reply-${Date.now()}`,
        author: currentUser.name,
        authorAvatar: currentUser.avatar,
        content,
        timestamp: new Date().toISOString(),
      };
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId
            ? { ...comment, replies: [...comment.replies, newReply] }
            : comment,
        ),
      );
      setReplyingToCommentId(null);
      setShowNewCommentInput(true);
    },
    [currentUser.name, currentUser.avatar],
  );

  const editReply = useCallback(async (commentId: string, replyId: string, content: string) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === replyId ? { ...reply, content } : reply,
              ),
            }
          : comment,
      ),
    );
    setEditingReply(null);
    setShowNewCommentInput(true);
  }, []);

  const deleteReply = useCallback(async (commentId: string, replyId: string) => {
    if (confirm('Are you sure you want to delete this reply?')) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId
            ? { ...comment, replies: comment.replies.filter((reply) => reply.id !== replyId) }
            : comment,
        ),
      );
    }
  }, []);

  const startEditingComment = useCallback((commentId: string) => {
    setEditingCommentId(commentId);
    setReplyingToCommentId(null);
    setEditingReply(null);
    setShowNewCommentInput(false);
  }, []);

  const startEditingReply = useCallback((commentId: string, replyId: string) => {
    setEditingReply({ commentId, replyId });
    setReplyingToCommentId(null);
    setEditingCommentId(null);
    setShowNewCommentInput(false);
  }, []);

  const startReplyingToComment = useCallback((commentId: string) => {
    setReplyingToCommentId(commentId);
    setEditingCommentId(null);
    setEditingReply(null);
    setShowNewCommentInput(false);
  }, []);

  const cancelAllActions = useCallback(() => {
    setEditingCommentId(null);
    setEditingReply(null);
    setReplyingToCommentId(null);
    setShowNewCommentInput(true);
  }, []);

  const showNewCommentForm = useCallback(() => {
    setShowNewCommentInput(true);
  }, []);

  const getCommentById = useCallback(
    (commentId: string) => {
      return comments.find((comment) => comment.id === commentId);
    },
    [comments],
  );

  const getReplyById = useCallback(
    (commentId: string, replyId: string) => {
      const comment = comments.find((c) => c.id === commentId);
      return comment?.replies.find((reply) => reply.id === replyId);
    },
    [comments],
  );

  return {
    comments,
    sortedComments,
    editingCommentId,
    editingReply,
    replyingToCommentId,
    showNewCommentInput,
    lastCreatedCommentId,

    addComment,
    editComment,
    deleteComment,

    addReply,
    editReply,
    deleteReply,

    startEditingComment,
    startEditingReply,
    startReplyingToComment,
    cancelAllActions,
    showNewCommentForm,

    getCommentById,
    getReplyById,
  };
};
