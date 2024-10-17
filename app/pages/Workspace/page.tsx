"use client";
import React from "react";
// import { useRouter } from "next/navigation"
import {
  Box,
  Book,
  Bot,
  Copy,
  SquareArrowOutDownLeft,
  LandPlot,
  Moon,
  ImageUp,
  Settings,
  Settings2,
  Share,
  Sun,
  Bell,
  Info,
} from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

import { useTheme } from "next-themes"
import { SunCanvas } from "@/components/sun-canvas"
import { useCameraReset } from '@/lib/useCameraReset';
// import Link from "next/link";
// import Settings from "./settings";
// import { SideBar } from "@/components/side-bar";
import { HourMonth } from "@/components/hour-month";
import { Leva } from 'leva'
// import { Help } from "@/components/ui/help";
import { 
    Dialog, 
    DialogClose, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from "@/components/ui/dialog";

export const description =
  "Shadow Analysis tool to predict shadow free area for solar power system"

export default function Workspace() {
    const { setTheme } = useTheme()

    // const [date, setDate] = useState(new Date());
    const { setResetCamera } = useCameraReset(); // Access the store function

    const handleButtonClick = () => {
        setResetCamera(true); // Trigger the camera reset
    };

  return (
      <div className="grid h-screen w-full pl-[56px]">
        <Leva titleBar={{
          position: {
            x: -20,
            y: 100
          }
        }} />
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Image
              src="/logoOff.svg"
              alt="Logo"
              width={24}
              height={24}
              priority
            />

          </Button>
        </div>
        <nav className="grid gap-1 p-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-muted"
                aria-label="Playground"
              >
                <Sun className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Shadow Analysis
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Models"
              >
                <Bot className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Models
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Documentation"
              >
                <Book className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Documentation
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Settings"
              >
                <Settings2 className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Settings
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
        
        <AlertDialog>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                
                <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Help"
              >
                <Info className="size-5" />
              </Button>
              </AlertDialogTrigger>
              </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                Help
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
              
              <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reach out to us!</AlertDialogTitle>
                <AlertDialogDescription>
                    We are here to help you with any queries you have.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
            

            <Dialog>
            <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Account"
              >
                <Bell className="size-5" />
              </Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Account
            </TooltipContent>
          </Tooltip>
          </TooltipProvider>
          <DialogContent className="sm:max-w-md">
                <DialogHeader>
                <DialogTitle>Reach Out</DialogTitle>
                <DialogDescription>
                    We are here to help you with any queries you have.
                </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                    Email
                    </Label>
                    <Input
                    id="link"
                    defaultValue="citizencorrects@gmail.com"
                    readOnly
                    />
                </div>
                <Button type="submit" size="sm" className="px-3">
                    <span className="sr-only">Copy</span>
                    <Copy className="h-4 w-4" />
                </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                    Close
                    </Button>
                </DialogClose>
                </DialogFooter>
            </DialogContent>
            </Dialog>
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Workspace</h1>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Settings className="size-4" />
                <span className="sr-only">Settings</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>Configuration</DrawerTitle>
                <DrawerDescription>
                  Configure the settings for the model and messages.
                </DrawerDescription>
              </DrawerHeader>
              <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Settings
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Input id="temperature" type="number" placeholder="0.4" />
                  </div>
                  
                  <div className="grid gap-3">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="number" placeholder="0" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="month">Month</Label>
                    <Input id="month" type="number" placeholder="0" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="year">Year</Label>
                    <Slider id="year" defaultValue={[33]} max={100} step={1} />
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Messages
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
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" placeholder="You are a..." />
                  </div>
                </fieldset>
              </form>
            </DrawerContent>
          </Drawer>
          <div className="ml-auto w-full flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                System
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Share className="size-3.5" />
            Save
          </Button>
        </header>
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
                  
                  <div className="grid gap-3">
                    <Label htmlFor="long">Longitude</Label>
                    <Input id="long" type="number" placeholder="77.2242" />
                  </div>
                  </div>
                  <div className="grid gap-3 w-1/2">
                    <Day />               
                    <Month />
                  </div>
              </fieldset>
              <div className="grid gap-3">
                  <HourMonth />
                </div>
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Upload
                </legend>
                <div className="flex flex-row gap-3">
                <TooltipProvider>
                <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <LandPlot  className="size-5" />
                                <span className="sr-only">Location screenshot</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">Location screenshot</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <ImageUp  className="size-5" />
                            <span className="sr-only">Upload Image</span>
                        </Button>
                    </TooltipTrigger>
                        <TooltipContent side="top">Upload Image</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Box  className="size-5" />
                            <span className="sr-only">Upload Model</span>
                        </Button>
                    </TooltipTrigger>
                        <TooltipContent side="top">Upload Model</TooltipContent>
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