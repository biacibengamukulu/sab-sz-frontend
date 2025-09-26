import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import {
  StyledSectionBlog,
  StyledSocialMediaContainer,
  StyledTitleBlog,
  StyledDateBlog,
  StyledContentBlogContainer,
  StyledContainerImageBlog,
  StyledInnerHtmlBodyBlog,
  StyledButtonApplyNow,
} from './BlogVisualization.styles';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';

const BlogVisualization = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises } = useQuickFunctions();
  const { promiseInProgress } = usePromises();

  // Components
  const { ActivityIndicator, Wrapper, SocialMedia } = useComponents();

  const { useScreenHooks } = useControllers();
  const { useBlogVisualization } = useScreenHooks();

  // Helpers

  // Layouts
  const { PublicContentLayout } = useLayouts();

  const { goBack, currentBlog, handleDate, handleGoToLogin } =
    useBlogVisualization();
  return (
    <Suspense fallback={<ActivityIndicator />}>
      {promiseInProgress && <ActivityIndicator />}

      <PublicContentLayout background={'primary'}>
        <StyledSectionBlog>
          <Wrapper
            title={''}
            description={''}
            maxWidth={'1358px'}
            className="container"
            withBackButton={true}
            onClickBackButton={goBack}
          >
            <StyledTitleBlog variant={'h2'} color={'error'}>
              {currentBlog.title}
            </StyledTitleBlog>
            <StyledSocialMediaContainer>
              <SocialMedia color={'#FFFFFF'} />
            </StyledSocialMediaContainer>
            <StyledDateBlog>{`Published: ${handleDate()}`}</StyledDateBlog>
            <StyledContentBlogContainer>
              {currentBlog.image && (
                <StyledContainerImageBlog>
                  <img
                    style={{ display: 'block', width: '100%' }}
                    src={currentBlog.image}
                  />
                </StyledContainerImageBlog>
              )}
              <StyledInnerHtmlBodyBlog
                dangerouslySetInnerHTML={{ __html: currentBlog.body }}
              />
            </StyledContentBlogContainer>
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
          </Wrapper>
        </StyledSectionBlog>
      </PublicContentLayout>
    </Suspense>
  );
};

export default BlogVisualization;
