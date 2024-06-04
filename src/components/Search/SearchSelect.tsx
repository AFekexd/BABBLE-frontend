import AsyncCreatableSelect from "react-select/async-creatable";
import {
  useCreateTagMutation,
  useLazySearchTagsQuery,
} from "../../features/forum/tagsApiSlice";
import { useEffect, useState } from "react";

interface Option {
  readonly value: string;
  readonly label: string;
}
const SearchSelect = ({ setTags }: { setTags: (tags: string[]) => void }) => {
  const createOption = (id, name) => ({ value: id, label: name });

  const [trigger] = useLazySearchTagsQuery();
  const [createdTagTrigger, { isLoading }] = useCreateTagMutation();
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);

  const promiseOptions = async (inputValue: string) => {
    if (!inputValue) return [];
    if (inputValue.length < 3) return [];
    const response = await trigger(inputValue.toLocaleLowerCase());
    return response.data.map((tag) => createOption(tag.id, tag.name));
  };

  const handleCreate = async (inputValue: string) => {
    if (!inputValue) return;
    if (inputValue.length < 3) return;
    if (inputValue.length > 100) return;
    const response = await createdTagTrigger({ name: inputValue });
    setSelectedTags([
      ...selectedTags,
      createOption(response.data.id, response.data.name),
    ]);
  };

  useEffect(() => {
    setTags(selectedTags.map((tag) => tag.value));
  }, [selectedTags, setTags]);

  return (
    <AsyncCreatableSelect
      isClearable
      isMulti
      isLoading={isLoading}
      defaultOptions
      loadOptions={promiseOptions}
      onCreateOption={handleCreate}
      noOptionsMessage={() => "Nincs találat"}
      formatCreateLabel={(inputValue) => `Létrehozás: ${inputValue}`}
      value={selectedTags}
      onChange={(value) => setSelectedTags(value)}
      styles={{
        control: (provided) => ({
          ...provided,
          width: "100%",
          backgroundColor: "#3f3f46",
          borderColor: "#3f3f46",
          hover: {
            borderColor: "#bd93f9",
          },
        }),
        menu: (provided) => ({
          ...provided,
          width: "100%",
          backgroundColor: "#3f3f46",
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: "#29292e",
          color: "#f8f8f2",
        }),
        multiValue: (provided) => ({
          ...provided,
          backgroundColor: "#f5a524",
        }),
        multiValueLabel: (provided) => ({
          ...provided,
          color: "#f8f8f2",
        }),
        multiValueRemove: (provided) => ({
          ...provided,
          color: "#f8f8f2",
          hover: {
            backgroundColor: "#bd93ff",
            color: "#f8f8f2",
          },
        }),
        input: (provided) => ({
          ...provided,
          color: "#f8f8f2",
        }),
      }}
    />
  );
};

export default SearchSelect;
