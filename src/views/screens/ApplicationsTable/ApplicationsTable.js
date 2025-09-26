import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import {
  StyledSectionMyApplications,
  StyledWrapperTitleContainer,
  StyledWrapperTitle,
  StyledTotalApplications,
  StyledCotnainerTable,
  StyledCotnainerTableMobile,
  StyledContainerSearch,
  StyledButtonSearch,
  StyledButtonSearchDisable,
  StyledTextFieldControlledSearch,
} from './ApplicationsTable.styles';
import useControllers from '../../../controllers';
import { useForm } from 'react-hook-form';
import useAssets from '../../../assets';

const ApplicationsTable = () => {
  const { ActivityIndicator, Wrapper, Table, Filter } = useComponents();
  const { useIcons } = useAssets();
  const { iconSearch: IconSearch } = useIcons();

  const { PrivateContentLayout } = useLayouts();

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useApplicationsTable } = useScreenHooks();
  const {
    promiseApplicationsTable,
    promiseGetApplicationById,

    columns,
    columnsMobile,
    rows,
    currentPageTable,
    lastPageTable,
    pageSize,
    totalRows,
    handlePageChange,
    handleGetApplicationById,
    handleGetApplicationByIdMobile,
    profile,
    onSearch,
    onFilter,
    handleResetSearch,
  } = useApplicationsTable();

  const {
    control,
    handleSubmit,
    getValues: getValueSearch,
    reset: resetSearch,
    formState: { isDirty },
  } = useForm({
    mode: 'onChange',
  });

  const {
    control: controlFilter,
    getValues,
    reset,
    watch: watchFilter,
    // formState: { isDirty: isDirtyFilter },
  } = useForm({
    mode: 'onChange',
  });
  return (
    <PrivateContentLayout background="tertiary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionMyApplications>
          {promiseGetApplicationById && <ActivityIndicator />}
          <Wrapper
            title={
              <StyledWrapperTitleContainer>
                <StyledWrapperTitle>
                  {profile.roleType.id === 4
                    ? 'My Applications'
                    : 'Applications'}
                </StyledWrapperTitle>
                {profile.roleType.id === 4 && (
                  <StyledTotalApplications>{totalRows}</StyledTotalApplications>
                )}
              </StyledWrapperTitleContainer>
            }
            maxWidth={'1266px'}
          >
            <StyledContainerSearch>
              <StyledTextFieldControlledSearch
                id={'searchField'}
                name={'searchField'}
                placeholder={'Search'}
                onKeyUp={(eve) => {
                  eve.key === 'Enter' && onSearch(getValueSearch());
                }}
                fullWidth={true}
                control={control}
                onInputChange={handleResetSearch}
                sx={{ background: '#F3F5F7', paddingRight: '24px' }}
              />
              {isDirty ? (
                <StyledButtonSearch onClick={handleSubmit(onSearch)}>
                  <IconSearch color={'#E46C02'} />
                </StyledButtonSearch>
              ) : (
                <StyledButtonSearchDisable onClick={handleSubmit(onSearch)}>
                  <IconSearch color={'#E46C02'} />
                </StyledButtonSearchDisable>
              )}

              <Filter
                control={controlFilter}
                watch={watchFilter}
                onFilter={() => onFilter(getValues())}
                reset={() => {
                  reset({
                    from: '',
                    to: '',
                    status: 'none',
                    applicationType: 'none',
                  });
                  resetSearch();
                }}
              />
            </StyledContainerSearch>
            <StyledCotnainerTable>
              <Table
                loading={promiseApplicationsTable}
                pagination={true}
                columns={columns}
                rows={rows}
                pageSize={pageSize}
                lastPage={lastPageTable}
                rowsPerPageOptions={[pageSize]}
                onPageChange={handlePageChange}
                currentPage={currentPageTable}
                onRowClick={handleGetApplicationById}
              />
            </StyledCotnainerTable>
            <StyledCotnainerTableMobile>
              <Table
                loading={promiseApplicationsTable}
                pagination={true}
                columns={columnsMobile}
                rows={rows}
                pageSize={pageSize}
                lastPage={lastPageTable}
                rowsPerPageOptions={[pageSize]}
                onPageChange={handlePageChange}
                currentPage={currentPageTable}
                onRowClick={handleGetApplicationByIdMobile}
              />
            </StyledCotnainerTableMobile>
          </Wrapper>
        </StyledSectionMyApplications>
      </Suspense>
    </PrivateContentLayout>
  );
};

export default ApplicationsTable;
