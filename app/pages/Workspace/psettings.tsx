"use client";
import React from "react";
// import { useRouter } from "next/navigation"
import {
  Bird,
  Book,
  Bot,
  Code2,
  SquareArrowOutDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Turtle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Day } from "@/components/ui/day"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Month } from "@/components/ui/month"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { SunCanvas } from "@/components/sun-canvas"
import { useCameraReset } from '@/lib/useCameraReset';
import Link from "next/link";
import {SideBar} from "@/components/side-bar";

export const description =
  "Shadow Analysis tool to predict shadow free area for solar power system"

export default function Psettings() {
    const { setTheme } = useTheme()

    // const [date, setDate] = useState(new Date());
    const [date, setDate] = React.useState<Date>()
    const [year, setYear] = React.useState<number>(5);
    const { setResetCamera } = useCameraReset(); // Access the store function

    const handleButtonClick = () => {
        setResetCamera(true); // Trigger the camera reset
    };

  return (
    <div className="grid h-screen w-full pl-[56px]">
      <SideBar />
      <div className="flex flex-col">
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
          >
            <form className="grid w-full items-start gap-6">
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Variables
                </legend>
                
                
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="lat">Latitude</Label>
                    <Input id="lat" type="number" placeholder="28.6077" />
                  </div>
                  <div className="grid gap-3 w-full">
                  <Label htmlFor="date">Date</Label>
                    <Popover>
                    <PopoverTrigger asChild>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                        >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        />
                    </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid gap-3 w-full">
                    <Label htmlFor="long">Longitude</Label>
                    <Input id="long" type="number" placeholder="77.2242" />
                  </div>
                  </div>
                  <div className="grid gap-3">
                    <Day />               
                  </div>
                  <div className="grid gap-3">
                    <Month />
                  </div>
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  System
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="system">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="assistant">Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="temperature">Temperature</Label>
                  <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="content">Content</Label>
                  <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Paperclip className="size-4" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Attach File</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Mic className="size-4" />
                      <span className="sr-only">Use Microphone</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Use Microphone</TooltipContent>
                </Tooltip>
                </TooltipProvider>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <div className="w-[1150px] h-[800px]">
            <SunCanvas />
            </div>
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <div className="flex-1" />
            <form
              className="relative overflow-hidden rounded-lg border bg-muted focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
            >
              <div className="flex items-center p-3 pt-0 mt-3">   
                <Button onClick={handleButtonClick} type="button" size="sm" className="ml-auto gap-1.5">
                  Reset
                  <SquareArrowOutDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

// export default Workspace;