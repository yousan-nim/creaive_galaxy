"use client";
import React, { useState } from "react";

/* ------------------------- Interfaces ------------------------- */
interface StartPageProps {
  onNext: () => void;
}

interface PageOneProps {
  onOptionClick: (option: TestPageOption) => void;
}

interface TestPageOption {
  id: string;
  choise?: string;
  question: string;
  description: string;
  cardImage: string;
}

interface TestPageProps {
  title: string;
  question: string;
  icon: string;
  options: TestPageOption[];
  backgroundImage?: string;
  onOptionClick?: (option: TestPageOption) => void;
}

interface Answers {
  pageOneChoice?: TestPageOption;
  pageTwoChoice?: TestPageOption;
  pageThreeChoice?: TestPageOption;
  pageFourChoice?: TestPageOption;
}

interface SummaryPageProps {
  answers: Answers;
}

/* ------------------------- Reusable Components ------------------------- */
const Footer = () => {
  return (
    <div className="w-full">
      <img src="/footer/foot.png" className="w-full" alt="Footer Image" />
    </div>
  );
};

const TestPage: React.FC<TestPageProps> = ({
  title,
  question,
  options,
  icon,
  backgroundImage,
  onOptionClick,
}) => {
  return (
    <div className="w-screen md:w-[520px] h-screen md:max-h-[932px] flex flex-col justify-between items-center relative">
      {backgroundImage && (
        <img
          src={"https://yousan-nim.github.io/creaive_galaxy/" + backgroundImage}
          alt="Background"
          className="absolute -z-10 left-0 w-[520px] h-[932px]"
        />
      )}

      {/* Header */}
      <div className="mt-[5vh] pt-20 text-white text-center">
        <h1 className="text-lg font-bold uppercase text-[22px] text-cyan-400 px-2">
          {title}
        </h1>
        <img
          src={`/icon/${icon}`}
          alt="Test Icon"
          className="mx-auto mt-4 w-[100px]"
        />
      </div>

      {/* Question Section */}
      <div className="text-white w-full text-center flex-1 flex flex-col justify-center">
        <p className="text-[18px] px-10 pt-10">{question}</p>

        {/* Options */}
        <div className="w-full grid gap-4 mt-10">
          {options.map((option, index) => (
            <button
              key={index}
              className="py-4 px-10 text-white rounded-lg transition "
              onClick={() => onOptionClick?.(option)}
            >
              <div className=" border-cyan-100 border-b w-2/3 m-auto pb-2">
                {option.question}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

/* ------------------------- Individual Pages ------------------------- */
const StartPage = ({ onNext }: StartPageProps) => {
  return (
    <div className="w-screen md:w-[520px] h-screen md:max-h-[932px] flex flex-col justify-between items-center relative">
      <img
        src="/bg/PG BG 01.png"
        alt="start game"
        className="absolute -z-10 left-0 w-[520px] h-[932px]"
      />
      <div className="flex-1"></div>

      <div className="text-white w-full text-center pb-20">
        <div className="leading-6 text-[14px] font-qsv">
          Embark on a celestial journey <br />
          through our psychological game, <br />
          where your choice reveals a unique star <br />
          in the galaxy of your personality.
        </div>

        <div className="mt-10 text-[22px] font-thin font-qsv">
          Let the voyage begin!
        </div>

        <button
          className="py-4 px-12 rounded uppercase font-black text-xl mt-10 bg-transparent broder border-2 border-cyan-300"
          onClick={onNext}
        >
          Start
        </button>
      </div>
    </div>
  );
};

const PageOne = ({ onOptionClick }: PageOneProps) => {
  return (
    <TestPage
      title="Door Choice Personality Test"
      question="Imagine you're walking down a hallway with three doors. Each door is painted a different color."
      icon="Icon-01.png"
      options={[
        {
          id: "A",
          question: "Door A - Bright Red",
          description:
            "Choosing the red door suggests you are bold, energetic, and ready to take on challenges.",
          cardImage: "/card/Door/Red Door.png",
        },
        {
          id: "B",
          question: "Door B - Bright Blue",
          description:
            "Opting for the blue door indicates that you value peace, serenity, and stability.",
          cardImage: "/card/Door/Blue Door.png",
        },
        {
          id: "C",
          question: "Door C - Vibrant Yellow",
          description:
            "Picking the yellow door means you are optimistic, creative, and outgoing.",
          cardImage: "/card/Door/Yellow Door.png",
        },
      ]}
      backgroundImage="/bg/PG BG 00.png"
      onOptionClick={onOptionClick} // pass directly
    />
  );
};

const PageTwo = ({ onOptionClick }: PageOneProps) => {
  return (
    <TestPage
      title="Animal Preference Test"
      question="If you were to choose one animal as a pet, which would it be?"
      icon="Icon-02.png"
      options={[
        {
          id: "A",
          question: "A: A loyal dog",
          description: "Dog lovers are often loyal and enjoy companionship.",
          cardImage: "/card/Animal/Loyal Dog.png",
        },
        {
          id: "B",
          question: "B: An independent cat",
          description:
            "Those who prefer cats might value independence and quietude.",
          cardImage: "/card/Animal/Independent Cat.png",
        },
        {
          id: "C",
          question: "C: A mysterious snake",
          description:
            "Snake admirers could be curious and attracted to the unconventional.",
          cardImage: "/card/Animal/Mysterious Snake.png",
        },
        {
          id: "D",
          question: "D: A playful monkey",
          description:
            "Monkey enthusiasts are generally playful, energetic, and love being the center of attention.",
          cardImage: "/card/Animal/Playful Monkey.png",
        },
      ]}
      backgroundImage="/bg/PG BG 00.png"
      onOptionClick={onOptionClick} // Pass directly
    />
  );
};

const PageThree = ({ onOptionClick }: PageOneProps) => {
  return (
    <TestPage
      title="Tree Image Association"
      question="Choose the tree that you feel most drawn to?"
      icon="Icon-03.png"
      options={[
        {
          id: "A",
          question: "A: A towering, robust oak tree",
          description: "You might value strength, reliability, and resilience.",
          cardImage: "/card/Tree/Oak Tree.png",
        },
        {
          id: "B",
          question: "B: A slender, graceful willow tree",
          description:
            "You likely appreciate flexibility, elegance, and emotional depth.",
          cardImage: "/card/Tree/Willow Tree.png",
        },
        {
          id: "C",
          question: "C: A small, vibrant cherry blossom tree",
          description:
            "You may be drawn to beauty, renewal, and the joys of life.",
          cardImage: "/card/Tree/Blossom.png",
        },
      ]}
      backgroundImage="/bg/PG BG 00.png"
      onOptionClick={onOptionClick}
    />
  );
};

const PageFour = ({ onOptionClick }: PageOneProps) => {
  return (
    <TestPage
      title="Seasonal Preference Insight Test"
      question="Which season do you feel most connected to?"
      icon="Icon-04.png"
      options={[
        {
          id: "A",
          question: "A: Spring",
          description:
            "Spring lovers often appreciate new beginnings and are generally optimistic.",
          cardImage: "/card/Season/Spring.png",
        },
        {
          id: "B",
          question: "B: Summer",
          description:
            "Those who favor summer might enjoy high energy, warmth, and social gatherings.",
          cardImage: "/card/Season/Summer.png",
        },
        {
          id: "C",
          question: "C: Autumn",
          description:
            "Autumn admirers could reflect a love for change, comfort, and quiet preparation.",
          cardImage: "/card/Season/Autumn.png",
        },
        {
          id: "D",
          question: "D: Winter",
          description:
            "Winter enthusiasts might value introspection, peace, and purity.",
          cardImage: "/card/Season/Winter.png",
        },
      ]}
      backgroundImage="/bg/PG BG 00.png"
      onOptionClick={onOptionClick}
    />
  );
};
const SummaryPage = ({ answers }: SummaryPageProps) => {
  return (
    <div className="w-screen md:w-[520px] h-screen md:max-h-[932px] flex flex-col justify-between items-center relative">
      <img
        src="/bg/PG BG 02.png"
        alt="start game"
        className="absolute -z-10 left-0 w-[520px] h-[932px]"
      />

      <h1 className="text-2xl font-bold mb-4 pt-10 uppercase text-cyan-500">Your Personalied Galaxi</h1>
      <div className="w-full grid grid-cols-2">
        <img
          src={answers.pageOneChoice?.cardImage}
          alt="Door Choice"
          className="mx-auto mt-1 w-[150px] h-auto object-contain col-span-1"
        />

        <img
          src={answers.pageTwoChoice?.cardImage}
          alt="Animal Choice"
          className="mx-auto mt-1 w-[150px] h-auto object-contain col-span-1"
        />

        <img
          src={answers.pageThreeChoice?.cardImage}
          alt="Tree Choice"
          className="mx-auto mt-1 w-[150px] h-auto object-contain col-span-1"
        />

        <img
          src={answers.pageFourChoice?.cardImage}
          alt="Season Choice"
          className="mx-auto mt-1 w-[150px] h-auto object-contain col-span-1"
        />
      </div>

      <div className="w-full">
        <p className="w-full text-center text-[26px] font-black py-3 text-cyan-500">
          {answers.pageFourChoice?.id} {answers.pageTwoChoice?.id}{" "}
          {answers.pageThreeChoice?.id} {answers.pageFourChoice?.id}{" "}
        </p>
        <p className=" text-center text-[14px] font-thin pb-2 w-2/3 m-auto">
          {answers.pageFourChoice?.question}, {answers.pageTwoChoice?.question}{" "}
          ,{answers.pageThreeChoice?.question},{" "}
          {answers.pageFourChoice?.question}{" "}
        </p>
        <p className="text-[12px] text-center text-cyan-400">
          {answers.pageFourChoice?.description}{" "}
          {answers.pageTwoChoice?.description}{" "}
          {answers.pageThreeChoice?.description}{" "}
          {answers.pageFourChoice?.description}
        </p>

      </div>
        <button
          className="py-4 px-12 rounded uppercase font-black text-xl mt-10 bg-transparent broder border-2 border-cyan-300 m-auto"
          // onClick={onNext}
        >
          SHARE
        </button>
    </div>
  );
};

/* ------------------------- Main Page (Multi-Step) ------------------------- */

export default function Home() {
  const [currentPage, setCurrentPage] = useState<
    "start" | "one" | "two" | "three" | "four" | "summary"
  >("start");

  const [answers, setAnswers] = useState<Answers>({});

  // Receives the page ID (e.g., "one") and the chosen option object
  const handleOptionClick = (page: string, option: TestPageOption) => {
    setAnswers((prev) => {
      switch (page) {
        case "one":
          return { ...prev, pageOneChoice: option };
        case "two":
          return { ...prev, pageTwoChoice: option };
        case "three":
          return { ...prev, pageThreeChoice: option };
        case "four":
          return { ...prev, pageFourChoice: option };
        default:
          return prev;
      }
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "start":
        return (
          <StartPage
            onNext={() => {
              setCurrentPage("one");
            }}
          />
        );

      case "one":
        return (
          <PageOne
            onOptionClick={(option) => {
              handleOptionClick("one", option);
              setCurrentPage("two");
            }}
          />
        );

      case "two":
        return (
          <PageTwo
            onOptionClick={(option) => {
              handleOptionClick("two", option);
              setCurrentPage("three");
            }}
          />
        );

      case "three":
        return (
          <PageThree
            onOptionClick={(option) => {
              handleOptionClick("three", option);
              setCurrentPage("four");
            }}
          />
        );

      case "four":
        return (
          <PageFour
            onOptionClick={(option) => {
              handleOptionClick("four", option);
              setCurrentPage("summary");
            }}
          />
        );

      case "summary":
        return <SummaryPage answers={answers} />;

      default:
        return <StartPage onNext={() => setCurrentPage("one")} />;
    }
  };

  return <div>{renderPage()}</div>;
}
