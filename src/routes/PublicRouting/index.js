import { Route, Switch } from 'react-router';
import useViews from '../../views';
import React from 'react';

const PublicRouting = () => {
  const { useScreens } = useViews();
  const {
    BlogsLastNews,
    BlogVisualization,
    EmailVerification,
    Home,
    Login,
    RecoveryPassword,
    ResendEmail,
    ResetPassword,
    SignUp,
    Splash,
  } = useScreens();
  return (
    <Switch>
      <Route exact path="/latest-news" component={BlogsLastNews} />
      <Route exact path="/blog-view" component={BlogVisualization} />
      <Route exact path="/verify-email" component={EmailVerification} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/recovery-password" component={RecoveryPassword} />
      <Route exact path="/resend-email" component={ResendEmail} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" component={Splash} />
    </Switch>
  );
};

export default PublicRouting;
