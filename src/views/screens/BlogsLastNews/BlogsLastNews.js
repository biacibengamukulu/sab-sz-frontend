import React, { Suspense } from 'react';
import useComponents from '../../components';
import useLayouts from '../../layouts';
import {
  StyledSectionLastNews,
  StyledTitleSection,
  StyledFieldsLastNewsContainer,
} from './BlogsLastNews.styles';
import useControllers from '../../../controllers';
import _ from 'lodash';
import temporalImage from '../../../assets/images/temporalImage.png';
import { Box } from '@mui/system';
import useHelpers from '../../../helpers';

const BlogsLastNews = () => {
  const { ActivityIndicator, CardBlogPreview, Pagination } = useComponents();

  const { PublicContentLayout } = useLayouts();
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { usePromises } = useQuickFunctions();
  const { promiseInProgress } = usePromises();

  // Hooks
  const { useScreenHooks } = useControllers();
  const { useBlogsLastNews } = useScreenHooks();

  const {
    rows,
    // pageSize,
    // totalRows,

    currentPageTable,
    lastPageTable,
    handlePageChange,
    // onSearch,
    // onFilter,
    // handleResetSearch,

    handleViewBlog,
  } = useBlogsLastNews();
  return (
    <Suspense fallback={<ActivityIndicator />}>
      {promiseInProgress && <ActivityIndicator />}
      <PublicContentLayout background="primary">
        <StyledSectionLastNews>
          <StyledTitleSection>
            OUR
            <Box component="b" sx={{ padding: '0 16px', color: '#E46C02' }}>
              LATEST
            </Box>{' '}
            NEWS
          </StyledTitleSection>
          <StyledFieldsLastNewsContainer>
            {rows?.length !== 0 &&
              _.map(rows, (currentBlog, key) => {
                return (
                  <CardBlogPreview
                    image={
                      currentBlog.image ? currentBlog.image : temporalImage
                    }
                    key={key}
                    title={currentBlog.title}
                    description={currentBlog.body}
                    onClick={() => handleViewBlog(currentBlog.id)}
                  />
                );
              })}
          </StyledFieldsLastNewsContainer>
          <Pagination
            currentPage={currentPageTable}
            lastPage={lastPageTable}
            onPageChange={handlePageChange}
          />
        </StyledSectionLastNews>
      </PublicContentLayout>
    </Suspense>
  );
};

export default BlogsLastNews;
