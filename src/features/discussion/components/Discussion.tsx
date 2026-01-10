import { Comment } from './Comment';
import { Reply } from './Reply';
import { DiscussionInput } from './DiscussionInput';
import { useDiscussionState } from '@/hooks/useDiscussionState';
import { useUser } from '@/contexts';
import type { Comment as CommentType } from '@/types/discussion';

interface DiscussionProps {
  initialComments: CommentType[];
}

export const Discussion = ({ initialComments }: DiscussionProps) => {
  const { currentUser } = useUser();
  const {
    sortedComments,
    editingCommentId,
    editingReply,
    replyingToCommentId,
    showNewCommentInput,
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
    lastCreatedCommentId,
  } = useDiscussionState(initialComments);

  const handleSubmitComment = async (content: string) => {
    if (editingCommentId) {
      await editComment(editingCommentId, content);
    } else {
      await addComment(content);
    }
  };

  const handleSubmitReply = async (content: string, commentId?: string) => {
    if (!commentId) return;

    if (editingReply && editingReply.commentId === commentId) {
      await editReply(commentId, editingReply.replyId, content);
    } else {
      await addReply(commentId, content);
    }
  };

  return (
    <div className='h-full flex flex-col'>
      <div className='flex-1 overflow-y-auto'>
        <div className='p-6 max-w-4xl mx-auto space-y-6'>
          {sortedComments.map((comment) => {
            const isEditingThisComment = editingCommentId === comment.id;
            const isReplyingToThisComment = replyingToCommentId === comment.id;

            return (
              <div key={comment.id}>
                {isEditingThisComment ? (
                  <DiscussionInput
                    variant='comment'
                    placeholder='Edit comment...'
                    initialValue={comment.content}
                    onSubmit={handleSubmitComment}
                    onCancel={cancelAllActions}
                  />
                ) : (
                  <>
                    <Comment
                      comment={comment}
                      currentUserId={currentUser.name}
                      onEdit={startEditingComment}
                      onDelete={deleteComment}
                      onReply={startReplyingToComment}
                      scrollToNewlyCreated={comment.id === lastCreatedCommentId}
                    />

                    {comment.replies.length > 0 && (
                      <div className='ml-11'>
                        {comment.replies.map((reply) => {
                          const isEditingThisReply =
                            editingReply?.commentId === comment.id &&
                            editingReply?.replyId === reply.id;

                          return (
                            <div key={reply.id}>
                              {isEditingThisReply ? (
                                <DiscussionInput
                                  variant='reply'
                                  commentId={comment.id}
                                  initialValue={reply.content}
                                  placeholder='Edit reply...'
                                  onSubmit={handleSubmitReply}
                                  onCancel={cancelAllActions}
                                  showConnector
                                />
                              ) : (
                                <Reply
                                  reply={reply}
                                  currentUserId={currentUser.name}
                                  onEdit={(replyId) => startEditingReply(comment.id, replyId)}
                                  onDelete={(replyId) => deleteReply(comment.id, replyId)}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {isReplyingToThisComment && (
                      <div className='ml-11'>
                        <DiscussionInput
                          variant='reply'
                          commentId={comment.id}
                          placeholder='Reply...'
                          onSubmit={handleSubmitReply}
                          onCancel={cancelAllActions}
                          showConnector
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}

          {showNewCommentInput && (
            <DiscussionInput
              variant='comment'
              placeholder='Add new comments'
              onSubmit={handleSubmitComment}
              onCancel={cancelAllActions}
            />
          )}
        </div>
      </div>
    </div>
  );
};
