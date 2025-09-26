import React from 'react';
import PropTypes from 'prop-types';
// import useAssets from '../../../assets';
import useControllers from '../../../controllers';
// Styles
import {
  StyledContainerFilter,
  StyledTypographyFilter,
  StyledButtonApply,
  StyledButtonFilter,
  StyledButtonFilterMobile,
  StyledButtonLabelFilter,
  StyledDateFilter,
  StyledSelectFilter,
  StyledContainerRow,
} from './FilterRenew.styles';
import useAssets from '../../../assets';

const FilterRenewals = (props) => {
  const { className, control, watch, onFilter, reset } = props;
  const { useIcons } = useAssets();
  const { iconFilter: IconFilter } = useIcons();

  const { useComponentHooks } = useControllers();
  const { useFilterRenew } = useComponentHooks();
  const { filterStatus, statusList, handleShowFilter } = useFilterRenew(watch);



  return (
    <>
      <StyledButtonFilter
        color={'secondary'}
        variant={'outlined'}
        onClick={handleShowFilter}
      >
        <>
          <IconFilter />
          <StyledButtonLabelFilter color={'secondary'}>
            Filter
          </StyledButtonLabelFilter>
        </>
      </StyledButtonFilter>
      <StyledButtonFilterMobile
        color={'secondary'}
        variant={'outlined'}
        onClick={handleShowFilter}
      >
        <>
          <IconFilter />
          <StyledButtonLabelFilter color={'secondary'}>
            FilterRenew
          </StyledButtonLabelFilter>
        </>
      </StyledButtonFilterMobile>
      <StyledContainerFilter className={className} filterStatus={filterStatus}>
        <StyledContainerRow>
            <StyledDateFilter
              label="From"
              id="from"
              name="from"
              control={control}
              type="date"
              placeholder={'dd/mm/yyyy'}
            />
            <StyledDateFilter
              label="To"
              id="to"
              name="to"
              control={control}
              type="date"
            />
        </StyledContainerRow>

        <StyledContainerRow>
            <StyledSelectFilter
                id={'status'}
                name={'status'}
                label={'Status'}
                control={control}
                options={statusList}
                inputValue={'none'}
              />
          </StyledContainerRow>

        <StyledContainerRow>
          <StyledTypographyFilter
            color={'secondary'}
            onClick={() => {
              handleShowFilter();
              reset();
              onFilter();
            }}
          >
            Reset filters
          </StyledTypographyFilter>
          <StyledButtonApply
            color={'secondary'}
            onClick={() => {
              handleShowFilter();
              onFilter();
            }}
          >
            Apply Filters
          </StyledButtonApply>
        </StyledContainerRow>
      </StyledContainerFilter>
    </>
  );
};

FilterRenewals.propTypes = {
  className: PropTypes.string,
  control: PropTypes.any,
  watch: PropTypes.any,
  onFilter: PropTypes.func,
  reset: PropTypes.func,
  onlyDate: PropTypes.bool,
};

FilterRenewals.defaultProps = {
  className: '',
  onlyDate: false,
};

export default FilterRenewals;
