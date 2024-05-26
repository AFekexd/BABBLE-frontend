import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
} from "@nextui-org/react";
import { useState } from "react";
import { CgSmileMouthOpen } from "react-icons/cg";

const EmojiPicker = () => {
  const listOfEmojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤨",
    "🧐",
    "🤓",
    "😎",
    "🤩",
    "🥳",
    "😏",
    "😒",
    "😞",
    "😔",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😣",
    "😖",
    "😫",
    "😩",
    "🥺",
    "😢",
    "😭",
    "😤",
    "😠",
    "😡",
    "🤬",
    "🤯",
    "😳",
    "🥵",
    "🥶",
    "😱",
    "😨",
    "😰",
    "😥",
    "😓",
    "🤗",
    "🤔",
    "🤭",
    "🤫",
    "🤥",
    "😶",
    "😐",
    "😑",
    "😬",
    "🙄",
    "😯",
    "😦",
    "😧",
    "😮",
    "😲",
    "🥱",
    "😴",
    "🤤",
    "😪",
    "😵",
    "🤐",
    "🥴",
    "🤢",
    "🤮",
    "🤧",
    "😷",
    "🤒",
    "🤕",
    "🤑",
    "🤠",
    "😈",
    "👿",
    "👹",
    "👺",
  ];

  const [freqventEmojis, setFreqventEmojis] = useState(
    listOfEmojis.slice(0, 8)
  );
  return (
    <>
      <Popover placement="top">
        <PopoverTrigger>
          <CgSmileMouthOpen />
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col p-2 gap-1">
            <div>Frequent Emojis</div>
            <div className="grid grid-cols-5 gap-1">
              {freqventEmojis.map((emoji, index) => (
                <div>
                  <span
                    className="hover:bg-gray-800 p-1 rounded cursor-pointer"
                    key={index}
                  >
                    {emoji}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-5 gap-1 p-2 max-h-[100px] overflow-y-auto">
            {listOfEmojis.map((emoji, index) => (
              <span
                className="hover:bg-gray-800 p-1 rounded cursor-pointer"
                key={index}
              >
                {emoji}
              </span>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default EmojiPicker;
