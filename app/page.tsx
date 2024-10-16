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
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Property Name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="picture">Location</Label>
              <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <div className="relative">
                <input
                  type="file"
                  id="name"
                  className="hidden"
                  required
                />
                <label
                  htmlFor="name"
                  className="flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="text-muted-foreground">Upload File</span>
                </label>
              </div>
              </div>
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
