import { AttachmentHeader, AttachmentList, AttachmentUpload } from '@/features/attachments';
import { useAttachments, useFileUpload } from '@/hooks';
import { Pagination } from '@/components/ui';

const AttachmentsPage = () => {
  const {
    currentAttachments,
    attachments,
    currentPage,
    itemsPerPage,
    totalPages,
    handlePageChange,
    handleItemsPerPageChange,
    handleDownloadAll,
    deleteOne,
    addAttachments,
  } = useAttachments();

  const {
    isDragging,
    fileInputRef,
    onDragOver,
    onDragLeave,
    onDrop,
    handleFileUpload,
    triggerFileInput,
  } = useFileUpload({
    onUpload: addAttachments,
  });

  const safeFileInputRef = fileInputRef as React.RefObject<HTMLInputElement>;

  return (
    <div className='h-full flex flex-col bg-background'>
      <AttachmentHeader onUploadClick={triggerFileInput} onDownloadAll={handleDownloadAll} />

      <div className='flex-1 flex flex-col min-h-0 bg-muted/10'>
        <div className='flex-1 min-h-0 flex flex-col'>
          <AttachmentList attachments={currentAttachments} onDeleteOne={deleteOne} />
        </div>

        <AttachmentUpload
          isDragging={isDragging}
          fileInputRef={safeFileInputRef}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onFileInputChange={handleFileUpload}
          triggerFileInput={triggerFileInput}
        />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={attachments.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default AttachmentsPage;
