import React from 'react';
import propTypes from 'prop-types';
import {
  StyledModal,
  StyledModalContainer,
  StyledShapeContainer,
  StyledCloseIcon,
  StyledModalTitle,
  StyledModalDescription,
  StyledCloseIconMobile,
  StyledModalButtonContainer,
  StyledModalButton,
} from './Modal.styles';
import ContainerImageShape from '../ContainerImageShape';
import useAssets from '../../../assets';

const Modal = (props) => {
  const { showModal, onClose, title, description, type, children, color, isCloseBtn, isBtnAccept } =
    props;

  const { useIcons } = useAssets();
  const { iconClose: IconClose } = useIcons();

  return showModal ? (
    <StyledModal>
      {type === 'child' ? (
        <StyledModalContainer type={type}>
        {isCloseBtn  ? (
          <>
              <StyledCloseIcon onClick={onClose}>  <IconClose size={0.60} color={color} /> </StyledCloseIcon>
              <StyledCloseIconMobile onClick={onClose}> <IconClose size={0.5} color={color} /> </StyledCloseIconMobile>
          </>
        ) : ('') }
          {children}
        </StyledModalContainer>
      ) : (
        <StyledModalContainer type={type}>
        {isCloseBtn  ? ( 
          <>
            <StyledCloseIcon onClick={onClose}>  <IconClose size={0.60} color={type === 'info' ? '#394D94' : (type === 'success' ? '#548C5C' : '#CE1F13')} />  </StyledCloseIcon>
            <StyledCloseIconMobile onClick={onClose}>  <IconClose size={0.5}  color={type === 'info' ? '#394D94' : (type === 'success' ? '#548C5C' : '#CE1F13')}  /> </StyledCloseIconMobile>
          </>
        ) : ('') }

          <StyledModalTitle  variant="h3"  color={ type === 'info' ? '#394D94' : (type === 'success' ? '#548C5C' : '#CE1F13')} >
            {title}
          </StyledModalTitle>
          <StyledModalDescription
            variant="body1"
            color="neutral-90"
            sx={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.006em',
              color: '#494B4D',
            }}
          >
            {description}
          </StyledModalDescription>
          <StyledShapeContainer>
            <ContainerImageShape scale={1.5} type={type} />
          </StyledShapeContainer>
          <StyledModalButtonContainer>
              { isBtnAccept && <StyledModalButton   onClick={onClose}>  Accept </StyledModalButton> }
           </StyledModalButtonContainer>
        </StyledModalContainer>
      )}
    </StyledModal>
  ) : (
    <></>
  );
};

export default Modal;

Modal.propTypes = {
  showModal: propTypes.bool,
  title: propTypes.string,
  description: propTypes.any,
  children: propTypes.any,
  /**
   * type can be: 'success', 'error' or 'child' (use the cildren prop)
   */
  type: propTypes.string,
  color: propTypes.string,
  onClose: propTypes.func.isRequired,
  isCloseBtn: propTypes.bool,
  isBtnAccept: propTypes.bool
};

Modal.defaultProps = {
  showModal: false,
  title: '',
  description: '',
  type: 'success',
  isCloseBtn: true,
  isBtnAccept: false,
  onClose: () => {},
};
