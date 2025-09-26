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
  StyledButtonFilterMobile,
  StyledButtonLabelFilter,
  StyledDateFilter,
  // StyledMenu,
  // StyledMenuItem,
  // StyledMenuArrow,
  // StyledMenuRow,
  // StyledTotalApplications,
} from './FilterBlogs.styles';
import useAssets from '../../../assets';

const FilterBlogs = (props) => {
  const { className, control, onFilter, reset } = props;
  const { useIcons } = useAssets();
  const { iconFilter: IconFilter } = useIcons();

  const { useComponentHooks } = useControllers();
  const { useFilterBlogs } = useComponentHooks();
  const { statusList, filterStatus, hanldeShowFilter } = useFilterBlogs();

  return (
    <>
      <StyledButtonFilter
        color={'secondary'}
        variant={'outlined'}
        onClick={hanldeShowFilter}
      >
        <>
          <IconFilter color={'#394D94'} />
          <StyledButtonLabelFilter>Filter</StyledButtonLabelFilter>
        </>
      </StyledButtonFilter>
      <StyledButtonFilterMobile variant="outlined" onClick={hanldeShowFilter}>
        <>
          <IconFilter color={'#5E5C5C'} />
          <StyledButtonLabelFilter color="primary">
            Filter
          </StyledButtonLabelFilter>
        </>
      </StyledButtonFilterMobile>
      <StyledContainerFilter className={className} filterStatus={filterStatus}>
        <StyledDateFilter
          label="From"
          id="start"
          name="start"
          control={control}
          type="date"
          placeholder={'dd/mm/yyyy'}

          // value={value}
          // onChange={handleChange}
        />
        <StyledDateFilter
          label="To"
          id="end"
          name="end"
          control={control}
          type="date"

          // value={value}
          // onChange={handleChange}
        />

        <StyledSelectFilter
          id={'publish'}
          name={'publish'}
          label={'Status'}
          control={control}
          options={statusList}
          inputValue={'none'}
        />
        <div></div>
        <StyledTypographyFilter
          color={'primary'}
          onClick={() => {
            hanldeShowFilter();
            reset();
            onFilter();
          }}
        >
          Reset filters
        </StyledTypographyFilter>
        <StyledButtonApply
          onClick={() => {
            hanldeShowFilter();
            onFilter();
          }}
        >
          Apply Filters
        </StyledButtonApply>
      </StyledContainerFilter>
    </>
  );
};

FilterBlogs.propTypes = {
  className: PropTypes.string,
  control: PropTypes.any,
  onFilter: PropTypes.func,
  reset: PropTypes.func,
};

FilterBlogs.defaultProps = {
  className: '',
  onlyDate: false,
};

export default FilterBlogs;
