import groupImage from "/public/Group 4 (1).png";

function ContactForm() {
  return (
    <div className="flex items-center justify-between mt-28">
      <div className="flex items-center gap-10 flex-col">
        <h1 className="text-[128px] w-[372px] h-[286px] leading-[142.85px] ">
          Get in Touch
        </h1>
        <p className="text-[30px] w-[403px]">
          Building Relationships, One Conversation at a Time
        </p>
      </div>
      <form className="flex flex-col gap-5 ">
        <input
          className="w-[668px] h-[53px] border-2 border-[#000000] px-5"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-[668px] h-[53px] border-2 border-[#000000] px-5"
          type="text"
          placeholder="Email"
        />
        <textarea
          className="w-[668px] h-[152px] border-2 border-[#000000] p-5"
          type="text"
          placeholder="Type your message here"
        />

        <button className="flex items-center justify-between p-3 cursor-pointer mt-2 bg-[#FFC50A] w-[229.54px] h-[64.26px] ">
          <p className="text-black text-[18px] font-bold">Submit</p>
          <img
            src={groupImage}
            alt="Submit Button"
            className="cursor-pointer"
          />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
