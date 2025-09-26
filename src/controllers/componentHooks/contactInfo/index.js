const useContactInfo = () => {
  const goToEmail = 'liquorlicensing@gov.sz';

  const handleRedirectNewPage = (link) => {
    window.open(link);
  };

  return {
    goToEmail,
    handleRedirectNewPage,
  };
};

export default useContactInfo;
