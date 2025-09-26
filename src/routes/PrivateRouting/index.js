import { Route, Switch } from 'react-router';
import useViews from '../../views';
import React from 'react';
import useHelpers from '../../helpers';

const PrivateRouting = () => {
  // Views
  const { useScreens } = useViews();
  const {
    ApplicationForm,
    ApplicationFormRenew,
    ApplicationReview,
    ApplicationsTable,
    ApplicationsRenewTable,
    ApplicationRenewTrack,
    BlogsEditor,
    BlogsTable,
    ChangePassword,
    Profile,
    RenewalsTable,
    RenewalReview,
    UsersTable,
    Logs,
  } = useScreens();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useRouterHelper } = useQuickFunctions();
  const { requireAuth } = useRouterHelper();
  return (
    <Switch>
      <Route
        exact
        path="/application-form"
        component={requireAuth({ Component: ApplicationForm })}
      />
      <Route
        exact
        path="/application-form-renew"
        component={requireAuth({ Component: ApplicationFormRenew })}
      />
      <Route
        exact
        path="/application-review"
        component={requireAuth({ Component: ApplicationReview })}
      />
      <Route
        exact
        path="/application"
        component={requireAuth({ Component: ApplicationReview })}
      />
      <Route
        exact
        path="/applications"
        component={requireAuth({ Component: ApplicationsTable })}
      />
      <Route
        exact
        path="/applications-renew"
        component={requireAuth({ Component: ApplicationsRenewTable })}
      />
       <Route
        exact
        path="/application-renew-track"
        component={requireAuth({ Component: ApplicationRenewTrack})}
      />
      <Route
        exact
        path="/new-content"
        component={requireAuth({ Component: BlogsEditor })}
      />
      <Route
        exact
        path="/blogs-table"
        component={requireAuth({ Component: BlogsTable })}
      />
      <Route
        exact
        path="/change-password"
        component={requireAuth({ Component: ChangePassword })}
      />

      <Route
        exact
        path="/profile"
        component={requireAuth({ Component: Profile })}
      />
      <Route
        exact
        path="/users"
        component={requireAuth({ Component: UsersTable })}
      />

      <Route
        exact
        path="/renewals"
        component={requireAuth({ Component: RenewalsTable })}
      />
      <Route
        exact
        path="/renewal-form"
        component={requireAuth({ Component: ApplicationForm })}
      />
      <Route
        exact
        path="/renewal"
        component={requireAuth({ Component: RenewalReview })}
      />
      <Route exact path="/logs" component={requireAuth({ Component: Logs })} />
    </Switch>
  );
};

export default PrivateRouting;
