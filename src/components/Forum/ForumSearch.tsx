import { Card, Input, Select, SelectItem } from "@nextui-org/react";
import { MdSearch } from "react-icons/md";

const ForumSearch = () => {
  return (
    <Card className="p-1 m-2">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search"
          endContent={
            <MdSearch
              className="cursor-pointer hover:text-primary-500 transition-all duration-300 ease-in-out"
              onClick={() => console.log("Search")}
            />
          }
        />
        <Select placeholder="Filter">
          <SelectItem key={1} value="all">
            All
          </SelectItem>
          <SelectItem key={2} value="recent">
            Recent
          </SelectItem>
          <SelectItem key={3} value="popular">
            Popular
          </SelectItem>
          <SelectItem key={4} value="unanswered">
            Unanswered
          </SelectItem>
        </Select>
      </div>
    </Card>
  );
};

export default ForumSearch;
