"use client"

import { Button } from "./button"

export const Header = () => {
    return (
        <div className="p-5 bg-gray-300 flex justify-between">
            <div className="flex items-center space-x-2">
                <img src="/favicon.ico" width={50} height={50} />
                <div className="font-bold text-2xl ">
                    Appname
                </div>
            </div>
            <div className="space-x-2 flex items-center">
                <Button size="lg">
                    Theme
                </Button>
                <Button size="lg">
                    Sign in
                </Button>
                <Button size="lg">
                    Log in
                </Button>
            </div>
        </div>
    )
}