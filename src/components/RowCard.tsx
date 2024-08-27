const RowCard = ({
  title,
  subtitle,
  dateRange,
  description,
  body,
}: {
  title: string;
  subtitle?: string;
  dateRange?: string;
  description?: string;
  body?: React.ReactNode;
}) => {
  return (
    <div
      key={`history-${title}`}
      className="flex flex-col bg-white bg-opacity-10 rounded-lg p-2 md:p-4 w-full"
    >
      <div className="flex flex-row items-center justify-between">
        <h3>{title}</h3>
        {dateRange && <p className="text-xs md:text-sm">{dateRange}</p>}
      </div>
      {subtitle && <p className="font-semibold pb-2">{subtitle}</p>}
      {description && <p>{description}</p>}
      {body}
    </div>
  );
};

export default RowCard;
