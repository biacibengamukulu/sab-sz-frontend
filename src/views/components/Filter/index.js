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
} from './Filter.styles';
import useAssets from '../../../assets';

const Filter = (props) => {
  const { className, control, watch, onFilter, reset, onlyDate } = props;
  const { useIcons } = useAssets();
  const { iconFilter: IconFilter } = useIcons();

  const { useComponentHooks } = useControllers();
  const { useFilter } = useComponentHooks();
  const { statusList, typeList, filterStatus, hanldeShowFilter } =
    useFilter(watch);

  return (
    <>
      <StyledButtonFilter
        color={'secondary'}
        variant={'outlined'}
        onClick={hanldeShowFilter}
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
        onClick={hanldeShowFilter}
      >
        <>
          <IconFilter />
          <StyledButtonLabelFilter color={'secondary'}>
            Filter
          </StyledButtonLabelFilter>
        </>
      </StyledButtonFilterMobile>
      <StyledContainerFilter className={className} filterStatus={filterStatus}>
        <StyledDateFilter
          label="From"
          id="from"
          name="from"
          control={control}
          type="date"
          placeholder={'dd/mm/yyyy'}

          // value={value}
          // onChange={handleChange}
        />
        <StyledDateFilter
          label="To"
          id="to"
          name="to"
          control={control}
          type="date"

          // value={value}
          // onChange={handleChange}
        />

        {!onlyDate && (
          <StyledSelectFilter
            id={'applicationType'}
            name={'applicationType'}
            label={'Application Type'}
            placeholder={'Select'}
            control={control}
            options={typeList}
            inputValue={'none'}
          />
        )}
        {!onlyDate && (
          <StyledSelectFilter
            id={'status'}
            name={'status'}
            label={'Status'}
            control={control}
            options={statusList}
            inputValue={'none'}
          />
        )}
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
      </StyledContainerFilter>
    </>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  control: PropTypes.any,
  watch: PropTypes.any,
  onFilter: PropTypes.func,
  reset: PropTypes.func,
  onlyDate: PropTypes.bool,
};

Filter.defaultProps = {
  className: '',
  onlyDate: false,
};

export default Filter;
