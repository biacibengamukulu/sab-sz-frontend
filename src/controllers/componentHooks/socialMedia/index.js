const useSocialMedia = () => {
  const goToFacebook = 'https://www.facebook.com/profile.php?id=61556906246804&mibextid=LQQJ4d/';
  const goToTwitter = 'https://x.com/EswatiniGovern1?t=r74pII7h9oTvMgzDZfUWZg&s=08';
  const goToInstagram = 'https://www.instagram.com/';
  const goToWhatsapp = 'https://www.whatsapp.com/';
  const goToGov = 'https://www.gov.sz/';

  const handleRedirectNewPage = (link) => {
    window.open(link, '_blank');
  };

  return {
    goToFacebook,
    goToTwitter,
    goToInstagram,
    goToWhatsapp,
    goToGov,
    handleRedirectNewPage,
  };
};

export default useSocialMedia;
