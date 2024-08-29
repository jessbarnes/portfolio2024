import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export const BaseCardStyle =
  "relative flex flex-col bg-white bg-opacity-10 rounded-lg p-2 md:p-4 w-full";

const RowCard = ({
  title,
  subtitle,
  dateRange,
  description,
  body,
  expandable = true,
}: {
  title: string;
  subtitle?: string;
  dateRange?: string;
  description?: string;
  body?: React.ReactNode;
  expandable?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!expandable || (!description && !body)) {
    return (
      <div
        key={`card-${title}-${subtitle}`}
        className={BaseCardStyle}
        onClick={() => setIsExpanded(!isExpanded)}
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
  }

  return (
    <div
      key={`card-${title}-${subtitle}`}
      className={`relative flex flex-col bg-white ${
        isExpanded ? "bg-opacity-20" : "bg-opacity-10"
      } hover:bg-opacity-20 rounded-lg p-2 md:p-4 w-full cursor-pointer transition-all duration-300`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-row items-center justify-between">
        <h3>{title}</h3>
        {dateRange && <p className="text-xs md:text-sm">{dateRange}</p>}
      </div>
      {subtitle && <p className="font-semibold pb-2">{subtitle}</p>}
      {description && (
        <p className={isExpanded ? "h-fit opacity-100" : "h-0 overflow-hidden"}>
          {description}
        </p>
      )}
      {body}
      <div className="absolute bottom-2 right-2 text-white">
        {isExpanded ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </div>
    </div>
  );
};

export default RowCard;
