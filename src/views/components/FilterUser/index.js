import React from 'react';
import PropTypes from 'prop-types';
// import useAssets from '../../../assets';
import useControllers from '../../../controllers';
// Styles
import {
  StyledContainerFilter,
  StyledSelectFilter,
  StyledTypographyFilter,
  StyledButtonApply,
  StyledButtonFilter,
  // StyledButtonFilterMobile,
  StyledButtonLabelFilter,
  StyledBottomContainer,
} from './FilterUser.styles';
import useAssets from '../../../assets';

const FilterUser = (props) => {
  const { className, control, onFilter, reset } = props;
  const { useIcons } = useAssets();
  const { iconFilter: IconFilter } = useIcons();

  const { useComponentHooks } = useControllers();
  const { useFilterUser } = useComponentHooks();
  const { userRolesListSelect, filterStatus, hanldeShowFilter } =
    useFilterUser();

  return (
    <>
      <StyledButtonFilter
        color={'secondary'}
        variant={'outlined'}
        onClick={hanldeShowFilter}
      >
        <IconFilter />
        <StyledButtonLabelFilter color={'secondary'}>
          Filter
        </StyledButtonLabelFilter>
      </StyledButtonFilter>
      <StyledContainerFilter className={className} filterStatus={filterStatus}>
        <StyledSelectFilter
          id={'roleId'}
          name={'roleId'}
          label={'User Type'}
          placeholder={'Select'}
          control={control}
          options={userRolesListSelect}
          inputValue={'none'}
        />
        <StyledBottomContainer>
          <StyledTypographyFilter
            color={'secondary'}
            onClick={() => {
              hanldeShowFilter();
              reset();
              onFilter();
            }}
          >
            Reset filters
          </StyledTypographyFilter>
          <StyledButtonApply
            color={'secondary'}
            onClick={() => {
              hanldeShowFilter();
              onFilter();
            }}
          >
            Apply Filters
          </StyledButtonApply>
        </StyledBottomContainer>
      </StyledContainerFilter>
    </>
  );
};

FilterUser.propTypes = {
  className: PropTypes.string,
  control: PropTypes.any,
  onFilter: PropTypes.func,
  reset: PropTypes.func,
};

export default FilterUser;
