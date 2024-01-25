import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
const FAQ = () => {
  return (
    <div className="container max-w-[729px] h-[auto]  justify-center items-center">
        <div className="w-[auto] h-[auto]">
            <p className="[font-family:'DM_Sans-Bold',Helvetica] font-medium text-transparent text-2xl text-center tracking-[0] leading-[normal] my-6">
                <span className="text-white">Frequently Asked Questions</span>
            </p>
        </div>
        <div className="w-[auto] h-[auto] items-center gap-[20px] relative">
                <div className="w-full h-auto bg-[#3f3451] rounded-[15px] overflow-hidden border-[1px] border-[#3f3451] bg-gradient-to-b from-[#05020c] via-[#1f192c] to-[#3e134c]">
                    <div className="justify-center items-center my-[auto] mx-[auto] p-4">
                    <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How much budget do i need for a project?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Whats the timeline for project completion?</AccordionTrigger>
                        <AccordionContent>
                        It depends on the scale of the project, if the idea already been drawn or made earlier,
                        then it will depend on the project length  may be around 1-2 weeks
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What is needed from you to start working on the project?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Do we work on week ends?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
        <Button className=" mx-auto justify-center items-center flex my-7" variant="gradient_outline">View all FAQ's</Button>
    </div>
  );
};

export default FAQ;
