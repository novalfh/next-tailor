import { ModeToggle } from "@/components/darkmode";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import PreventFlash from "@/utils/preventflash";
import Image from "next/image";

export default function Home() {
  return (
   <main className="flex items-center min-h-24 gap-2">
    <div className="">Hello World</div>
    <Button size='lg'>Submit</Button>
    <Button size='my' className={'font-normal bg-[rgb(30,30,30)] rounded-sm'}>Suit a Group</Button>
    <Button variant="outline" className=''>Button</Button>
    <PreventFlash></PreventFlash>

 
   </main>
  );
}
