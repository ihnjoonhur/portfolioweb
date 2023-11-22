"use client";
import { useState } from "react";
import workhistory from "../../data/workhistory";
import WorkPlace from "./WorkPlace";
import { motion } from "framer-motion";
import { SectionAnimation } from "../util/animations";
const Work = () => {
  const [tabPosition, setTabPosition] = useState<number>(1);
  const [workplaceTransition, setWorkplaceTransition] = useState<string>("opacity-100");
  const [highligherPosition, setHighlighterPosition] = useState<string>("translate-y-0");
  const tabBaseStyles =
    "min-w-[135px] w-[135px] text-left text-sm font-thin h-11 px-5 pb-[2px] border-b-[2px] border-b-silverGrey md:border-b-[0px] md:border-l-[2px] md:border-l-silverGrey transition-all duration-150 ease-in-out font-spacemono hover:bg-secondaryBg hover:text-accent";
  const unselectedTab = `${tabBaseStyles} text-secondary`;
  const selectedTab = `${tabBaseStyles} text-accent`;

  const handleChangeTabs = (e: any): void => {
    let newTabPosition = e.target.dataset.tab;
    let newHighlighterPosition: string = "";
    let setNewHighligterPositionString: string = "";
    newHighlighterPosition = window.innerWidth < 768 ? `${String((newTabPosition - 1) * 134)}px` : `${String((newTabPosition - 1) * 42)}px`;
    setNewHighligterPositionString = window.innerWidth < 768 ? `translate-x-[${newHighlighterPosition}]` : `translate-y-[${newHighlighterPosition}]`;

    setWorkplaceTransition("opacity-0");

    setTimeout(() => {
      setTabPosition(newTabPosition);
      setHighlighterPosition(setNewHighligterPositionString);
      setWorkplaceTransition("opacity-100");
    }, 200);
  };

  return (
    <>
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SectionAnimation} id="work" className="work-section mt-10 mb-52 max-w-3xl mx-auto">
        <h2 className="flex justify-start items-center text-xl lg:text-3xl font-medium relative section-header-line after:w-[14vw] sm:after:w-[38vw] lg:after:w-[300px]">Where I've Worked</h2>

        <div className="work-section-container relative flex justify-start items-start flex-col mt-5 md:flex-row md:mt-14 gap-x-10">
          <div className="work-section-tabs scrollbar w-full overflow-x-auto relative tabs flex mb-8 md:mb-0 md:flex-col justify-start h-full">
            {workhistory.map((workplace) => {
              return (
                <button data-tab={workplace.id} onClick={(e) => handleChangeTabs(e)} key={workplace.id} className={tabPosition == workplace.id ? selectedTab : unselectedTab}>
                  {workplace.companyName}
                </button>
              );
            })}
            <div className={`highlight absolute w-[8.5rem] h-[2px] top-[42px] md:top-0 md:left-0 z-10 md:w-[2px] md:h-11 rounded bg-accent transition-all duration-200  transform ${highligherPosition}`}></div>
          </div>
          <div className={`work-content relative transition-all duration-200 ease-in-out ${workplaceTransition}`}>
            {workhistory.map((workplace) => {
              return (
                <WorkPlace
                  key={workplace.id}
                  tabPosition={tabPosition}
                  id={workplace.id}
                  companyName={workplace.companyName}
                  companyLink={workplace.companyLink}
                  position={workplace.position}
                  timeEmployed={workplace.timeEmployed}
                  description={workplace.description}
                />
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Work;
