import { VscChevronRight } from "react-icons/vsc";
import { WorkInfo } from "@/@types/interfaces";

interface WorkProps extends WorkInfo {
  tabPosition: number;
}

const WorkPlace: React.FC<WorkProps> = ({
  tabPosition,
  id,
  companyName,
  companyLink,
  position,
  timeEmployed,
  description,
}) => {
  const workSectionBaseStyles = `transition-all duration-100`;
  const displayWorkInfo = `${workSectionBaseStyles} block`;
  const hideWorkInfo = `${workSectionBaseStyles} hidden`;

  return (
    <div
      className={tabPosition == id ? displayWorkInfo : hideWorkInfo}
      data-workplace-tab={id}
    >
      <h2 className="text-lg text-primary font-fontSans font-medium mb-1">
        {position}{" "}
        <a className="fun-underline text-accent" href={companyLink}>
          @ {companyName}
        </a>
      </h2>
      <p className="text-sm text-secondary font-spacemono mb-5">
        {timeEmployed}
      </p>
      <ul className="text-sm lg:text-base">
        {description.map((desc, idx) => {
          return (
            <li key={idx} className="flex items-start gap-x-1 text-accent mb-2">
              <span className="icon mt-[5px]">
                <VscChevronRight />
              </span>
              <span className="text-secondary">{desc}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkPlace;
