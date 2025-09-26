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
  StyledFieldsContainer,
  StyledChildContainerModal,
  StyledButtonCreateUserModal,
  StyledButtonModal,
  StyledFieldRowHidden,
  StyledPhoneInputField,
  StyledContainerTableActions,
} from './UsersTable.styles';
import useControllers from '../../../controllers';
import { useForm } from 'react-hook-form';
import useAssets from '../../../assets';
import { yupResolver } from '@hookform/resolvers/yup';
import useHelpers from '../../../helpers';

const UsersTable = () => {
  const {
    ActivityIndicator,
    Wrapper,
    Table,
    Modal,
    TextFieldControlled,
    SelectFieldControlled,
    FilterUser,
  } = useComponents();
  const { useIcons } = useAssets();
  const { iconSearch: IconSearch } = useIcons();

  const { PrivateContentLayout } = useLayouts();
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { createUserSchemaValidator } = useValidators();

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useUsers } = useScreenHooks();

  const {
    control,
    handleSubmit,
    getValues: getValueSearch,
    formState: { isDirty },
  } = useForm({
    mode: 'onChange',
  });
  const {
    setValue,
    control: controlUser,
    handleSubmit: handleSubmitUser,
    formState: { errors, isValid },
    reset: resetUser,
    setValue: setValueEditUser,
    // watch,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(createUserSchemaValidator),
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
    promiseGetUsersTable,
    promiseCreateNewUser,
    promiseDisableUser,
    promiseUpdateUser,

    usersAdministratorOptions,
    usersSecretaryOptions,
    profile,
    phoneIndicatorChoices,

    onChangeInputFieldPhone,
    handleIndicative,
    defaultIndicative,

    columns,
    rows,
    pageSize,
    currentPageTable,
    lastPageTable,
    handlePageChange,

    onSearch,
    onFilter,
    handleResetSearch,

    createUserState,
    modalStateCreateUser,
    handleModalCreateUser,

    modalStateSuccessCreateUser,
    handleCloseModalSuccessCreateUser,

    modalStateDisableUser,
    handleShowModalDisableUser,
    handleDisableUser,
    isUpdateUser,

    onSubmit,
  } = useUsers(setValue, setValueEditUser, resetUser);

  return (
    <PrivateContentLayout background="tertiary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionMyApplications>
          <Wrapper title={'Users'} maxWidth={'1128px'}>
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
                    <IconSearch color={'#E46C02'} />
                  </StyledButtonSearch>
                ) : (
                  <StyledButtonSearchDisable onClick={handleSubmit(onSearch)}>
                    <IconSearch color={'#E46C02'} />
                  </StyledButtonSearchDisable>
                )}
              </StyledContainerSearch>

              {profile.roleType.id === 3 && (
                <FilterUser
                  control={controlFilter}
                  onFilter={() => onFilter(getValuesFilter())}
                  reset={() => {
                    resetFilter({
                      roleId: 'none',
                    });
                  }}
                />
              )}
              <StyledButtonCreateUser
                onClick={handleModalCreateUser}
                fullWidth={false}
                color="secondary"
              >
                Create User
              </StyledButtonCreateUser>
            </StyledContainerTableActions>

            <StyledCotnainerTable>
              <Table
                loading={promiseGetUsersTable}
                pagination={true}
                columns={columns}
                rows={rows}
                pageSize={pageSize}
                lastPage={lastPageTable}
                rowsPerPageOptions={[pageSize]}
                onPageChange={handlePageChange}
                currentPage={currentPageTable}
              />
            </StyledCotnainerTable>
          </Wrapper>
        </StyledSectionMyApplications>
        <Modal
          color={'#394D94'}
          type={'child'}
          showModal={modalStateCreateUser.show}
          onClose={handleModalCreateUser}
        >
          <StyledTitleModal variant={'h2'} color={'secondary'}>
            Create User
          </StyledTitleModal>

          <StyledSubtitleModal variant={'body1'}>
            Personal Information
          </StyledSubtitleModal>
          <StyledChildContainerModal>
            {/* <StyledDescriptionModal variant={'body2'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </StyledDescriptionModal> */}
            <StyledFieldsContainer>
              <TextFieldControlled
                // inputValue={profile.name}
                id={'name'}
                placeholder={'First Name'}
                label={'First Name'}
                name={'name'}
                variant={'outlined'}
                fullWidth={true}
                control={controlUser}
                error={!!errors.name}
                helperText={errors?.name?.message}
              />
              <TextFieldControlled
                // inputValue={profile.surname}
                id={'surname'}
                placeholder={'Last Name'}
                label={'Last Name'}
                name={'surname'}
                fullWidth={true}
                control={controlUser}
                error={!!errors.surname}
                helperText={errors?.surname?.message}
              />
              <TextFieldControlled
                // inputValue={profile.email}
                id={'email'}
                placeholder={'Email'}
                label={'Email'}
                name={'email'}
                control={controlUser}
                type={'email'}
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
              <StyledFieldRowHidden>
                <SelectFieldControlled
                  id={'phoneIndicatorId'}
                  label={'Phone'}
                  name={'phoneIndicatorId'}
                  valueName={'phoneIndicator'}
                  control={controlUser}
                  options={phoneIndicatorChoices}
                  inputValue={defaultIndicative(phoneIndicatorChoices).id}
                />
                <TextFieldControlled
                  // inputValue={profile.phone}
                  placeholder={'Contact Number'}
                  label={'Contact Number'}
                  id={'phone'}
                  control={controlUser}
                  name={'phone'}
                  error={!!errors.phone}
                  helperText={errors?.phone?.message}
                />
              </StyledFieldRowHidden>
              <StyledPhoneInputField
                id={'phoneVisual'}
                indicatorId={'phoneIndicatorId'}
                label={'Contact Number'}
                inputValue={`${handleIndicative(
                  phoneIndicatorChoices[209],
                  ''
                )}`}
                name={'phoneVisual'}
                control={controlUser}
                onInputChange={onChangeInputFieldPhone}
                error={!!errors.phone}
                helperText={errors?.phone?.message}
              />

              {usersAdministratorOptions.length > 0 &&
                usersSecretaryOptions.length > 0 && (
                  <SelectFieldControlled
                    id={'roleId'}
                    label={'User Type'}
                    disabledInput={
                      profile.roleType.id !== 3 && profile.roleType.id !== 1
                    }
                    name={'roleId'}
                    control={controlUser}
                    inputValue={
                      profile.roleType.roleType === 'backuser'
                        ? profile.roleType.id
                        : usersAdministratorOptions[0].id
                    }
                    options={
                      profile.roleType.id === 3
                        ? usersAdministratorOptions
                        : usersSecretaryOptions
                    }
                  />
                )}
            </StyledFieldsContainer>
            <StyledButtonCreateUserModal
              disabled={!isValid}
              fullWidth={false}
              color="secondary"
              colorLoading={'#FFFFFF'}
              promiseLoading={promiseCreateNewUser || promiseUpdateUser}
              onClick={
                !(promiseCreateNewUser && !promiseUpdateUser)
                  ? handleSubmitUser(onSubmit)
                  : () => {}
              }
            >
              {isUpdateUser ? 'Update User' : 'Create User'}
            </StyledButtonCreateUserModal>
          </StyledChildContainerModal>
        </Modal>
        <Modal
          type={createUserState}
          showModal={modalStateSuccessCreateUser.show}
          onClose={() => {
            resetUser();
            handleCloseModalSuccessCreateUser();
          }}
          title={modalStateSuccessCreateUser.title}
          description={modalStateSuccessCreateUser.description}
        />
        <Modal
          color={'#FF2D55'}
          type={'child'}
          showModal={modalStateDisableUser.show}
          onClose={handleShowModalDisableUser}
        >
          <StyledTitleModal variant={'h2'} color={'error'}>
            Are you sure about disabling this user?
          </StyledTitleModal>

          <StyledSubtitleModal variant={'body1'}>
            {`If you disable it, you won't be able to activate it again!`}
          </StyledSubtitleModal>
          <StyledChildContainerModal>
            <StyledButtonModal
              fullWidth={false}
              color="secondary"
              colorLoading={'#FFFFFF'}
              promiseLoading={promiseDisableUser}
              onClick={!promiseDisableUser ? handleDisableUser : () => {}}
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

export default UsersTable;
