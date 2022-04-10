import React from 'react';
import { Routes as RRDRoutes, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';

const Routes: React.FC = function Routes(): React.ReactElement {
  return (
    <RRDRoutes>
      <Route path="/" element={<Dashboard />} />
    </RRDRoutes>
  );
};

export default Routes;
