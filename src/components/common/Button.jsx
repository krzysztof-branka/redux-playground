import { twMerge } from 'tailwind-merge';

const Button = ({ children, onClick, className }) => {
    return (
        <button
            onClick={ onClick }
            className={
                twMerge('bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded', className ?? '')
            }
        >
            { children }
        </button>
    );
};

export default Button;