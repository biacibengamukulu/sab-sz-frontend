const useTycInfo = () => {
  const goToTC = 'https://www.google.com/';
  const goToPP = 'https://www.google.com/';

  const handleRedirectNewPage = (link) => {
    window.open(link, '_blank');
  };

  return {
    goToTC,
    goToPP,
    handleRedirectNewPage,
  };
};

export default useTycInfo;
