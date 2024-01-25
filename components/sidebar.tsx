"use client";
import React, { useState } from 'react';
import { Home, BookOpen, Sparkles, Megaphone, Bell, Settings, LogOut, Plus } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


const SideBar = () => {
  const [open, setOpen] = useState(false); // Set initial state to false
  const [selectedPage, setSelectedPage] = useState('Dashboard');

  const pages = [
    { title: 'Dashboard', icon: Home, route: '/dashboard' },
    { title: 'Projects', icon: BookOpen, route: '/projects' },
    { title: 'Strategy Hub', icon: Sparkles, route: '/strategy-hub' },
    { title: 'Referrals', icon: Megaphone, route: '/referrals' },
  ];

  const options = [
    { title: 'Notifications', icon: Bell, route: '/notifications' },
    { title: 'Settings', icon: Settings, route: '/Settings' },
  ];

  const handlePageClick = (page: React.SetStateAction<string>, route: string) => {
    setSelectedPage(page);
    // Use Next.js Link to navigate to the selected page
    window.location.href = route;
  };
  const handleOptionClick = (title: string, route: string) => {
    // setSelectedPage(title);
    // Implement your logic for Bell, Settings, and LogOut actions
    console.log(`${title} clicked`);
    // Use Next.js Link to navigate to the selected page (if needed)
    // window.location.href = route;
  };

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'lg:w-52 md:w-52 w-20' : 'w-20'
        }  bg-gradient-to-b from-background-50 via-from-background-50 to-background-50 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/assets/sidebar/arrow.svg"
          className={`absolute cursor-pointer -right-4 top-9 w-7 border-
           border-2 rounded-full  ${open ? '' : 'lg:rotate-180 md:rotate-180'}`}
          // onClick={() => setOpen(!open)}
          onClick={() => {
            if (!(window.innerWidth < 768)) {
                // Disable setOpen for screen sizes larger than or equal to 'sm' (768px)
                setOpen(!open); // Toggles the value of the 'open' variable
            } else {
                // Do something else or nothing for screen sizes smaller than 'sm'
            }
        }}
        />
        <div className="flex gap-x-4 items-baseline">
          <img
            src="/logo.png"
            className={`cursor-pointer duration-500  ${open ? 'lg:rotate-[360deg] lg:$$ lg:scale-0 md:rotate-[360deg] md:$$ md:scale-0 h-[10%] w-[10%]' : ''}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 -ml-6 ${
              !open ? 'scale-0 max-h-[30px] max-w-[190px]' : 'lg:scale-100 md:scale-100 scale-0'
            }`}
          >
            <img
              className="max-h-[100px] max-w-[190px] px-8"
              src="/logo.png"
              alt="Logo"
            />
          </h1>
        </div>

        <div className={`${open ? 'w-[auto]' : 'w-[52px] absolute -left-[-13px]'} h-[auto] inline-flex flex-col items-center gap-[20px]`}>
                <div className=" m-4 w-full h-auto bg-white rounded-[15px] overflow-hidden border border-solid border-gradient-150 bg-gradient-to-b from-gradient-150 via-gradient-150 to-gradient-150">
                    <div className="col-span-1 p-2">
                      <div className="flex gap-x-4">
                        <img
                            className="w-[35px] h-auto object-cover"
                            alt="User"
                            src="/ellipse-44.svg"
                        />
                        <h1
                          className={`flex flex-col items-start ${
                            !open ? 'scale-0' : ''
                          }`}
                        >
                            <div className='text-sm text-white'>
                            Mustafa
                            </div>
                            <div className='text-[10px] text-gray-400'>
                              ITO
                            </div>
                        </h1>
                      </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
        
        <ul className={`pt-6 h-[40%] ${open ? '' : 'mt-12' }`}>
          {pages.map((page, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
                selectedPage === page.title
                  ? 'bg-light-white text-white'
                  : 'bg-light-white text-gradient-150 hover:bg-light-white hover:text-white'
              }`}
              onClick={() => handlePageClick(page.title, page.route)}
            >
              <page.icon className="w-5 h-5" />
              <span className={`${!open ? 'hidden' : 'origin-left duration-200'}`}>
                {page.title }
              </span>
            </li>
          ))}
        </ul>

        {/* <div className='container'> */}
          <ul className="w-auto h-[35%] flex flex-col justify-end">
          {options.map((page, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
                selectedPage === page.title
                  ? 'bg-light-white text-white'
                  : 'bg-light-white text-gradient-150 hover:bg-light-white hover:text-white'
              }`}
              onClick={() => handlePageClick(page.title, page.route)}
            >
              <page.icon className="w-5 h-5" />
              <span className={`${!open ? 'hidden' : 'origin-left duration-200'}`}>
                {page.title }
              </span>
            </li>
          ))}
          {/* <LogOut className='text-[12px] p-[2px] mt-2 mx-2 bg-light-white text-primary-150 hover:bg-light-white hover:text-white'> Logout </LogOut> */}
          {/* <LogOut className="w-5 h-5" />
              <span className={`${!open ? 'hidden' : 'origin-left duration-200'}`}>
                Log Out
              </span> */}
          <li
            className={`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 mt-2 ${
              selectedPage === 'LogOut'
                ? 'bg-light-white text-white'
                : 'bg-light-white text-gradient-150 hover:bg-light-white hover:text-white'
            }`}
            onClick={() => handleOptionClick('LogOut', '/logout')}
          >
            <LogOut className="w-5 h-5" />
            <span className={`${!open ? 'hidden' : 'origin-left duration-200'}`}>
              Log Out
            </span>
          </li>

        </ul>
      </div>
      <div className="h-screen flex-1 p-2 bg-background-100 overflow-y-auto" style={{ maxHeight: 'calc(100vh)' }}>
      </div>
    </div>
  );
};

export default SideBar;



{/* <div className=''>
<Sheet>
  <SheetTrigger asChild>
      <Button className='px-2' variant="purple"><Plus className='text-white'></Plus> {open ? 'Create Project' : ''} </Button>
  </SheetTrigger>
  <SheetContent className="bg-gradient-to-b from-[#221F20] via-[#221F20] to-[#1f192c]">
    <SheetHeader>
      <SheetTitle className="text-white">New Project</SheetTitle>
      <SheetDescription>
        Here you can create a new project.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
    <div className="flex flex-col md:flex-row lg:flex-row">
        <img className=" w-[79px] h-[79px]" alt="Ellipse" src="/assets/sheet/upload.png" />
        <div className="flex flex-col items-start justify-start px-3 pt-3">
        <SheetTitle className="text-white ">Project Photo</SheetTitle>
            <Button variant='gradient_outline' 
                className="inline-flex items-center justify-center gap-[5px] w-[auto] h-[40px] bg-[#27242d] rounded-[60px]">
                Upload Photo
            </Button>
        </div>
    </div>
    <div className="inline-flex flex-col items-start gap-[10px] pb-5">
        <Label className="text-white text-[16px]">Name of your Project</Label>
        <Input type="name" id="fname" placeholder="Name of Project" className=" w-[auto] text-white lg:w-[300px] h-[38px] bg-[#14111b] border-solid border-[#27242d]"></Input>
    </div>
    <div className="inline-flex flex-col items-start gap-[10px] pb-5">
        <Label className="text-white text-[16px]">Description</Label>
        <Textarea className="text-white lg:w-[300px] bg-[#14111b] border-solid border-[#27242d]" placeholder="Type your message here." />
    </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
</div> */}