import React, { useState } from "react";
import png1 from "../assets/png1.png";
import png2 from "../assets/png2.png";
import png3 from "../assets/png3.png";
import SearchBar from "./SearchBar";
import TodoCard from "./TodoCard";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const DATA = [
    {
      id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
      name: "Walmart",
      items: [
        { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "3% Milk" },
        // { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter" },
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
    const [stores,setStores]=useState(DATA);


    const handleDragDrops=(results)=>{
        console.log("Dragged",results);
        const {source,destination}=results;

        if(!destination) return ;
        if(source.droppableId===destination.droppableId&&source.index===destination.index) return;

        
        // const itemSourceIndex=source.index;
        // const itemDestinationIndex=destination.index;
        // const storeSourceIndex=stores.findIndex((store)=>store.name===source.droppableId);
        // const storeDestinationIndex=stores.findIndex((store)=>store.name===destination.droppableId);
        // const newSourceItems=[...stores[storeSourceIndex].items];
        // const newDestinationItems=[...stores[storeDestinationIndex].items];
        // const [deletedItem]=newSourceItems.splice(itemSourceIndex,1);
        // newDestinationItems.splice(itemDestinationIndex,0,deletedItem);
        const sourceColumn=stores.find(store=>store.id===source.droppableId);
        const destinationColumn = data.find(column => column.id === destination.droppableId);
        const sourceItems = Array.from(sourceColumn.items);
      const destinationItems = Array.from(destinationColumn.items);
      const [movedItem] = sourceItems.splice(source.index, 1);
  
      // Add the item to the destination column
      destinationItems.splice(destination.index, 0, movedItem);
  
        const newStores=stores.map(column=>{
            if(column.id===source.droppableId)
            {
                return {...column,items:sourceItems};
            }
            else if(column.id===destination.droppableId)
            {
                return {...column,items:destinationItems}
            }
            else{
                return column;
            }
        })
        console.log(newStores);
        setStores(newStores)
    

    }

  return (
    <div className="flex flex-col h-full w-full px-[12px] ml-[301px] pt-[32px] pb-[24px] gap-[16px] ">
      <div className="space-y-[16px]">
        {/* Customer Name */}
        <div className="flex items-center justify-between ">
          <h1 className="text-[48px] text-[#080808] font-[600]">
            Good morning, Joe!
          </h1>
          <div className="flex items-center gap-[8px]">
            <p className="text-[16px] font-[400]">Help & Feedback</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#080808" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9.00001C9 5.49998 14.5 5.50001 14.5 9.00001C14.5 11.5 12 10.9999 12 13.9999" stroke="#080808" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18.0099L12.01 17.9988" stroke="#080808" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>
        </div>

        {/* Icons and texts */}
        <div className="flex gap-[8px]">
          <div className="flex items-center p-[16px] border-[1px] bg-white border-[#f4f4f4] gap-[10px]">
            <img src={png1} className="h-[70px] object-fill w-[76px]" />
            <div>
              <h3 className="text-[16px] font-[600] text-[#757575]">
                Introductory tags
              </h3>
              <p className="text-[14px] font-[400] text-[#868686]">
                Easily categorize and find your notes by adding tags. Keep your
                workspace clutter-free and efficient.
              </p>
            </div>
          </div>
          <div className="flex items-center p-[16px] border-[1px] bg-white border-[#f4f4f4] gap-[10px]">
            <img src={png2} className="h-[50px] object-fill w-[76px]" />
            <div>
              <h3 className="text-[16px] font-[600] text-[#757575]">
                Share Notes Instantly
              </h3>
              <p className="text-[14px] font-[400] text-[#868686]">
                Effortlessly share your notes with others via email or link.
                Enhance collaboration with quick sharing options.
              </p>
            </div>
          </div>
          <div className="flex items-center p-[16px] border-[1px] bg-white border-[#f4f4f4] gap-[10px]">
            <img src={png3} className="h-[70px] object-fill w-[76px]" />
            <div>
              <h3 className="text-[16px] font-[600] text-[#757575]">
                Introductory tags
              </h3>
              <p className="text-[14px] font-[400] text-[#868686]">
                Sync your notes across all devices. Stay productive whether
                you're on your phone, tablet, or computer.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between">
          <SearchBar />
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center p-[8px] hover:cursor-pointer rounded-[4px] h-[40px] gap-x-[14px]">
                <p classname="text-[16px] font-[400] text-[#797979]">
                  Calendar View
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
                    stroke="#797979"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
                    stroke="#797979"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 2V6"
                    stroke="#797979"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
                    stroke="#797979"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center hover:cursor-pointer p-[8px] rounded-[4px] h-[40px] gap-x-[14px]">
                <p classname="text-[16px] font-[400] text-[#797979]">
                  Automation
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z"
                    stroke="#797979"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z"
                    stroke="#797979"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center hover:cursor-pointer p-[8px] rounded-[4px] h-[40px] gap-x-[14px]">
                <p classname="text-[16px] font-[400] text-[#797979]">Filter</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99951 3H19.9996C20.5519 3 20.9996 3.44764 20.9996 3.99987L20.9998 5.58569C20.9999 5.85097 20.8945 6.10538 20.7069 6.29295L14.2924 12.7071C14.1049 12.8946 13.9995 13.149 13.9995 13.4142V19.7192C13.9995 20.3698 13.3881 20.8472 12.757 20.6894L10.757 20.1894C10.3118 20.0781 9.99951 19.6781 9.99951 19.2192V13.4142C9.99951 13.149 9.89415 12.8946 9.70662 12.7071L3.2924 6.29289C3.10486 6.10536 2.99951 5.851 2.99951 5.58579V4C2.99951 3.44772 3.44722 3 3.99951 3Z"
                    stroke="#797979"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center hover:cursor-pointer p-[8px] rounded-[4px] h-[40px] gap-x-[14px]">
                <p classname="text-[16px] font-[400] text-[#797979]">Share</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                    stroke="#797979"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                    stroke="#797979"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                    stroke="#797979"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5 6.5L8.5 10.5"
                    stroke="#797979"
                    stroke-width="1.5"
                  />
                  <path
                    d="M8.5 13.5L15.5 17.5"
                    stroke="#797979"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="flex bg-gradient-to-b hover:cursor-pointer from-[#4c38c2] to-[#2f2188] rounded-[8px] items-center gap-[8px] p-[8px] border-[1px]  border-[#4b36cc]">
              <p className="text-white font-[500] text-[16px]">Create new</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V11.25H8C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75H11.25V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V12.75H16C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25H12.75V8Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

    {/* List Part */}

        <DragDropContext onDragEnd={handleDragDrops}>
        <div className="flex gap-[16px]">
        {stores.map((item,index)=>(
            <div  className="w-full space-y-[16px]">

           
            <Droppable key={index+item.name} droppableId={item.id} >
                {(provided)=>(
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                         <div className="flex justify-between items-center w-full">
                <h1>{item.name}</h1>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 5H11.75" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.75 12H16.75" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.75 19H21.75" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
                        {
                            item.items.map((task,taskIndex)=>(
                                <Draggable draggableId={task.id} key={task.id} index={taskIndex}>
                                    {(provided)=>(
                                        <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                            {task.name}
                                            <TodoCard />
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        }
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
