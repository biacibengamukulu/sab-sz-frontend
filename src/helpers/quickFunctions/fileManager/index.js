import useModels from '../../../models';

const useFileManager = () => {
  const fileTypesPdf = ['application/pdf'];
  // Models
  const { useSelectors } = useModels();
  const { useSelector, useApplicationFormSelectors } = useSelectors();
  const { draftBlankPdfSelector } = useApplicationFormSelectors();
  const { blankPdf } = useSelector(draftBlankPdfSelector);

  const onChangeFilePdf = ({ event, remove, reset, id }) => {
    event.preventDefault();
    if (event.target.files.length > 0) {
      const { type } = event.target.files[0];
      if (!fileTypesPdf.some((s) => type.includes(s))) {
        alert('invalid document type');
        remove(reset, id);
      } else {
        if (event.target.files[0].size > 2000000) {
          alert('Document too large, please try again with 2MB or less');
          remove(reset, id);
        }
      }
    }
  };

  const handleFileNameExtension = (fileObject) => {
    const fileObjectWithoutExtension = fileObject
      ? {
          name: fileObject?.name
            ? fileObject.name.replace(/\.[^/.]+$/, '')
            : '',
          data: fileObject?.data
            ? fileObject.data
            : fileObject.name
            ? blankPdf
            : '',
        }
      : { name: '', data: '' };
    return fileObjectWithoutExtension;
  };
  return {
    handleFileNameExtension,
    fileTypesPdf,
    onChangeFilePdf,
  };
};
export default useFileManager;
