import Link from 'next/link'
import Container from './container'
import { ChevronIcon } from './icons/chevron'
import { GithubIcon } from './icons/github'
import { Logo } from './icons/logo'
import { SlackIcon } from './icons/slack'
import { TwitterIcon } from './icons/twitter'

const footerLinks =[
    {
        title:"Product",
        links: [
            {title:'Features', href:'#'},
            {title:'Integrations', href:'#'},
            {title:'Pricing', href:'#'},
            {title:'Changelog', href:'#'},
            {title: 'Docs', href:'#'},
            {title: 'Linear Method', href:'#'},
            {title: 'Download', href:'#'},
        ],
    },
    {
        title:'Company',
        links: [
            {title: 'About Us', href:'#'},
            {title: 'Blog', href:'#'},
            {title: 'Careers', href:'#'},
            {title: 'Customers', href:'#'},
            {title: 'Brand', href:'#'},
        ],
    },
    {
        title: 'Resources',
        links:[
            {title: 'Community', href:'#'},
            {title: 'Contact', href:'#'},
            {title: 'DPA', href:'#'},
            {title: 'Terms of service', href:'#'},
            {title: 'Report a vulnerability', href:'#'},
        ]
    },
    {
        title: 'Developers',
        links:[
            {title: 'API', href:'#'},
            {title: 'Status', href:'#'},
            {title: 'GitHub', href:'#'},
        ]
    }
]

export const Footer = () => {
  return (
    <footer className='mt-12 border-t border-border-white py-[5.6rem] text-md'>
        <Container className='flex flex-col md:flex-row justify-between'>
            <div>
                <div className='flex h-full flex-row justify-between lg:flex-col'>
                    <div className= ' flex items-center text-gray hover:text-offWhite transition ease cursor-pointer'>
                        <Logo className='h-4 w-4 mr-4'/> Linear -Designed worldwide
                    </div>
                    <div className='mt-auto flex space-x-4 text-gray items-center cursor-pointer'>
                        <SlackIcon />
                        <GithubIcon />
                        <TwitterIcon />
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap'>
                    {footerLinks.map(item => (
                        <div key={item.title} className='min-w-[50%] lg:min-w-[18rem] mt-10 lg:mt-0'>
                            <h3 className='font-md mb-3'>{item.title}</h3>
                            <ul>
                                {item.links.map(link =>(
                                    <li key={link.title} className='[&_a]:last:mb-0'>
                                        <Link href={link.href} className='text-gray hover:text-off-white mb-3 block transition-colors ease delay-50 duration-300'>
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </Container>
    </footer>
  )
}

