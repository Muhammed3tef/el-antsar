import { contactInfo } from '@/data/contact-info'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'

type Props = Partial<{
    className: string,
   
    showText: boolean,
    iconSize: number,
    children: React.ReactNode,
}>

export default function CallYellowBtn({ className, showText, iconSize, children }: Props) {

  return <>
  <Link href={contactInfo.phoneLink} className={`${className} bg-[#f97316] hover:bg-[#e06600] text-white w-[167px] px-4 py-2 rounded-md flex items-center justify-center gap-2 transition`}>
    {children ? (
        children
      ) : (
        <>
          <FaPhone size={iconSize} />
          {showText && <span>اتصل الآن</span>}
        </>
      )}
  
  
  </Link>
  
  </>
}
