const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-end justify-end font-spacemono text-secondary text-[9px] pt-10 px-1 md:p-10">
        <div>Coded by Bryan Yi</div>
        <div>
          Design inspired by{" "}
          <a className="transition duration-150 hover:text-accent" href="https://github.com/bchiang7">
            Brittany Chiang
          </a>{" "}
        </div>
      </footer>
    </>
  );
};

export default Footer;
