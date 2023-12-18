import { ReactComponent as SpeakerIcon } from '../../assets/icons/speaker.svg'
import { ReactComponent as FacetimeIcon } from '../../assets/icons/facetime.svg'
import { ReactComponent as MicIcon } from '../../assets/icons/mic.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/add-user.svg'
import { ReactComponent as PhonedownIcon } from '../../assets/icons/phone-down.svg'
import { ReactComponent as KeypadIcon } from '../../assets/icons/keypad.svg'
import { useDialerContext } from '../../DialerContext';

const DialedNumber = () => {
  const { dialedNumber } = useDialerContext();

  return (
    <div className="px-12 sm:px-0 sm:w-1/2 md:w-1/3 lg:1/4 py-6 rounded flex flex-col items-center justify-between py-12 h-screen bg-gray-100 shadow-2xl">
      <div>
        <div className="text-3xl font-bold py-2">{dialedNumber}</div>
        <div className="my-2 text-sm">Calling...</div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4">
          <SpeakerIcon
            className="rounded-full p-3 w-12 h-12 bg-gray-400 hover:bg-gray-500 cursor-pointer" />
          <FacetimeIcon
            className="rounded-full p-3 w-12 h-12 bg-gray-400 hover:bg-gray-500 cursor-pointer" />
          <MicIcon
            className="rounded-full p-3 w-12 h-12 bg-gray-400 hover:bg-gray-500 cursor-pointer" />
          <AddIcon
            className="rounded-full p-3 w-12 h-12 bg-gray-400 hover:bg-gray-500 cursor-pointer" />
          <PhonedownIcon
            className="rounded-full fill-white p-3 w-12 h-12 bg-red-500 hover:bg-red-600 cursor-pointer" />
          <KeypadIcon
            className="rounded-full p-3 w-12 h-12 bg-gray-400 hover:bg-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default DialedNumber;
