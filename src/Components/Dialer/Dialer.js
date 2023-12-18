import DialerButton from './DialerButton';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as EraseIcon } from '../../assets/icons/erase.svg';
import { useDialerContext } from '../../DialerContext';

const Dialer = () => {
    const { dialedNumber, handleNumberClick, handleCallButtonClick, handleEraseButtonClick } = useDialerContext();
    return (
        <div className="overflow-hidden h-screen px-12 sm:px-0 sm:w-1/2 md:w-1/3 lg:1/4 py-6 rounded flex flex-col items-center justify-center bg-gray-100 shadow-2xl">
            <div className="max-w-2/25 overflow-x-scroll mb-8 text-4xl font-bold py-2 border-b border-blue-400 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100 ">{dialedNumber}</div>
            <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((number) => (
                    <DialerButton key={number} number={number} onClick={() => handleNumberClick(number)} />
                ))}
                <div></div>
                <PhoneIcon
                    onClick={handleCallButtonClick}
                    className="rounded-full p-3 fill-white w-12 h-12 bg-green-500 hover:bg-green-600 cursor-pointer"
                />
                <EraseIcon
                    onClick={handleEraseButtonClick}
                    className="m-2 w-8 h-8 cursor-pointer fill-red-600 hover:fill-red-700"
                />
            </div>
        </div>
    );
};

export default Dialer;