import React, { Suspense } from 'react';
import useAssets from '../../../assets';
import useComponents from '../../components';
import {
  StyledSectionHome,
  StyledContainerArticle,
  StyledArticle,
  StyledCarousel,
  StyledButtonBlogContainer,
  StyledViewMoreButton,
  StyledContainerImage,
  StyledInfo,
  StyledArticleTitle,
  StyledArticleTitleMobile,
  StyledArticleParagraph,
  StyledArticleCallToAction,
  StyledArticleButton,
  StyledButtonsContainerMobile,
  StyledImageShape,
} from './Home.styles';
import useLayouts from '../../layouts';
import { Box } from '@mui/system';
import useControllers from '../../../controllers';

const Home = () => {
  // Layout
  const { PublicContentLayout } = useLayouts();

  // Components & Skeleton
  const { ActivityIndicator, Button, Card, Typography } = useComponents();
  const { useIcons } = useAssets();
  const { iconGeneralLicense } = useIcons();

  //Hooks
  const { useScreenHooks } = useControllers();
  const { useHome } = useScreenHooks();
  const {
    dataBlogsHomepage,

    gotToSignUp,
    gotToLogin,
    handleGetBlog,
    handleGoToBlogs,
  } = useHome();

  return (
    <PublicContentLayout background="primary">
      <Suspense fallback={<ActivityIndicator />}>
        <StyledSectionHome>
          <StyledContainerArticle>
            <StyledArticle>
              <StyledArticleTitleMobile color="secondary" variant="h2">
                APPLY FOR A{' '}
                <Box component="b" sx={{ color: '#E46C02' }}>
                  LICENCE
                </Box>{' '}
                ONLINE
              </StyledArticleTitleMobile>
              <StyledArticleTitle color="secondary" variant="h1">
                APPLY FOR A{' '}
                <Box component="b" sx={{ color: '#E46C02' }}>
                  LICENCE
                </Box>{' '}
                ONLINE
              </StyledArticleTitle>
              <StyledArticleParagraph
                className="StyledTypographyBook"
                color="neutral"
                variant="body2"
              >
                Welcome to the Swaziland Liquor Licensing system! This platform
                enables you to apply for a new liquor licence and renew your
                existing licence through an easy online application.
                <Box>
                  Before completing the application please read the general
                  licence requirements below.
                </Box>
              </StyledArticleParagraph>
              <StyledArticleCallToAction color="primary" onClick={gotToSignUp}>
                Learn more
              </StyledArticleCallToAction>
              <StyledArticleButton
                onClick={gotToLogin}
                color={'primary'}
                fullWidth={false}
              >
                Apply Now
              </StyledArticleButton>
            </StyledArticle>
            <StyledContainerImage>
              <StyledImageShape />
            </StyledContainerImage>
          </StyledContainerArticle>
          <StyledCarousel>
            {dataBlogsHomepage[0]?.title && (
              <Card
                icon={iconGeneralLicense}
                title={`${dataBlogsHomepage[0].title}`}
                scale={1}
                callToAction="Learn more"
                onClick={() => {
                  handleGetBlog(dataBlogsHomepage[0].id);
                }}
              />
            )}
            {dataBlogsHomepage[1]?.title && (
              <Card
                icon={iconGeneralLicense}
                title={`${dataBlogsHomepage[1].title}`}
                scale={1}
                callToAction="Learn more"
                onClick={() => {
                  handleGetBlog(dataBlogsHomepage[1].id);
                }}
              />
            )}
            {dataBlogsHomepage[2]?.title && (
              <Card
                icon={iconGeneralLicense}
                title={`${dataBlogsHomepage[2].title}`}
                scale={1}
                callToAction="Learn more"
                onClick={() => {
                  handleGetBlog(dataBlogsHomepage[2].id);
                }}
              />
            )}
          </StyledCarousel>
          <StyledButtonBlogContainer>
            <StyledViewMoreButton
              onClick={handleGoToBlogs}
              color={'secondary'}
              fullWidth={false}
            >
              View more
            </StyledViewMoreButton>
          </StyledButtonBlogContainer>
          <StyledButtonsContainerMobile>
            <Button
              color={'primary'}
              fullWidth={false}
              sx={{ minWidth: '114px', maxHeight: '44px' }}
              onClick={gotToLogin}
            >
              Login
            </Button>
            <Button
              color={'secondary'}
              fullWidth={false}
              sx={{ minWidth: '114px', maxHeight: '44px' }}
              onClick={gotToSignUp}
            >
              Register
            </Button>
          </StyledButtonsContainerMobile>
          <StyledInfo>
            <Typography
              className="StyledTypographyBook"
              color={'neutral-90'}
              variant="body2"
              sx={{
                paddingBottom: '30px',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.006em',
              }}
            >
              The board is committed to promoting{' '}
              <Box component="b">responsible consumption of liquor</Box> and
              reducing the socio-economic problem emanating from alcohol abuse
              in the country.
            </Typography>
          </StyledInfo>
        </StyledSectionHome>
      </Suspense>
    </PublicContentLayout>
  );
};

export default Home;
