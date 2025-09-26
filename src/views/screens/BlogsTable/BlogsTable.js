import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import {
  StyledSectionMyApplications,
  StyledCotnainerTable,
  StyledContainerSearch,
  StyledButtonSearch,
  StyledButtonSearchDisable,
  StyledTextFieldControlledSearch,
  StyledButtonCreateUser,
  StyledTitleModal,
  StyledSubtitleModal,
  StyledChildContainerModal,
  StyledButtonModal,
  StyledContainerTableActions,
} from './BlogsTable.styles';
import useControllers from '../../../controllers';
import { useForm } from 'react-hook-form';
import useAssets from '../../../assets';

const BlogsTable = () => {
  const { ActivityIndicator, Wrapper, Table, Modal, FilterBlogs } =
    useComponents();
  const { useIcons } = useAssets();
  const { iconSearch: IconSearch } = useIcons();

  const { PrivateContentLayout } = useLayouts();

  // Helpers

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useBlogsTable } = useScreenHooks();

  const {
    control,
    handleSubmit,
    getValues: getValueSearch,
    formState: { isDirty },
  } = useForm({
    mode: 'onChange',
  });

  const {
    control: controlFilter,
    getValues: getValuesFilter,
    reset: resetFilter,
    // formState: { isDirty: isDirtyFilter },
  } = useForm({
    mode: 'onChange',
  });
  const {
    promiseGetBlogsTable,

    columns,
    rows,
    pageSize,
    // totalRows,
    currentPageTable,
    lastPageTable,
    handlePageChange,

    onSearch,
    onFilter,
    handleResetSearch,

    handleRedirectToNewContent,
  } = useBlogsTable();

  return (
    <PrivateContentLayout background="tertiary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionMyApplications>
          <Wrapper title={'Blogs'} maxWidth={'1128px'}>
            <StyledContainerTableActions>
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
                    <IconSearch color={'#D66127'} />
                  </StyledButtonSearch>
                ) : (
                  <StyledButtonSearchDisable onClick={handleSubmit(onSearch)}>
                    <IconSearch color={'#D66127'} />
                  </StyledButtonSearchDisable>
                )}
              </StyledContainerSearch>
              <FilterBlogs
                control={controlFilter}
                onFilter={() => onFilter(getValuesFilter())}
                reset={() => {
                  resetFilter({
                    publish: 'none',
                    start: '',
                    end: '',
                  });
                }}
              />
              <StyledButtonCreateUser
                onClick={handleRedirectToNewContent}
                fullWidth={false}
                color="primary"
              >
                Create New
              </StyledButtonCreateUser>
            </StyledContainerTableActions>

            <StyledCotnainerTable>
              <Table
                loading={promiseGetBlogsTable}
                pagination={true}
                columns={columns}
                rows={rows}
                pageSize={pageSize}
                lastPage={lastPageTable}
                rowsPerPageOptions={[pageSize]}
                onPageChange={handlePageChange}
                currentPage={currentPageTable}
                // onRowClick={handleGetApplicationById}
              />
            </StyledCotnainerTable>
          </Wrapper>
        </StyledSectionMyApplications>

        <Modal
          color={'#FF2D55'}
          type={'child'}
          // showModal={modalStateDisableUser.show}
          // onClose={handleShowModalDisableUser}
        >
          <StyledTitleModal variant={'h2'} color={'error'}>
            Are you sure about disabling this user?
          </StyledTitleModal>

          <StyledSubtitleModal variant={'body1'}>
            {`If you disable it, you won't be able to activate it again!`}
          </StyledSubtitleModal>
          <StyledChildContainerModal>
            <StyledButtonModal
              // onClick={handleDisableUser}
              fullWidth={false}
              sx={{
                fontSize: '16px',
                lineHeight: '22px',
              }}
            >
              YES, DISABLE IT
            </StyledButtonModal>
          </StyledChildContainerModal>
        </Modal>
      </Suspense>
    </PrivateContentLayout>
  );
};

export default BlogsTable;
