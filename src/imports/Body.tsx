import svgPaths from "./svg-kdcc61xn1e";
import imgImage1 from "figma:asset/e3020925f0aa6addc2bb7e10d36de08358d0c6d0.png";

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#aa8517] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">{`Full Stack Developer & Designer`}</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Russo_One:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[64px] tracking-[-1.8px] w-full">
        <p className="leading-[72px]">
          Creative Technologist
          <br aria-hidden="true" />
          AI Engineer × Designer × Builder
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[29.25px] relative shrink-0 text-[#fff4ca] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Building AI systems, digital products, `}</p>
        <p>and large-scale creative experiences.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Heading />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#aa8517] content-stretch flex gap-[8px] items-center pb-[18px] pt-[17.5px] px-[32px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Black',sans-serif] font-black h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[131.16px]">
        <p className="leading-[24px]">VIEW PROJECTS</p>
      </div>
      <Container6 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[34px] py-[18px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,193,7,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Public_Sans:Black',sans-serif] font-black h-[24px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[16px] text-center w-[108.44px]">
        <p className="leading-[24px]">CONTACT ME</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container2 />
      <Container5 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[1200px] relative shrink-0 w-[960px]" data-name="Hero Section">
      <Container1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[27px] relative shrink-0 w-[33px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 27">
        <g id="Container">
          <path d={svgPaths.p2edc0780} fill="var(--fill-0, #AA8517)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <Container8 />
      <div className="flex flex-col font-['Public_Sans:Black',sans-serif] font-black h-[36px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[30px] w-[147.23px]">
        <p className="leading-[36px]">Education</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[24px] w-[412.03px]">
        <p className="leading-[32px]">Sardar Patel Institute of Technology</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#aa8517] text-[16px] w-[336.53px]">
        <p className="leading-[24px]">Bachelor of Technology in Computer Science</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pt-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[48px] justify-center leading-[24px] relative shrink-0 text-[#f3e8d8] text-[16px] w-[612.14px]">
        <p className="mb-0">{`Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database`}</p>
        <p>Management, Machine Learning, Web Technologies.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[124px] relative shrink-0 w-[612.14px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading2 />
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,193,7,0.2)] content-stretch flex items-start justify-end px-[16px] py-[2px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-right text-white w-[86.41px]">
        <p className="leading-[20px]">2021 — 2025</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-end relative">
        <Overlay />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#282621] content-stretch flex items-end justify-between pb-[33px] pl-[33px] pr-[40px] pt-[31px] relative rounded-[8px] shrink-0 w-[800px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(3,2,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container9 />
      <div className="flex flex-row items-end self-stretch">
        <Container12 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <BackgroundBorderShadow />
    </div>
  );
}

function EducationSection() {
  return (
    <div className="bg-[rgba(97,85,50,0.05)] relative shrink-0 w-full" data-name="Education Section">
      <div className="content-stretch flex flex-col items-start pb-[48px] pl-[92px] pr-[160px] pt-[80px] relative w-full">
        <Container7 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Black',sans-serif] font-black h-[40px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[36px] text-center w-[346.8px]">
        <p className="leading-[40px]">WHAT I BUILD</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <div className="bg-[#aa8517] h-[6px] rounded-[12px] shrink-0 w-[96px]" data-name="Background" />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[15px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 15">
        <g id="Container">
          <path d={svgPaths.p3cf6e1e0} fill="var(--fill-0, #AA8517)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(3,2,0,0.1)] content-stretch flex items-center justify-center left-[33px] rounded-[4px] size-[56px] top-[33px]" data-name="Overlay">
      <Container15 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[76.67px] top-[113px]" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[20px] w-[247px]">
        <p className="leading-[28px]">Full-Stack Platforms</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[97px] items-start left-[33px] right-[-27.33px] top-[157px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[78px] justify-center leading-[26px] relative shrink-0 text-[#fff4ca] text-[16px] w-[268px]">
        <p className="mb-0">
          Scalable web and mobile systems.
          <br aria-hidden="true" />
          React, Next.js, Node.js,
        </p>
        <p className="mb-0">Tailwind CSS, MongoDB,</p>
        <p>PostgreSQL, RESTful APIs</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#282621] col-1 h-[268px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(3,2,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Overlay1 />
      <Heading4 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[25px] relative shrink-0 w-[23.765px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7647 25">
        <g id="Container">
          <path d={svgPaths.p3f5d9a00} fill="var(--fill-0, #AA8517)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(3,2,0,0.1)] content-stretch flex items-center justify-center left-[33px] rounded-[4px] size-[56px] top-[33px]" data-name="Overlay">
      <Container17 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[113px]" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[20px] w-[215.09px]">
        <p className="leading-[28px]">AI Applications</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[157px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[78px] justify-center leading-[26px] relative shrink-0 text-[#fff4ca] text-[16px] w-[232px]">
        <p className="mb-0">Computer vision systems and ML products.</p>
        <p className="mb-0">Python ,React, Flask, Node.js,</p>
        <p>YOLOv8</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-[#282621] col-2 h-[268px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(3,2,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Overlay2 />
      <Heading5 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
        <g id="Container">
          <path d={svgPaths.p9c1d400} fill="var(--fill-0, #AA8517)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="absolute bg-[rgba(3,2,0,0.1)] content-stretch flex items-center justify-center left-[33px] rounded-[4px] size-[56px] top-[33px]" data-name="Overlay">
      <Container19 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33.01px] top-[113px]" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[20px] w-[204px]">
        <p className="leading-[28px]">Creative Experiences</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33.01px] top-[157px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[52px] justify-center leading-[0] relative shrink-0 text-[#fff4ca] text-[16px] w-[220.19px]">
        <p className="leading-[26px]">Digital visuals, branding, and design systems</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-[#282621] col-3 h-[268px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(3,2,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Overlay3 />
      <Heading6 />
      <Container20 />
    </div>
  );
}

function Container14() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_268px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
    </div>
  );
}

function SectionTechnicalExpertise() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1200px] relative shrink-0 w-[960px]" data-name="Section - Technical Expertise">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[430px]" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Black',sans-serif] font-black h-[52px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[36px] w-full">
        <p className="leading-[40px]">PROJECT SECTION TEXT IMPROVEMENT</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#fff4ca] text-[16px] w-[322.38px]">
        <p className="leading-[24px]">Turning ideas into scalable digital products.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading7 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p22fc1b80} fill="var(--fill-0, #AA8517)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#aa8517] text-[16px] w-[115.86px]">
        <p className="leading-[24px]">ALL PROJECTS</p>
      </div>
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Link />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[30px] w-full">
        <p className="leading-[36px]">NutriLens</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[463px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff4ca] text-[18px] w-full">
        <p className="leading-[29.25px]">
          AI system that recognizes Indian food
          <br aria-hidden="true" />
          and automatically tracks nutrition.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#282621] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,193,7,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[13px] py-[5px] relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[12px] w-[33.19px]">
          <p className="leading-[16px]">React</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#282621] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,193,7,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[13px] py-[5px] relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[12px] w-[61.14px]">
          <p className="leading-[16px]">YOLO</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#282621] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,193,7,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[13px] py-[5px] relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[12px] w-[49.7px]">
          <p className="leading-[16px]">Flask</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(64,63,57,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[14px] text-center w-[45.39px]">
        <p className="leading-[20px]">Github</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Button2 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container30 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-start justify-center relative shrink-0 w-[494px]" data-name="Container">
      <Heading8 />
      <Container28 />
      <Margin />
      <Margin1 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[30px] w-[452px]">
        <p className="leading-[36px]">Citation Detection System</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[496px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff4ca] text-[18px] w-full">
        <p className="leading-[29.25px]">
          Backend system that scrapes websites
          <br aria-hidden="true" />
          and maps responses to their source citations.
        </p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#282621] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,193,7,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[13px] py-[5px] relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[12px] w-[40.61px]">
          <p className="leading-[16px]">Next.js</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#282621] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,193,7,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[13px] py-[5px] relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[12px] w-[63.28px]">
          <p className="leading-[16px]">Express</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#282621] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,193,7,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col h-full items-start px-[13px] py-[5px] relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[12px] w-[47.47px]">
          <p className="leading-[16px]">SQLite</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container33 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(64,63,57,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[14px] text-center w-[45.39px]">
        <p className="leading-[20px]">Github</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container34 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[261px] items-start justify-center relative shrink-0 w-[188.5px]" data-name="Container">
      <Heading9 />
      <Container32 />
      <Margin2 />
      <Margin3 />
    </div>
  );
}

function Project() {
  return (
    <div className="col-1 content-stretch flex gap-[32px] h-[296px] items-start justify-self-stretch relative row-2 shrink-0" data-name="Project 2">
      <Container27 />
      <Container31 />
    </div>
  );
}

function Container26() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__261px_295.75px] h-[604.75px] relative shrink-0 w-full" data-name="Container">
      <Project />
      <div className="aspect-[698/576] col-1 justify-self-start relative row-1 self-stretch shrink-0" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[753px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container26 />
    </div>
  );
}

function Container35() {
  return <div className="h-[295.75px] shrink-0 w-full" data-name="Container" />;
}

function SectionFeaturedProjects() {
  return (
    <div className="bg-[rgba(97,85,50,0.05)] h-[858px] relative shrink-0 w-full" data-name="Section - Featured Projects">
      <div className="content-stretch flex flex-col items-start px-[160px] py-[64px] relative size-full">
        <Container21 />
        <Container35 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Black',sans-serif] font-black h-[40px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[36px] text-center w-[424.28px]">
        <p className="leading-[40px]">Extracurricular Activites</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="h-[40px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 40">
            <path d={svgPaths.p16032960} fill="var(--fill-0, #AA8517)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[20px] w-[310.11px]">
        <p className="leading-[28px]">CREATIVE WORK</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[104px] justify-center leading-[26px] relative shrink-0 text-[#fff4ca] text-[16px] w-[317.75px] whitespace-pre-wrap">
        <p className="mb-0">{`Blender 3D renders `}</p>
        <p className="mb-0">{`Poster designs `}</p>
        <p className="mb-0">{`Festival branding `}</p>
        <p>Motion graphics</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-full relative shrink-0 w-[317.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading11 />
        <Container39 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorderShadow() {
  return (
    <div className="bg-[#282621] col-1 h-[204px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Background+VerticalBorder+Shadow">
      <div aria-hidden="true" className="absolute border-[#aa8517] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[24px] items-start pl-[36px] pr-[32px] py-[32px] relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="relative shrink-0 size-[36px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
            <path d={svgPaths.p3f4cecb0} fill="var(--fill-0, #AA8517)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[20px] w-[294.72px]">
        <p className="leading-[28px]">ADD LEADERSHIP SECTION</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fff4ca] text-[16px] w-[295px]">
        <p className="leading-[26px]">
          Oculus Festival Director
          <br aria-hidden="true" />
          Leading a 100+ member team organizing
          <br aria-hidden="true" />
          {`SPIT's largest festival with 3000+ attendees.`}
        </p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-full relative shrink-0 w-[295px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading12 />
        <Container42 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorderShadow1() {
  return (
    <div className="bg-[#282621] col-2 h-[204px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Background+VerticalBorder+Shadow">
      <div aria-hidden="true" className="absolute border-[#aa8517] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[24px] items-start pl-[36px] pr-[32px] py-[32px] relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_204px] relative shrink-0 w-full" data-name="Container">
      <BackgroundVerticalBorderShadow />
      <BackgroundVerticalBorderShadow1 />
    </div>
  );
}

function SectionAchievements() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1200px] relative shrink-0 w-[960px]" data-name="Section - Achievements">
      <Heading10 />
      <Container36 />
    </div>
  );
}

function Main() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[128px] items-center left-1/2 pb-[96.25px] pt-[128px] top-[69px]" data-name="Main">
      <HeroSection />
      <EducationSection />
      <SectionTechnicalExpertise />
      <SectionFeaturedProjects />
      <SectionAchievements />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Black',sans-serif] font-black h-[60px] justify-center leading-[60px] relative shrink-0 text-[#935f17] text-[60px] text-center w-full whitespace-pre-wrap">
        <p className="mb-0">{`Got an idea? `}</p>
        <p>Let’s build something incredible.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[10px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10">
        <g id="Container">
          <path d={svgPaths.pc80eb80} fill="var(--fill-0, #935F17)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative self-stretch shrink-0" data-name="Link">
      <Container46 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#935f17] text-[16px] text-center w-[63.52px]">
        <p className="leading-[24px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p18c14180} fill="var(--fill-0, #935F17)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative self-stretch shrink-0" data-name="Link">
      <Container47 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#935f17] text-[16px] text-center w-[53.11px]">
        <p className="leading-[24px]">GitHub</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1167b760} fill="var(--fill-0, #935F17)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Link">
      <Container48 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#935f17] text-[16px] text-center w-[52.02px]">
        <p className="leading-[24px]">Twitter</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[32px] h-[24px] items-start relative shrink-0" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#f3e8d8] text-[14px] text-center w-[256.23px]">
          <p className="leading-[20px]">© 2024 Krish Sodhi. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#f3e8d8] text-[14px] text-center w-[155.55px]">
        <p className="leading-[20px]">Designed with Precision</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#aa8517] text-[14px] text-center w-[4.44px]">
        <p className="leading-[20px]">•</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#f3e8d8] text-[14px] text-center w-[114.98px]">
        <p className="leading-[20px]">Built with Passion</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] h-full items-start relative">
        <Container51 />
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[80px] relative shrink-0 w-full" data-name="Margin">
      <HorizontalBorder />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center pt-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[#aa8517] text-[30px] text-center w-[470px]">
        <p className="leading-[36px]">siddhesh.shinde23@spit.ac.in</p>
      </div>
      <Container45 />
      <Margin4 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Container44 />
    </div>
  );
}

function FooterContactSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer / Contact Section">
      <div className="content-stretch flex flex-col items-start px-[160px] py-[96px] relative w-full">
        <Container43 />
      </div>
    </div>
  );
}

function FooterContactSectionMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[80px] right-0 top-[3184px]" data-name="Footer / Contact Section:margin">
      <FooterContactSection />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[13.65px] relative shrink-0 w-[22.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4 13.65">
        <g id="Container">
          <path d={svgPaths.p33936400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#aa8517] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[32px]" data-name="Background">
      <Container56 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Public_Sans:Black',sans-serif] font-black h-[28px] justify-center leading-[0] relative shrink-0 text-[#ff9500] text-[20px] tracking-[-0.5px] uppercase w-[235px]">
        <p className="leading-[28px]">Siddhesh Shinde</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background />
      <Heading14 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[14px] w-[40.38px]">
        <p className="leading-[20px]">About</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[14px] w-[54.72px]">
        <p className="leading-[20px]">Projects</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[14px] w-[63.25px]">
        <p className="leading-[20px]">Expertise</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Public_Sans:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#ff9500] text-[14px] w-[93.2px]">
        <p className="leading-[20px]">Achievements</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#aa8517] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] w-[62.38px]">
        <p className="leading-[20px]">RESUME</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Nav">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Button4 />
    </div>
  );
}

function Container54() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative w-full">
        <Container55 />
        <Nav />
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(8,8,8,0.8)] content-stretch flex flex-col items-start left-0 pb-[17px] pt-[16px] px-[160px] right-0 top-0" data-name="Header - Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(3,2,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container54 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[4256px] min-h-[4256px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Main />
      <FooterContactSectionMargin />
      <HeaderNavigation />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#1d1b18] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <Container />
    </div>
  );
}