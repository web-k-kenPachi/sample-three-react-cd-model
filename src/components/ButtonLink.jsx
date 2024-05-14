const ButtonLink = ({ children, href, blank, red }) => {
  return (
    <a
      href={href}
      className={`group flex flex-wrap items-center gap-6 md:gap-8 ${red ? 'text-themeRed-800' : 'text-white'}`}
      target={blank ? '_blank' : '_self'}
    >
      <span className=" font-Anton text-4xl md:text-5xl">{children}</span>
      <div
        className={`${red ? 'border-themeRed-800 before:bg-themeRed-800 after:bg-themeRed-800' : 'border-white before:bg-white after:bg-white'} relative h-8 w-8 rounded-[50%] border-2 before:absolute before:-right-[14px] before:top-1/2 before:h-[1px] before:w-[32px] before:transition-all before:duration-200 before:content-[''] after:absolute  after:-right-[9px] after:top-[4px] after:h-[10px] after:w-[2px] after:skew-x-[45deg] after:transition-all after:content-[''] group-hover:before:-right-[16px] group-hover:after:-right-[12px] md:h-12  md:w-12 md:before:-right-[22px]  md:before:w-[48px] md:after:-right-[17px]
        md:after:top-[11px] md:after:h-[12px]
        md:group-hover:before:-right-[32px] md:group-hover:after:-right-[26px]`}
      ></div>
    </a>
  );
};

export default ButtonLink;
