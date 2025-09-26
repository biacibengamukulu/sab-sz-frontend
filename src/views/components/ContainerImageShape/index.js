import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledShape,
  StyledContainerIcon,
  StyledContainerIconMobile,
  StyledInnerContainerIconError,
} from './ContainerImageShape.styles';
import useAssets from '../../../assets';

const ContainerImageShape = (props) => {
  const { scale, type, imageUrl, xOffset, yOffset, className, isHome } = props;
  const { useIcons } = useAssets();
  const { iconSuccess: IconSuccess, iconError: IconError } = useIcons();
  return (
    <>
      <StyledShape className={className} scale={scale} isHome={isHome}>
        {type === 'success' || type === 'error' ? (
          <circle
            cx="60"
            cy="60"
            r="59"
            fill="#FFFFFF"
            stroke={type === 'success' ? '#DDE8DE' : '#F5D2D0'}
            strokeWidth="2"
          />
        ) : (
          <>
            <defs>
              <clipPath id="shape">
                <path
                  fill="none"
                  d="M33.5518 0C45.1748 0.56165 54.4203 2.2466 63.4898 5.4293C77.4902 10.3905 91.579 15.3518 105.579 20.313C109.718 21.7171 113.768 23.2148 117.907 24.6189C120.284 25.4614 120.46 25.7423 119.315 28.1761C115.617 36.5072 112.007 44.8383 108.309 53.1695C103.642 63.8408 99.151 74.6057 94.044 84.9962C89.289 94.731 83.0376 103.437 74.2323 109.522C63.4898 117.01 52.3951 117.197 41.0363 111.207C30.2938 105.59 22.369 96.51 15.7651 86.1195C9.4252 76.1971 4.7584 65.3385 2.1168 53.6375C-0.524804 41.8429 -1.31721 30.0482 3.43759 18.5344C7.04779 9.9225 13.2996 4.3996 21.7527 2.0594C26.3314 0.93609 30.9982 0.46804 33.5518 0Z"
                />
              </clipPath>
            </defs>
            <image
              x={`${xOffset}`}
              y={`${yOffset}`}
              height="116"
              clipPath="url(#shape)"
              xlinkHref={imageUrl}
            ></image>
          </>
        )}
      </StyledShape>
      {(type === 'success' || type === 'error') && (
        <>
          <StyledContainerIcon>
            {type === 'success' ? (
              <StyledInnerContainerIconError>
                <IconSuccess size={1.5} color={'#548C5C'} />
              </StyledInnerContainerIconError>
            ) : (
              <StyledInnerContainerIconError>
                <IconError size={1.5} color={'#CE1F13'} />
              </StyledInnerContainerIconError>
            )}
          </StyledContainerIcon>

          <StyledContainerIconMobile>
            {type === 'success' ? (
              <StyledInnerContainerIconError>
                <IconSuccess size={0.5} color={'#548C5C'} />
              </StyledInnerContainerIconError>
            ) : (
              <StyledInnerContainerIconError>
                <IconError size={0.5} color={'#CE1F13'} />
              </StyledInnerContainerIconError>
            )}
          </StyledContainerIconMobile>
        </>
      )}
    </>
  );
};
ContainerImageShape.propTypes = {
  imageUrl: PropTypes.string,
  xOffset: PropTypes.string,
  yOffset: PropTypes.string,
  className: PropTypes.string,
  isHome: PropTypes.bool,
  /**
   * Type of scale custom shape
   * */
  scale: PropTypes.number,
  type: PropTypes.string,
};

ContainerImageShape.defaultProps = {
  className: '',
  scale: 1,
  imageUrl: '',
  type: '',
  xOffset: '0',
  yOffset: '0',
  isHome: false,
};
export default ContainerImageShape;
