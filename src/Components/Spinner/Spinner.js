import React from 'react';
import classes from './Spinner.module.css';

const spinner = () => (
    <div className={classes.LoaderBackground}>
        <h3 className={classes.LoaderText}>Welcome to Cake Gallery</h3>
        <div className={classes.Loader}>Loading...<div className="dropback"></div></div>
    </div>
);

export default spinner;