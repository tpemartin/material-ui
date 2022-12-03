import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!) //if you use TypeScript
root.render(
<React.Fragment>
  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  <CssBaseline />
  <App />
</React.Fragment>);
