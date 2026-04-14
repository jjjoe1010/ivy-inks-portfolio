import Container from "./Container"
import Link from 'next/link'
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#9BC1BC] rounded-t-4xl">
        <Container>
            <div className="grid grid-cols-2  min-h-30 w-full px-4">
                <div>
                    
                </div>
                <div>

                </div>
                <div>

                </div>
                <div className="flex flex-row space-x-3 justify-end items-center pt-3 pr-4">
                    <Link href="https://www.facebook.com/profile.php?id=61571042060366&locale=en_GB">
                        <IconBrandFacebook stroke={2} className="h-10 w-10 hover:text-[#000500] hover:bg-[#FFDFDC] hover:rounded-3xl hover:w-10 delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"/>                    
                    </Link>
                    <Link href="https://www.instagram.com/ivy_inks_/">
                        <IconBrandInstagram stroke={2} className="h-10 w-10 hover:text-[#000500] hover:bg-[#FFDFDC] hover:rounded-3xl hover:w-10 delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"/>                     
                    </Link>
                </div>
                <div className="flex col-span-2 justify-start align-middle space-x-1.5">
                    <Copyright />
                    <p className="" >
                        created by Jason Fung Chun Hin 2026
                    </p>
                </div>             
            </div>
         </Container>       
    </footer>
  )
  }