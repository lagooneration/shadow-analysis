"use client";
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export default function Dashboard() {
  const router = useRouter()

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Add your login logic here
  //   // If login is successful, redirect to workspace
  //   router.push("/pages/Workspace")
  // }

  return (
    <div className="w-full h-full flex flex-row justify-center items-center p-10 mt-10">
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Shadow Analysis</h1>
            <p className="text-balance text-muted-foreground">
              Upload screenshot of your location
            </p>
          </div>
          <form  className="grid gap-4">
          <div className="grid gap-2">
              <Label htmlFor="picture">Location</Label>
              <div className="relative">
              <label className="block">
                <span className="sr-only">Upload Image</span>
                <input type="file" className="block w-full text-sm text-gray-500
                  file:me-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-600 file:text-white
                  hover:file:bg-blue-700
                  file:disabled:opacity-50 file:disabled:pointer-events-none
                  dark:text-neutral-500
                  dark:file:bg-blue-500
                  dark:hover:file:bg-blue-400
                "/>
              </label>
              </div>
            </div>
          <div className="grid gap-2">
              <div className="flex flex-row gap-2">
                <div className="grid gap-2">
                    <Label htmlFor="lat">Latitude</Label>
                    <Input id="lat" type="number" placeholder="28.6077" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="long">Longitude</Label>
                    <Input id="long" type="number" placeholder="77.2242" />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Property Name"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Link
                  href="https://www.google.co.in/maps"
                  className="ml-auto inline-block text-sm underline"
                >
                  Find my location?
                </Link>
              </div>
            </div>
            <Button type="button" onClick={() => router.push('/pages/Workspace', { scroll: false })} className="w-full">
              Get Started
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Haven&apos;t traded carbon yet?{" "}
            <Link href="https://www.citizencorrects.com" className="underline text-blue-500">
              Citizen Corrects
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/intro.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
    </div>
  )
}
