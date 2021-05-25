import React, { useContext } from 'react';
import Alert from './Alert';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
    const alertContext = useContext(AlertContext);
    const { alerts } = alertContext;

    return alerts.length > 0 && alerts.map((alert) => <Alert key={alert.id} alert={alert} />);
};

export default Alerts;
