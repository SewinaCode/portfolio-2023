const styles = {
  boxWidth: "xl:max-w-[1440px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  fontSize: "sm:text-lg lg:text-3xl",
  smlFont2xl: "2xl:text-2xl",
  medFont2xl: "2xl:text-xl",

  latoBold: "font-lato font-bold",
  latoSemi: "font-lato font-semibold",
  lato: "font-lato",

  paddingX: "sm:px-6 px-16",
  paddingY: "sm:py-16 py-6",
  padding:
    "sm:px-8 md:px-16 xl:px-32 2xl:px-32 px-[70px] sm:py-12 2xl:py-10 py-[50px] ",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  marginXL: "xl:mx-36 lg:mx-36 md:mx-3 sm:mx-0",
  margin: "sm:mx-3 mx-[30px] sm:my-5 my-[70px]",

  widthXL: "2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
