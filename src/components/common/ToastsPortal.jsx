import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';

const ToastsPortal = () => {
    return (
        <>
            { createPortal(
                <ToastContainer/>,
                document.getElementById('toasts-portal')
            ) }
        </>
    );
};

export default ToastsPortal;