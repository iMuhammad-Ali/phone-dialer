import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DialerContext = createContext();

const DialerProvider = ({ children }) => {
    const [dialedNumber, setDialedNumber] = useState('');
    const [callLogs, setCallLogs] = useState([]);
    const [isCallActive, setIsCallActive] = useState(false);
    const navigate = useNavigate();

    const handleNumberClick = (number) => {
        setDialedNumber((prevNumber) => prevNumber + number);
    };

    const handleCallButtonClick = () => {
        const updatedCallLogs = [
            ...callLogs,
            { id: new Date().getTime(), number: dialedNumber, type: 'Audio Call' },
        ];
        setCallLogs(updatedCallLogs);
        setCallLogs(updatedCallLogs);
        setIsCallActive(true);
        navigate('/dialed');
    };

    const handleEraseButtonClick = () => {
        setDialedNumber((prevNumber) => prevNumber.slice(0, -1));
    };

    const handleEndCall = () => {
        setIsCallActive(false);
        navigate('/call-logs');
    };

    const handleDeleteFromCallLog = (id) => {
        const updatedCallLogs = callLogs.filter((log) => log.id !== id);
        setCallLogs(updatedCallLogs);
    };

    const handleNavigateToHome = () => {
        navigate('/');
    };

    useEffect(() => {
        let endCallTimeout;
        if (isCallActive) {
            endCallTimeout = setTimeout(() => {
                handleEndCall();
            }, 10000);
        }
        return () => clearTimeout(endCallTimeout);
    }, [isCallActive, handleEndCall]);

    return (
        <DialerContext.Provider
            value={{
                dialedNumber,
                callLogs,
                handleNumberClick,
                handleCallButtonClick,
                handleEraseButtonClick,
                handleDeleteFromCallLog,
                handleNavigateToHome,
            }}
        >
            {children}
        </DialerContext.Provider>
    );
};

const useDialerContext = () => {
    const context = useContext(DialerContext);
    if (!context) {
        throw new Error('useDialerContext must be used within a DialerProvider');
    }
    return context;
};

export { DialerProvider, useDialerContext };