import React, { useContext } from 'react';
import UserProvider from '../providers/UserProvider';

import CurrentUser from './CurrentUser';
import SignInAndSignUp from './SignInAndSignUp';

const Authentication = ({ loading }) => {
  const user = useContext(UserProvider)
  if (loading) return null;

  return <div>
    {user ? <CurrentUser {...user} /> : <SignInAndSignUp />}
    </div>
}

export default Authentication;
