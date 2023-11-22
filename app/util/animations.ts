export const SectionAnimation = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
      delay: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    y: 40,
  },
};

export const NavLinksAnimation = {
  visible: (idx: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      opacity: {
        delay: 0.4,
      },
      y: {
        delay: idx * 0.1,
      },
    },
  }),
  hidden: { opacity: 0, y: -20 },
};

export const IntroAnimation = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
      delay: 1.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const IntroAnimationItems = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const ProjectsAnimation = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
      delay: 0.1,
    },
  },
  hidden: { opacity: 0, y: 20 },
};
