import React, { Suspense } from 'react';
import useComponents from '../../components';
import useHelpers from '../../../helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useLayouts from '../../layouts';
import {
  StyledSectionNewBlog,
  StyledFieldsContainer,
  StyledTextFieldContainer,
  StyledRowSwitches,
  StyledButtonSave,
  StyledRowButtonsContainer,
  StyledRowButtons,
  StyledButtonPreview,
  StyledTitleModal,
  // StyledSubtitleModal,
  StyledDateModal,
  StyledChildContainerModal,
  StyledContainerImageModal,
  StyledInnerHtmlModal,
  StyledButtonApplyNow,
} from './BlogsEditor.styles';
import useControllers from '../../../controllers';

const BlogsEditor = () => {
  // Components
  const {
    ActivityIndicator,
    Wrapper,
    InputFileFieldControlled,
    Modal,
    RichTextEditorControlled,
    SwitchControlled,
    TextFieldControlled,
  } = useComponents();

  const { useScreenHooks } = useControllers();
  const { useBlogsEditor } = useScreenHooks();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useValidators } = useQuickFunctions();
  const { newBlogSchemaValidator } = useValidators();

  // Layouts
  const { PrivateContentLayout } = useLayouts();

  // Yup validator

  const {
    // handleSubmit,
    control,
    getValues,
    setValue,
    // watch,
    resetField: resetFieldBlog,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(newBlogSchemaValidator),
  });
  const {
    promisePostNewBlog,

    fileTypesImage,
    // profile,
    currentBlog,
    handleDate,
    handleGoToLogin,
    goBack,

    handleFileNameExtension,
    onChangeFileImage,

    modalBlogSavedState,
    handleCloseModalBlogSaved,

    modalBlogPreviewState,
    handleCloseModalBlogPreview,
    blogPreviewState,
    onSubmitForPreview,

    onSubmitBlog,
  } = useBlogsEditor(setValue);
  return (
    <PrivateContentLayout background={'secondary'}>
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionNewBlog>
          <Wrapper
            title={currentBlog.blogId ? 'Edit Content' : 'New Content'}
            description={''}
            maxWidth={'1358px'}
            className="container"
            withBackButton={true}
            onClickBackButton={goBack}
          >
            <StyledFieldsContainer>
              <StyledTextFieldContainer>
                <TextFieldControlled
                  id={'title'}
                  placeholder={'Title of the blog'}
                  label={'Title'}
                  name={'title'}
                  variant={'outlined'}
                  fullWidth={true}
                  control={control}
                  inputValue={currentBlog.title && currentBlog.title}
                  error={!!errors.title}
                  helperText={errors?.title?.message}
                />
              </StyledTextFieldContainer>
              <InputFileFieldControlled
                id={'image'}
                inputValue={handleFileNameExtension({
                  name: '',
                  data: currentBlog.image,
                })}
                label={''}
                type={'image'}
                name={'image'}
                variant={'outlined'}
                fullWidth={false}
                control={control}
                onInputChange={onChangeFileImage}
                fileTypes={fileTypesImage}
                resetField={resetFieldBlog}
                error={!!errors.image}
                helperText={errors?.image?.message}
              />
              <RichTextEditorControlled
                id={'body'}
                name={'body'}
                inputValue={currentBlog.body && currentBlog.body}
                control={control}
              />
              <StyledRowSwitches>
                <SwitchControlled
                  id={'publish'}
                  name={'publish'}
                  label={'Publish'}
                  // inputValue={!!currentBlog.publish}
                  control={control}
                />
                <SwitchControlled
                  id={'toHomepage'}
                  name={'toHomepage'}
                  label={'Show in homepage'}
                  // inputValue={!!currentBlog.toHomepage}
                  control={control}
                />
              </StyledRowSwitches>
            </StyledFieldsContainer>
            <StyledRowButtonsContainer>
              <StyledRowButtons>
                <StyledButtonPreview
                  color={'secondary'}
                  onClick={() => onSubmitForPreview(getValues())}
                >
                  Preview
                </StyledButtonPreview>
                <StyledButtonSave
                  colorLoading={'#FFFFFF'}
                  promiseLoading={promisePostNewBlog}
                  onClick={
                    !promisePostNewBlog
                      ? () => onSubmitBlog(getValues())
                      : () => {}
                  }
                >
                  Save
                </StyledButtonSave>
              </StyledRowButtons>
            </StyledRowButtonsContainer>
          </Wrapper>
        </StyledSectionNewBlog>
        <Modal
          type={'child'}
          showModal={modalBlogPreviewState.show}
          onClose={handleCloseModalBlogPreview}
        >
          <StyledTitleModal variant={'h2'} color={'error'}>
            {blogPreviewState.title}
          </StyledTitleModal>
          <StyledDateModal>{`Published: ${handleDate()}`}</StyledDateModal>
          <StyledChildContainerModal>
            {blogPreviewState.image.data && (
              <StyledContainerImageModal>
                <img
                  style={{ display: 'block', width: '480px' }}
                  src={blogPreviewState.image.data}
                />
              </StyledContainerImageModal>
            )}
            <StyledInnerHtmlModal
              dangerouslySetInnerHTML={{ __html: blogPreviewState.body }}
            />
            {currentBlog.blogId == '31' && (
              <StyledButtonApplyNow
                fullWidth={false}
                color="primary"
                onClick={handleGoToLogin}
                // onClick={() => {
                //   onSubmitDraft(getValues());
                // }}
              >
                Apply Now
              </StyledButtonApplyNow>
            )}
          </StyledChildContainerModal>
        </Modal>
        <Modal
          type={'success'}
          showModal={modalBlogSavedState.show}
          onClose={handleCloseModalBlogSaved}
          title={modalBlogSavedState.title}
          description={modalBlogSavedState.description}
        />
      </Suspense>
    </PrivateContentLayout>
  );
};

export default BlogsEditor;
