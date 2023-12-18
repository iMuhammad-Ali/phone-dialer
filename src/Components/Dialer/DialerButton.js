const DialerButton = ({ number, onClick }) => {
  return (
    <button
      className="p-3 text-lg font-bold bg-gray-300 rounded-full"
      onClick={onClick}
    >
      {number}
    </button>
  );
};

export default DialerButton;
