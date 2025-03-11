import Image from "next/image";

const StartPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center relative">
      {/* Image bakground */}
      <img
        src="/bg/PG BG 01.png"
        alt="start game"
        className="absolute -z-10 top-20 left-0 w-[520px] h-[932px] lg:max-w-[400px] lg:max-h-[700px] object-cover"
      />
      {/*  */}
      <div className="flex-1"></div>
      {/* Text */}
      <div className="text-white w-full text-center pb-10">
        <div>
          Embark on a celestial journey <br />
          through our psychological game, <br />
          where our choice reveals a unique star <br />
          in the galaxy of your personality <br />
        </div>

        <div className="mt-4 font-semibold">Let the voyage begin</div>

        <button className="py-6 px-10 mt-10 bg-red-100">Start</button>
      </div>
    </div>
  );
};
const PageOne = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center relative">
      {/* Image Background */}
      <img
        src="/bg/PG BG 00.png"
        alt="start game"
        className="absolute -z-10 top-20 left-0 w-[520px] h-[932px] lg:max-w-[400px] lg:max-h-[700px] object-cover"
      />

      {/* Header Section */}
      <div className="mt-[20vh] pt-20 text-white text-center">
        <h1 className="text-lg font-bold">Door Choice Personality Test</h1>
        <img src="/icons/" alt="Test Icon" className="mx-auto mt-4" />
      </div>

      {/* Question Section */}
      <div className="text-white w-full text-center flex-1 flex flex-col justify-center">
        <p className="px-4">
          Imagine you're walking down a hallway
          <br />
          with three doors.
          <br />
          Each door is painted a different color.
        </p>

        {/* Door Choices */}
        <div className="w-full grid gap-4 mt-10">
          <button className="py-4 px-10 text-white rounded-lg">
            Door A - Bright Red
          </button>
          <button className="py-4 px-10 text-white rounded-lg">
            Door B - Bright Blue
          </button>
          <button className="py-4 px-10 text-white rounded-lg">
            Door C - Vibrant Yellow
          </button>
        </div>
      </div>

      {/* Footer Section (Now Sticks to Bottom) */}
      <div className="w-full">
        <img src="/footer/foot.png" className="w-full" alt="Footer Image" />
      </div>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center relative">
      {/* Image Background */}
      <img
        src="/bg/PG BG 00.png"
        alt="start game"
        className="absolute -z-10 top-20 left-0 w-[520px] h-[932px] lg:max-w-[400px] lg:max-h-[700px] object-cover"
      />

      {/* Header Section */}
      <div className="mt-[20vh] pt-20 text-white text-center">
        <h1 className="text-lg font-bold">Animal Preference Test</h1>
        <img src="/icons/" alt="Test Icon" className="mx-auto mt-4" />
      </div>

      {/* Question Section */}
      <div className="text-white w-full text-center flex-1 flex flex-col justify-center">
        <p className="px-4">
          If you were to choose one animal as a pet,
          <br />
          which would it be?
          <br />
        </p>

        {/* Door Choices */}
        <div className="w-full grid gap-4 mt-10">
          <button className="py-4 px-10 text-white rounded-lg">
            A - A loyal dog
          </button>
          <button className="py-4 px-10 text-white rounded-lg">
            B - An independent cat
          </button>
          <button className="py-4 px-10 text-white rounded-lg">
            C - mystrious snake
          </button>
          <button className="py-4 px-10 text-white rounded-lg">
            C - Aplayful monkey
          </button>
        </div>
      </div>

      {/* Footer Section (Now Sticks to Bottom) */}
      <div className="w-full">
        <img src="/footer/foot.png" className="w-full" alt="Footer Image" />
      </div>
    </div>
  );
};

const PageThree = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center relative">
      {/* Image Background */}
      <img
        src="/bg/PG BG 00.png"
        alt="start game"
        className="absolute -z-10 top-20 left-0 w-[520px] h-[932px] lg:max-w-[400px] lg:max-h-[700px] object-cover"
      />

      {/* Header Section */}
      <div className="mt-[20vh] pt-20 text-white text-center">
        <h1 className="text-lg font-bold">Tree image association</h1>
        <img src="/icons/" alt="Test Icon" className="mx-auto mt-4" />
      </div>

      {/* Question Section */}
      <div className="text-white w-full text-center flex-1 flex flex-col justify-center">
        <p className="px-4">
          Choose the tree <br />
          that you feel most drawn to?
        </p>

        {/* Door Choices */}
        <div className="w-full grid gap-4 mt-10">
          <button className="py-4 px-10 text-white rounded-lg">
            A - towering. robust oak tree
          </button>
          <button className="py-4 px-10 text-white rounded-lg">
            A - slender, grance full will tree
          </button>
          <button className="py-4 px-10 text-white rounded-lg">
            A - small, vibrant cherry blossom tree
          </button>
        </div>
      </div>

      {/* Footer Section (Now Sticks to Bottom) */}
      <div className="w-full">
        <img src="/footer/foot.png" className="w-full" alt="Footer Image" />
      </div>
    </div>
  );
};

const PageForth = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center relative">
      {/* Image Background */}
      <img
        src="/bg/PG BG 00.png"
        alt="start game"
        className="absolute -z-10 top-20 left-0 w-[520px] h-[932px] lg:max-w-[400px] lg:max-h-[700px] object-cover"
      />

      {/* Header Section */}
      <div className="mt-[20vh] pt-20 text-white text-center">
        <h1 className="text-lg font-bold">seasonal Preference insight test</h1>
        <img src="/icons/" alt="Test Icon" className="mx-auto mt-4" />
      </div>

      {/* Question Section */}
      <div className="text-white w-full text-center flex-1 flex flex-col justify-center">
        <p className="px-4">
          Which season do you
          <br />
          feel most connected to?
          <br />
        </p>

        {/* Door Choices */}
        <div className="w-full grid gap-4 mt-10">
          <button className="py-4 px-10 text-white rounded-lg">
            A - Spring
          </button>
          <button className="py-4 px-10 text-white rounded-lg">
            B - Summer
          </button>
          <button className="py-4 px-10 text-white rounded-lg">
            C - Auttumn
          </button>
          <button className="py-4 px-10 text-white rounded-lg">
            D - Winter
          </button>
        </div>
      </div>

      {/* Footer Section (Now Sticks to Bottom) */}
      <div className="w-full">
        <img src="/footer/foot.png" className="w-full" alt="Footer Image" />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="">
      {/* <StartPage /> */}

      {/* <PageOne /> */}

      <PageTwo />
    </div>
  );
}
