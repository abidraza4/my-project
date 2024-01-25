import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/input";

export const Subscribe = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-[full] h-[auto] flex flex-col justify-center items-center relative">
      <div className="hidden md:flex container w-[auto] h-[auto] my-28 justify-center items-center ">
        <div className="w-[auto] h-[auto] inline-flex flex-col items-center gap-[20px] relative">
          <div className="max-w-[729px] h-[auto]">
            <div className="space-x-6">
              <div className="max-w-full h-auto bg-white rounded-[15px] border border-solid border-[#3f3451] bg-gradient-to-b from-[#05020c] via-[#1f192c] to-[#1f192c] justify-center items-center">
                <div className="flex justify-center items-center my-5 gap-3">
                  <img
                    className="max-w-[10%] h-auto object-cover"
                    alt="Footer Left"
                    src="/assets/footerleft.png"
                  />
                    <div className="flex max-w-[486px] justify-center items-center flex-col text-center text-white gap-y-3">
                        {/* <p className=" text-xl font-semibold">
                            Be the first to know about new features, special offers, and more.
                        </p>
                        <p className="text-sm text-primary-150">
                            Don't miss out – sign up for our newsletter today and take your Twitter game to the next level!
                        </p> */}
                        <img
                          className="max-w-[100%] h-auto object-cover"
                          alt="Footer Left"
                          src="/assets/footertext.svg"
                        />
                        <div className="flex items-center gap-[12px]">
                            <CustomInput className="w-[auto] max-h-[20px] p-5 relative bg-[#ffffff21] rounded-[12px]" placeholder="Email Address" />
                            {/* <Input className="max-w-[285px] max-h-[20px] p-5 relative bg-[#ffffff21] rounded-[12px] overflow-hidden" placeholder="Email Address" /> */}
                            <Button variant="purple" className="rounded-md w-auto h-auto">
                            Subscribe
                            </Button>
                        </div>
                    </div>
                  <img
                    className="max-w-[10%] h-auto object-cover"
                    alt="Footer Right"
                    src="/assets/footerright.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden container w-full h-auto my-28 flex justify-center items-center">
        <div className="w-auto h-auto flex flex-wrap items-start gap-20 relative">
          <div className="w-auto h-auto">
            <div className="rounded-xl overflow-hidden bg-white p-4 border border-solid border-[#3f3451] bg-gradient-to-b from-[#05020c] via-[#1f192c] to-[#1f192c] justify-center items-center">
              <div className="flex justify-center items-center my-5 gap-3">
                <div className="flex max-w-486px justify-center items-center flex-col text-center text-white gap-3">
                  <img
                    className="max-w-full h-auto object-cover"
                    alt="Footer Left"
                    src="/assets/footertext.svg"
                  />
                  <div className="flex items-center gap-3">
                    <CustomInput
                      className="w-40 max-h-20px p-3 relative bg-[#ffffff21] rounded-12"
                      placeholder="Email Address"
                    />
                    <Button variant="purple" className="rounded-md">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


      // <div className="hidden md:flex space-x-6">
      //   <div className="max-w-full h-auto bg-white rounded-[15px] border border-solid border-[#3f3451] bg-gradient-to-b from-[#05020c] via-[#1f192c] to-[#1f192c] justify-center items-center">
      //     <div className="flex justify-center items-center my-5 gap-3">
      //       <img
      //         className="max-w-[10%] h-auto object-cover"
      //         alt="Footer Left"
      //         src="/assets/footerleft.png"
      //       />
      //         <div className="flex max-w-[486px] justify-center items-center flex-col text-center text-white gap-y-3">
      //             {/* <p className=" text-xl font-semibold">
      //                 Be the first to know about new features, special offers, and more.
      //             </p>
      //             <p className="text-sm text-primary-150">
      //                 Don't miss out – sign up for our newsletter today and take your Twitter game to the next level!
      //             </p> */}
      //             <img
      //               className="max-w-[100%] h-auto object-cover"
      //               alt="Footer Left"
      //               src="/assets/footertext.svg"
      //             />
      //             <div className="flex items-center gap-[12px]">
      //                 <CustomInput className="w-[auto] max-h-[20px] p-5 relative bg-[#ffffff21] rounded-[12px]" placeholder="Email Address" />
      //                 {/* <Input className="max-w-[285px] max-h-[20px] p-5 relative bg-[#ffffff21] rounded-[12px] overflow-hidden" placeholder="Email Address" /> */}
      //                 <Button variant="purple" className="rounded-md w-auto h-auto">
      //                 Subscribe
      //                 </Button>
      //             </div>
      //         </div>
      //       <img
      //         className="max-w-[10%] h-auto object-cover"
      //         alt="Footer Right"
      //         src="/assets/footerright.png"
      //       />
      //     </div>
      //   </div>
      // </div>
      // <div className="flex items-center">
      //   <div className="md:hidden">
      //     <div className="max-w-full h-auto bg-white rounded-[15px] overflow-hidden border border-solid border-[#3f3451] bg-gradient-to-b from-[#05020c] via-[#1f192c] to-[#1f192c] justify-center items-center">
      //       <div className="flex justify-center items-center my-5 gap-3">
      //         <img
      //           className="max-w-[10%] h-auto object-cover"
      //           alt="Footer Left"
      //           src="/assets/footerleft.png"
      //         />
      //           <div className="flex max-w-[486px] justify-center items-center flex-col text-center text-white gap-y-3">
      //               {/* <p className=" text-xl font-semibold">
      //                   Be the first to know about new features, special offers, and more.
      //               </p>
      //               <p className="text-sm text-primary-150">
      //                   Don't miss out – sign up for our newsletter today and take your Twitter game to the next level!
      //               </p> */}
      //               <img
      //                 className="max-w-[100%] h-auto object-cover"
      //                 alt="Footer Left"
      //                 src="/assets/footertext.svg"
      //               />
      //               <div className="flex items-center gap-[12px]">
      //                   <CustomInput className="w-[auto] max-h-[20px] p-5 relative bg-[#ffffff21] rounded-[12px]" placeholder="Email Address" />
      //                   {/* <Input className="max-w-[285px] max-h-[20px] p-5 relative bg-[#ffffff21] rounded-[12px] overflow-hidden" placeholder="Email Address" /> */}
      //                   <Button variant="purple" className="rounded-md w-auto h-auto">
      //                   Subscribe
      //                   </Button>
      //               </div>
      //           </div>
      //         <img
      //           className="max-w-[10%] h-auto object-cover"
      //           alt="Footer Right"
      //           src="/assets/footerright.png"
      //         />
      //       </div>
      //     </div>
      //     {/* <button
      //       className="text-xl text-white hover:text-blue-500"
      //       onClick={toggleMenu}
      //     >
      //       ☰
      //     </button> */}
      //   </div>
      //   {/* <div>
      //   <Button variant="gradient_outline"> Get Started for Free </Button>
      //   </div> */}
      // </div>