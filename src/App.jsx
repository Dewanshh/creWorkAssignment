import React, { useState } from "react";
import png1 from "../assets/png1.png";
import png2 from "../assets/png2.png";
import png3 from "../assets/png3.png";
import SearchBar from "./SearchBar";
import TodoCard from "./TodoCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { ReactComponent as Calender } from "../assets/calender.svg";
// import { ReactComponent as Automation } from "../assets/automation.svg";
// import { ReactComponent as Filter } from "../assets/filter.svg";
// import { ReactComponent as PlusIcon } from "../assets/plus.svg";
// import { ReactComponent as ThreeDot } from "../assets/threedot.svg";
// import { ReactComponent as Help } from "../assets/help.svg";

const initialData = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    name: "Walmart",
    items: [
      { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "3% Milk" },
      { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter" },
    ],
    tint: 1,
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "Indigo",
    items: [
      {
        id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
        name: "Designing Data Intensive Applications",
      },
      { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits" },
    ],
    tint: 2,
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
    name: "Lowes",
    items: [
      { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Workbench" },
      { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Hammer" },
    ],
    tint: 3,
  },
];

function LeftPanel() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If the destination is null, the item was dropped outside of any droppable area
    if (!destination) {
      return;
    }

    // If the item was dropped in the same place, do nothing
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // Find the source and destination columns
    const sourceColumn = data.find(column => column.id === source.droppableId);
    const destinationColumn = data.find(column => column.id === destination.droppableId);

    // Clone the items arrays
    const sourceItems = Array.from(sourceColumn.items);
    const destinationItems = Array.from(destinationColumn.items);

    // Remove the item from the source column
    const [movedItem] = sourceItems.splice(source.index, 1);

    // Add the item to the destination column
    destinationItems.splice(destination.index, 0, movedItem);

    // Update the columns
    const newData = data.map(column => {
      if (column.id === source.droppableId) {
        return { ...column, items: sourceItems };
      } else if (column.id === destination.droppableId) {
        return { ...column, items: destinationItems };
      } else {
        return column;
      }
    });

    // Update the state
    setData(newData);
  };

  return (
    <div className="flex flex-col h-full w-full px-[12px] ml-[301px] pt-[32px] pb-[24px] gap-[16px] ">
      <div className="space-y-[16px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[48px] text-[#080808] font-[600]">Good morning, Joe!</h1>
          <div className="flex items-center gap-[8px]">
            {/* <Help /> */}
            <p className="text-[16px] font-[400]">Help & Feedback</p>
          </div>
        </div>

        <div className="flex gap-[8px]">
          <div className="flex items-center p-[16px] border-[1px] bg-white border-[#f4f4f4] gap-[10px]">
            <img src={png1} className="h-[70px] object-fill w-[76px]" />
            <div>
              <h3 className="text-[16px] font-[600] text-[#757575]">Introductory tags</h3>
              <p className="text-[14px] font-[400] text-[#868686]">
                Easily categorize and find your notes by adding tags. Keep your
                workspace clutter-free and efficient.
              </p>
            </div>
          </div>
          <div className="flex items-center p-[16px] border-[1px] bg-white border-[#f4f4f4] gap-[10px]">
            <img src={png2} className="h-[50px] object-fill w-[76px]" />
            <div>
              <h3 className="text-[16px] font-[600] text-[#757575]">Share Notes Instantly</h3>
              <p className="text-[14px] font-[400] text-[#868686]">
                Effortlessly share your notes with others via email or link.
                Enhance collaboration with quick sharing options.
              </p>
            </div>
          </div>
          <div className="flex items-center p-[16px] border-[1px] bg-white border-[#f4f4f4] gap-[10px]">
            <img src={png3} className="h-[70px] object-fill w-[76px]" />
            <div>
              <h3 className="text-[16px] font-[600] text-[#757575]">Introductory tags</h3>
              <p className="text-[14px] font-[400] text-[#868686]">
                Sync your notes across all devices. Stay productive whether
                you're on your phone, tablet, or computer.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <SearchBar />
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center p-[8px] hover:cursor-pointer rounded-[4px] h-[40px] gap-x-[14px]">
                {/* <Calender /> */}
                <p className="text-[16px] font-[400] text-[#797979]">Calendar View</p>
              </div>
              <div className="flex items-center hover:cursor-pointer p-[8px] rounded-[4px] h-[40px] gap-x-[14px]">
                {/* <Automation /> */}
                <p className="text-[16px] font-[400] text-[#797979]">Automation</p>
              </div>
              <div className="flex items-center hover:cursor-pointer p-[8px] rounded-[4px] h-[40px] gap-x-[14px]">
                {/* <Filter /> */}
                <p className="text-[16px] font-[400] text-[#797979]">Filters</p>
              </div>
            </div>
            <button className="h-[40px] rounded-[4px] px-[14px] bg-[#ffd133] text-black font-[500]">
              {/* <PlusIcon /> */}
              Create new note
            </button>
          </div>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-[16px]">
            {data.map((column) => (
            <div>
              <Droppable key={column.id} droppableId={column.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="column"
                    style={{ border: "1px solid #ccc", padding: "8px", width: "250px" }}
                  >
                    <div className="flex items-center justify-between">
                      <h2>{column.name}</h2>
                      {/* <ThreeDot /> */}
                    </div>
                    {column.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="todo-item"
                            
                          >
                            {item.name}
                            <TodoCard />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                  
                )}
              </Droppable>
              <div className="flex items-center justify-between w-full rounded-[8px] p-[12px] bg-gradient-to-r from-[#3a3a3a] to-[#202020] ">
                <p className="text-[16px] font-[400] text-[#e3e1e1]">Add new</p>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 7H6.75M6.75 7H12.75M6.75 7V1M6.75 7V13" stroke="#E3E1E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
                </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default LeftPanel;
