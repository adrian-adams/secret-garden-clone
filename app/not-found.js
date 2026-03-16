'use client'
import Link from 'next/link';
import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className={`flex flex-col items-center justify-center min-h-screen gap-4`}>
            <h1 className={`text-6xl font-bold`}>404</h1>
            <p className={`text-2xl`}>Page not found</p>
            <p className={`text-gray-600`}>Sorry, we couldn't find the page you're looking for.</p>
            <div className={`flex flex-col md:flex-row gap-4 w-fit`}>
                <Button variant="sg_primary" width='full'>
                    <a href="/" title="Home">
                    Home
                    </a>
                </Button>
                <Button variant="sg_primary" width='full'>
                    <a href="/shop" title="Shop">
                    Shop
                    </a>
                </Button>
             </div>
        </div>
            
    );
}