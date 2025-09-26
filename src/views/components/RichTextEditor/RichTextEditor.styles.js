// Packages
import styled from 'styled-components';
import tw from 'twin.macro';
import { Editor } from 'react-draft-wysiwyg';
import CaretDown from '../../../assets/images/CaretDown.png';
import CaretUp from '../../../assets/images/CaretUp.png';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// Components
import { FormHelperText } from '@mui/material';
export const StyledRichTextEditorContainer = styled.div.attrs({
  className: 'StyledRichTextEditorContainer StyledTypographyBook',
})`
  & {
    ${tw` relative`}
    .StyledToolbar {
      ${tw` relative flex`}
      min-height: 64px;
      margin: 0;
      padding: 8px 16px;
      column-gap: 24px;
      align-items: center;
      background: #ffffff;
      border: 1px solid #dae0e8;
      box-sizing: border-box;
      border-radius: 8px 8px 0px 0px;

      // Text type style
      .rdw-block-wrapper {
        ${tw` relative flex`}
        margin: 0;
        width: 240px;
        height: 44px;
        background: #f3f5f7;
        border: 1px solid #dae0e8;
        box-sizing: border-box;
        border-radius: 4px;
        .rdw-dropdown-selectedtext {
          &:hover {
            border: none;
          }
        }
        .rdw-dropdown-wrapper {
          width: 240px;
          height: 44px;
          margin: 0;
          border: none;
          background: transparent;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.006em;
          color: #6d7074;

          &:hover {
            box-shadow: none;
            background-color: transparent;
          }

          .rdw-dropdown-selectedtext {
            justify-content: space-between;
            height: 44px;
            padding: 0 16px;

            .rdw-dropdown-carettoopen {
              ${tw` relative`}
              width: 16px;
              height: 16px;
              top: 0;
              right: 0;
              border: none;
              background-image: url(${CaretDown});
            }
            .rdw-dropdown-carettoclose {
              ${tw` relative`}
              width: 16px;
              height: 16px;
              top: 0;
              right: 0;
              border: none;
              background-image: url(${CaretUp});
            }
          }

          .rdw-dropdown-optionwrapper {
            width: 240px;
            overflow: hidden;
            border-radius: 0px 0px 4px 4px;

            &:hover {
              box-shadow: none;
              background-color: #ffffff;
            }
          }
        }
      }
    }
    // Text inline style
    .rdw-inline-wrapper {
      height: 44px;
      column-gap: 3px;
      margin: 0;
    }

    // Text list style
    .rdw-list-wrapper {
      height: 44px;
      column-gap: 3px;
      margin: 0;
    }

    // Text list style
    .rdw-text-align-wrapper {
      height: 44px;
      column-gap: 3px;
      margin: 0;
    }
    // Text list style
    .rdw-link-wrapper {
      height: 44px;
      column-gap: 3px;
      margin: 0;
    }

    // Text history style
    .rdw-history-wrapper {
      height: 44px;
      column-gap: 3px;
      margin: 0;
    }

    // For All inline options
    .rdw-option-wrapper {
      width: 26px;
      height: 44px;
      margin: 0;
      border: none;
      &:hover {
        box-shadow: none;
        background: #f3f5f7;
      }
    }
    .rdw-option-active {
      width: 26px;
      height: 44px;
      margin: 0;
      border: none;
      borer-radius: 2px;
      box-shadow: none;
      background: #f3f5f7;
    }

    .rdw-link-modal {
      min-height: 100% !important;
    }

    // Editor styles
    .StyledWrapper .StyledInnerEditor {
      min-height: 256px;
      max-height: 520px;
      padding: 16px 8px;
      border: 1px solid #dae0e8;
      border-radius: 0px 0px 8px 8px;
      font-family: 'GothamRnd-Book' !important;
      font-weight: 400 !important;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.006em;
      color: #2c2d2e;

      .public-DraftStyleDefault-block {
        margin: 0px;
      }

      ul {
        list-style-type: disc !important;
      }
      ol {
        list-style-type: decimal !important;
      }
      span {
        font-size: 12px !important;
        line-height: 18px !important;
      }
      p {
        span {
          font-size: 12px !important;
          line-height: 18px !important;
        }
      }
      h1 {
        span {
          font-family: 'GothamRnd-Bold' !important;
          font-weight: 400 !important;
          font-size: 32px !important;
          line-height: 42px !important;
          color: #494b4d !important;
        }
      }

      h2 {
        span {
          font-family: 'GothamRnd-Bold' !important;
          font-weight: 400 !important;
          font-size: 24px !important;
          line-height: 32px !important;
          letter-spacing: -0.021em !important;
          color: #494b4d !important;
        }
      }

      h3 {
        span {
          font-family: 'GothamRnd-Bold' !important;
          font-weight: 400 !important;
          font-size: 18px !important;
          line-height: 24px !important;
          letter-spacing: -0.017em !important;
          color: #494b4d !important;
        }
      }
    }
  }
`;

export const StyledEditor = styled(Editor).attrs({
  className: 'StyledEditor',
})`
  & {
    ${tw` relative`}
  }
`;

export const StyledToolbarContainer = styled.div.attrs({
  className: 'StyledToolbarContainer',
})`
  & {
    ${tw` relative`}
  }
`;

export const StyledFormHelperText = styled(FormHelperText).attrs({
  className: 'errorInputLabel',
})`
  color: #ff2d55 !important;
`;
