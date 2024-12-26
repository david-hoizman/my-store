import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastNotifications.style.css'; // הקובץ CSS שלך

// פונקציה לחיזוי צבע הרקע לפי סוג הטוסט
const getToastBackgroundColor = (type) => {
  const toastColors = {
    success: '#d4edda',
    error: '#f8d7da',
    warning: '#fff3cd',
    info: '#d1ecf1',
  };
  return toastColors[type] || '#d1ecf1'; // ברירת מחדל צבע info
};

// פונקציה להצגת טוסט
export const showToast = ({
  message,
  title = '',
  type = 'info',
  autoClose = 4000,
  width = 300,
  height = 150,
  fontSize = '16px',
}) => {
  const customMessage = (
    <div>
      {title && <div className="toast-title">{title}</div>}
      <div className="toast-body">{message}</div>
    </div>
  );

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    fontSize,
    backgroundColor: getToastBackgroundColor(type),
  };

  // הצגת הטוסט בהתאם לסוג
  switch (type) {
    case 'success':
      toast.success(customMessage, { autoClose, style, toastId: 'custom-id' });
      break;
    case 'error':
      toast.error(customMessage, { autoClose, style, toastId: 'custom-id' });
      break;
    case 'warning':
      toast.warn(customMessage, { autoClose, style, toastId: 'custom-id' });
      break;
    default:
      toast.info(customMessage, { autoClose, style, toastId: 'custom-id' });
      break;
  }
};

// קומפוננטת ToastNotifications המציגה את כל הטוסט
const ToastNotifications = () => {
  return <ToastContainer />;
};

export default ToastNotifications;
