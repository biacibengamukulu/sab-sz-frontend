import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCardBlog,
  StyledContainerImage,
  StyledDescriptionContainer,
  StyledCardBlogTitle,
  StyledCardBlogDescription,
  StyledCardBlogCallToActionContainer,
  StyledCardBlogCallToActionLabel,
} from './CardBlogPreview.styles';
import useAssets from '../../../assets';
// import Button from '../Buttons';
const CardBlogPreview = (props) => {
  const { className, image, title, description, onClick } = props;

  const { useIcons } = useAssets();
  const { iconArrowLearnMore: IconArrowLearnMore } = useIcons();
  return (
    <StyledCardBlog className={className}>
      <StyledContainerImage style={{ backgroundImage: `url(${image})` }} />

      <StyledDescriptionContainer>
        <StyledCardBlogTitle>{title}</StyledCardBlogTitle>
        <StyledCardBlogDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <StyledCardBlogCallToActionContainer onClick={onClick}>
          <StyledCardBlogCallToActionLabel>
            Learn More
          </StyledCardBlogCallToActionLabel>
          <IconArrowLearnMore color={'#455DB2'} />
        </StyledCardBlogCallToActionContainer>
      </StyledDescriptionContainer>
    </StyledCardBlog>
  );
};
CardBlogPreview.propTypes = {
  className: PropTypes.string,
  image: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * Type of scale custom shape
   * */
};

CardBlogPreview.defaultProps = {
  className: '',
  onClick: () => {},
  title: '',
};
export default CardBlogPreview;
