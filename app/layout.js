import './globals.css'
import  RecoilRootWrapper from '@/wrappers/RecoilRootWrapper'
import { Sidebar } from "@/app/components/Sidebar";
import {FramerSharedLayoutWrapper} from "@/wrappers/FramerSharedLayoutWrapper";
import {SocialLinks} from "@/app/components/SocialLinks";

export const metadata = {
  title: 'justincrediblemoments',
  description: 'a collection of justincredible images, curated by Justin Peter 📸',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'font-clash text-white'}>
      <Sidebar/>
      <SocialLinks/>
      <RecoilRootWrapper>
          <FramerSharedLayoutWrapper>{children}</FramerSharedLayoutWrapper>
       </RecoilRootWrapper>
      </body>
    </html>
  )
}
