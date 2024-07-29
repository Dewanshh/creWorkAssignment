import React from 'react'

function SearchBar() {
  return (

    <div className='border-[1px] border-[#e9e9e9] rounded-[8px]'>
        <form >
            <label for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative w-[196px] h-[40px]">
                <input type="text" id="default-search"
                    className="block w-full py-3 px-4 text-sm text-black focus:outline-none  rounded-md bg-white  "
                    placeholder="Search" required />
                <div type="submit" class="absolute inset-y-0 end-0 mr-4 flex items-center ps-3 cursor-pointer">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
            </div>
        </form>
</div>
  )
}

export default SearchBar