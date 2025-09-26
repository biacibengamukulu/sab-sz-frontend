import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import {
  StyledRenewalsSection,
  StyledWrapperTitleContainer,
  StyledWrapperTitle,
  StyledTotalApplications,
  StyledContainerTable,
  StyledContainerSearch,
  StyledButtonSearch,
  StyledButtonSearchDisable,
  StyledTextFieldControlledSearch,
  StyledInfo,
  StyledTitleModal,
  StyledChildContainerModal,
  StyledDescriptionModal,
  StyledButtonModal
} from './RenewalsTable.styles';
import useControllers from '../../../controllers';
import { useForm } from 'react-hook-form';
import useAssets from '../../../assets';

const RenewalsTable = () => {
  const { ActivityIndicator, Wrapper, Table, Modal } = useComponents();
  const { useIcons } = useAssets();
  const { iconSearch: IconSearch, iconInfo:IconInfo, iconInfoCircle: IconInfoCircle } = useIcons();

  const { PrivateContentLayout } = useLayouts();

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useRenewalsTable } = useScreenHooks();
  const {
    promiseGetApplicationsRenewalsTable,
    promiseGetApplicationById,

    columns,
    rows,
    currentPageTable,
    lastPageTable,
    pageSize,
    totalRows,
    handlePageChange,
    handleGetApplicationById,
    profile,
    onSearch,
   // onFilter,
    handleResetSearch,
    handleModalContinue,
    handleModalClose,
    showModal
  } = useRenewalsTable();

  const {
    control,
    handleSubmit,
    getValues: getValueSearch,
    //reset: resetSearch,
    formState: { isDirty },
  } = useForm({
    mode: 'onChange',
  });

 
  return (
    <PrivateContentLayout background="tertiary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledRenewalsSection>
          {promiseGetApplicationById && <ActivityIndicator />}
          <Wrapper
            title={
              <StyledWrapperTitleContainer>
                <StyledWrapperTitle> License Renewals </StyledWrapperTitle>
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
                placeholder={'BIN Search'}
                onKeyPress={(eve) => {
                  if (!/[0-9]/.test(eve.key)) {
                    eve.preventDefault();
                  }
                }}
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
            </StyledContainerSearch>
            <StyledInfo>
                <IconInfo  /> Before the License renewal process begins, you must Collect and fill health and police forms from the nearest offices
            </StyledInfo>
            <StyledContainerTable>
              <Table
                loading={promiseGetApplicationsRenewalsTable}
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
            </StyledContainerTable>
          </Wrapper>
        </StyledRenewalsSection>

        <Modal  color={'#E46C02'}  type={'child'}  showModal={showModal}  onClose={handleModalClose}  >
          <StyledTitleModal variant={'h2'} color={'#E46C02'}  align={'left'}> Important info! </StyledTitleModal>
          <StyledChildContainerModal>
            <StyledDescriptionModal variant={'body2'}>
            The first step before using this system to renew your license is to ensure that you have collected the Police and Health report forms from your nearest offices.
            </StyledDescriptionModal>
            <IconInfoCircle size={4}  />
            <StyledButtonModal  fullWidth={false}   sx={{ fontSize: '16px', lineHeight: '22px'}} onClick={handleModalContinue} >  Next </StyledButtonModal>
          </StyledChildContainerModal>
        </Modal>

      </Suspense>
    </PrivateContentLayout>
  );
};

export default RenewalsTable;
