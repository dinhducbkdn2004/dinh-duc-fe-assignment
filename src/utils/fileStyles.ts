export const getFileIconColor = (type: string) => {
  switch (type) {
    case 'PDF':
      return 'bg-[#FFBFC4] text-[#BE4952]';
    case 'DOC':
    case 'DOCX':
      return 'bg-[#C7E3FF] text-[#5F96CF]';
    case 'XLS':
    case 'XLSX':
      return 'bg-[#D3F2D2] text-[#6C956B]';
    case 'PNG':
    case 'JPG':
      return 'bg-purple-100 text-purple-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};
