import styled from 'styled-components';
import tw from 'twin.macro';
import useAssets from '../../../assets';

import Typography from '../../components/Typography';

const { useIcons } = useAssets();
const {
  iconUsers: IconUsers,
  iconMyAplication: IconMyAplication,
  iconMyProfile: IconMyProfile,
  iconNotification: IconNotification,
  iconLogs: IconLogs,
  iconBlogs: IconBlogs,
} = useIcons();
export const StyledSideMenu = styled.div.attrs({
  className: 'StyledSideMenu',
})`
  && {
    position: relative;
    left: 0;
    width: 194px;
    height: calc(100vh - 80px);
    max-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #394d94;
    z-index: 8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledSideMenuOptions = styled.div.attrs({
  className: 'StyledSideMenuOptions',
})`
  && {
    ${tw` relative`}
    display: flex;
    flex-direction: column;
  }
`;

export const StyledSideMenuItem = styled.div.attrs({
  className: 'StyledSideMenuItem',
})`
  && {
    ${tw` relative`}
    display: grid;
    grid-template-columns: 40px auto;
    align-items: center;
    height: 56px;
    cursor: pointer;
    ${(props) => {
      return `${
        props.isSelected
          ? `
          background: rgba(228, 108, 2, 0.4);

        .StyledTypographyItem {
          color: #ffffff;
        }
        .StyledIconUsers path {
          fill: #ffffff;
        }
        .StyledIconMyAplication path {
          fill: #ffffff;
        }
        .StyledIconMyProfile path {
          fill: #ffffff;
        }
        .StyledIconNotification path {
          fill: #ffffff;
        }
        .StyledIconLogs path {
          fill: #ffffff;
        }
          `
          : ``
      }`;
    }}
    &:hover {
      background: rgba(228, 108, 2, 0.4);
      .StyledTypographyItem {
        color: #ffffff;
      }
      .StyledIconUsers path {
        fill: #ffffff;
      }
      .StyledIconMyAplication path {
        fill: #ffffff;
      }
      .StyledIconMyProfile path {
        fill: #ffffff;
      }
      .StyledIconNotification path {
        fill: #ffffff;
      }
      .StyledIconLogs path {
        fill: #ffffff;
      }
    }
  }
`;

export const StyledIconUsers = styled(IconUsers).attrs({
  className: 'StyledIconUsers',
})`
  && {
    ${tw` relative`}
    justify-self: end;
  }
`;
export const StyledIconMyAplication = styled(IconMyAplication).attrs({
  className: 'StyledIconMyAplication',
})`
  &:hover {
    & path {
      fill: #4c5232;
    }
  }

  && {
    ${tw` relative`}
    justify-self: end;
  }
`;
export const StyledIconMyProfile = styled(IconMyProfile).attrs({
  className: 'StyledIconMyProfile',
})`
  && {
    ${tw` relative`}
    justify-self: end;
  }
`;
export const StyledIconNotification = styled(IconNotification).attrs({
  className: 'StyledIconNotification',
  size: 0.75,
})`
  && {
    ${tw` relative`}
    justify-self: end;
  }
`;
export const StyledIconLogs = styled(IconLogs).attrs({
  className: 'StyledIconLogs',
})`
  && {
    ${tw` relative`}
    justify-self: end;
  }
`;

export const StyledIconBlogs = styled(IconBlogs).attrs({
  className: 'StyledIconBlogs',
})`
  && {
    ${tw` relative`}
    justify-self: end;
  }
`;
export const StyledSideBottomOptions = styled.div.attrs({
  className: 'StyledSideBottomOptions',
})`
  && {
    ${tw` relative`}
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    padding-left: 40px;
  }
`;

export const StyledUserSideMenu = styled.div.attrs({
  className: 'StyledUserSideMenu',
})`
  && {
    font-size: 12px;
    line-height: 17px;
    padding: 27px 16px;
    padding-right: 32px;
  }
`;

export const StyledTypographyItem = styled(Typography).attrs({
  className: 'StyledTypographyItem',
})`
  && {
    color: #ffffff;
    font-size: 12px;
    line-height: 17px;
    padding-left: 16px;
  }
`;

export const StyledTypographyUser = styled(Typography).attrs({
  className: 'StyledTypographyUser',
})`
  && {
    color: #ffffff;
    font-size: 12px;
    line-height: 17px;
  }
`;
