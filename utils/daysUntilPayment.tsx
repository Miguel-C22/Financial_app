export const nextPayDay = (payDay: string) => {
  const day = new Date(payDay).getDate();

  const today = new Date();
  let nextPayment = new Date(today.getFullYear(), today.getMonth(), day);

  if (today.getDate() >= day) {
    nextPayment = new Date(today.getFullYear(), today.getMonth(), day);
  }

  const msInDay = 1000 * 60 * 60 * 24;
  const diffInMs = nextPayment.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInMs / msInDay);

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-700">
      <span className="text-red-500 font-semibold text-lg">{diffInDays}</span>
      <span>days until next payment</span>
      <span className="text-gray-500 text-xs">
        ({nextPayment.toDateString()})
      </span>
    </div>
  );
};
