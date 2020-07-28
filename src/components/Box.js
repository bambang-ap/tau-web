import React from 'react';
import Flexbox from "flexbox-react";

export default ({ color }) => <Flexbox flex="1" style={{ margin: '.5rem', padding: '5rem', backgroundColor: color || 'blue' }} />