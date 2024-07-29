import React from 'react'

function TodoCard() {
  return (
    <div className="px-[13px] py-[14px] space-y-[16px] rounded-[8px] bg-[#f9f9f9]">
                <div className="space-y-[13px]">
                    <div className="space-y-[4px]">
                        <h3 className="text-[16px] font-[600] text-[#606060]">Implement User Authentication</h3>
                        <p className="text-[#797979] text-[14px]">Develop and integrate user authentication using email and password.</p>
                    </div>
                    <div className="px-[8px] py-[6px] text-[12px] font-[400] text-white rounded-[8px] bg-[#ff6b6b] w-fit">
                        Urgent
                    </div>
                    <div className='flex gap-[8px] items-center w-fit'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12H18" stroke="#606060" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#606060" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-[14px] font-[500] text-[#606060]">2024-08-15</p>
                    </div>
                </div>

                <div>
                    <p className="text-[14px] font-[500] text-[#797979]">1 hr ago</p>
                </div>

            </div>
  )
}

export default TodoCard