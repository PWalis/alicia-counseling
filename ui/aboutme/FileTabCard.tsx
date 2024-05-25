import react from "react";

export function FileTabCard() {
  return (
    <div className="grid grid-cols-3 grid-rows-8">
      <div className="flex flex-row justify-between col-span-3 px-4">
        <div className="border border-1 border-gray-200 bg-orange-100 rounded-t-[20px]">
          <p>Biography</p>
        </div>
        <div>
          <p>Background</p>
        </div>
        <div>
          <p>Education</p>
        </div>
      </div>
      <div className="relative row-start-2 row-span-7 col-start-1 col-span-8">
        <div className="flex flex-col gap-4 rounded-[20px] border border-1 border-gray-400">
          <h4>Hey y'all!</h4>
          <p>I am Alicia Wimsatt,</p>
          <p>
            and I am an LPC Associate supervised by Shawna Storey-Lovin,
            LPC-S. I am the Owner of Couch Talk Counseling and Coaching.
          </p>
          <p>
            Aside from the fancy titles, I am a fellow Wise-Countian, boy mom x
            2, wife, an avid iced coffee fanatic, and a lover of all things that
            involve mental health.
          </p>
          <p>
            In my free time, you can find me talking too much, thanking Jesus,
            planning my next vacation (it is self-care after all right?!?!),
            practicing what I preach (you know, trying to use all those coping
            skills I harp on), being “one of those moms” at a local ball game,
            and trying new recipes!
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
