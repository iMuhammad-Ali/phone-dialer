import { useDialerContext } from '../../DialerContext';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';

const CallLogs = () => {
    const { callLogs, handleDeleteFromCallLog, handleNavigateToHome } = useDialerContext();
    console.log(callLogs);
    return (
        <div className="min-h-2/25 max-h-2/25 text-left h-lg px-4 w-full sm:w-1/2 md:w-1/3 lg:1/4 py-6 rounded flex flex-col bg-gray-100 shadow-2xl">
            <div className="pb-1 mb-4 flex items-center justify-between border-b border-gray-500">
                <div className="text-4xl font-bold">
                    Recents
                </div>
                <HomeIcon
                    onClick={handleNavigateToHome}
                    className="w-6 h-6 cursor-pointer" />
            </div>
            <ul>
                {callLogs.map((log) => (
                    <li className="flex justify-between items-center mb-4 pb-2 border-b border-gray-300" key={log.id}>
                        <div>
                            <p>{log.number}</p>
                            <p className="text-xs text-gray-500">{log.type}</p>
                        </div>
                        <DeleteIcon onClick={() => handleDeleteFromCallLog(log.id)} className="w-6 h-6 cursor-pointer" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CallLogs;