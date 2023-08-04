import React from 'react'
import Image from 'next/image'
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from '@/components/ui/navigation-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { CalendarIcon } from '@radix-ui/react-icons'

export type HeaderProps = {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:flex-col lg:gap-y-8">
      <div
        className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white
            via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"
      >
        <div
          className="pointer-events-none flex cursor-pointer place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          rel="noopener noreferrer"
        >
          <svg className="h-10 w-10" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M95.8542 6.86284L95.8541 6.86276C92.582 4.89867 88.8375 3.86111 85.0212 3.86111C81.2052 3.86111 77.461 4.8985 74.1892 6.86228L95.8542 6.86284ZM95.8542 6.86284L147 37.5571C147 37.5572 147.001 37.5572 147.001 37.5573C150.114 39.4269 152.691 42.0707 154.48 45.2315C156.269 48.3923 157.209 51.9625 157.209 55.5944V114.684C157.21 118.316 156.269 121.886 154.48 125.047C152.691 128.208 150.115 130.852 147 132.721L95.8542 163.415L95.8541 163.415C92.582 165.379 88.8375 166.417 85.0212 166.417C81.2049 166.417 77.4604 165.379 74.1884 163.415L61.4716 155.78L61.4714 155.779C60.9068 155.441 60.4397 154.961 60.1154 154.388C59.7911 153.815 59.6208 153.168 59.6211 152.509V152.509V56.0478V56.0469C59.6204 54.8709 59.3157 53.7151 58.7366 52.6916C58.1575 51.6682 57.3237 50.8118 56.3161 50.2055L56.3149 50.2048L39.8768 40.3354L39.8768 40.3353C39.2105 39.9353 38.4499 39.7194 37.6729 39.7095C36.8958 39.6997 36.13 39.8963 35.4538 40.2793C34.7776 40.6622 34.2152 41.2178 33.824 41.8893C33.4329 42.5606 33.227 43.3237 33.2272 44.1006C33.2272 44.1008 33.2272 44.101 33.2272 44.1013V138.822L23.0422 132.707L23.042 132.707C19.9279 130.837 17.351 128.194 15.562 125.033C13.773 121.872 12.8329 118.302 12.8333 114.67V114.669L12.8333 58.6639L12.8333 58.6634C12.8319 54.0956 14.0123 49.6052 16.2598 45.6286C18.5056 41.6549 21.7407 38.3294 25.6508 35.9749L25.9252 35.8148L25.9336 35.8099L25.942 35.8049C30.0583 33.3317 34.77 32.025 39.5722 32.025C44.3744 32.025 49.0861 33.3317 53.2024 35.8049L53.2029 35.8052L99.9598 63.8774L85.4086 72.6164C85.4085 72.6164 85.4084 72.6165 85.4083 72.6166C83.4016 73.8211 81.7409 75.5246 80.5879 77.5613C79.4348 79.5982 78.8288 81.8989 78.8288 84.2394C78.8288 86.58 79.4348 88.8807 80.5879 90.9176C81.7409 92.9544 83.4017 94.658 85.4086 95.8625L101.447 105.494L73.6548 122.181L73.6543 122.181C72.646 122.787 71.8117 123.644 71.2325 124.667C70.6532 125.691 70.3487 126.847 70.3486 128.024V128.024V147.195C70.3486 147.196 70.3486 147.196 70.3486 147.196C70.3483 147.973 70.5543 148.736 70.9453 149.407C71.3365 150.079 71.899 150.634 72.5752 151.017C73.2514 151.4 74.0172 151.597 74.7942 151.587C75.5713 151.577 76.3318 151.361 76.9981 150.961L76.9984 150.961L128.773 119.866C131.252 118.377 133.303 116.273 134.728 113.756C136.152 111.24 136.901 108.398 136.901 105.506C136.901 102.614 136.152 99.7721 134.728 97.2557C133.303 94.7394 131.252 92.6346 128.773 91.1464L118.755 85.132L128.773 79.1174L128.773 79.1172C131.251 77.6287 133.301 75.5242 134.725 73.0083C136.149 70.4925 136.897 67.651 136.897 64.7603C136.897 61.8696 136.149 59.0281 134.725 56.5122C133.301 53.9964 131.251 51.8918 128.773 50.4033L128.772 50.403L65.2135 12.2576L74.1884 6.86276L95.8542 6.86284Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="3"
            />
            <g opacity="0.2">
              <path
                opacity="0.85"
                d="M37.2875 32.1261C38.0454 32.0605 38.8077 32.0274 39.5722 32.0274C44.3742 32.0274 49.0858 33.3332 53.2027 35.8051C53.2028 35.8051 53.2028 35.8051 53.2028 35.8052L99.9398 63.8735L97.9497 65.0619L49.7795 36.1988C49.7791 36.1986 49.7787 36.1983 49.7783 36.1981C45.9661 33.909 41.6939 32.5215 37.2875 32.1261Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                opacity="0.85"
                d="M85.3945 95.8625L85.3946 95.8626L101.45 105.497L99.3837 106.742L81.996 96.2711L81.9942 96.27C80.4314 95.3321 79.1382 94.0055 78.2403 92.4194C77.3424 90.8333 76.8705 89.0418 76.8705 87.2192C76.8705 85.3966 77.3424 83.605 78.2403 82.0189C78.5667 81.4423 78.9454 80.9 79.3703 80.3982C79.0033 81.6403 78.8147 82.9336 78.8147 84.2394C78.8147 86.58 79.4207 88.8807 80.5737 90.9176C81.7268 92.9544 83.3876 94.658 85.3945 95.8625Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                opacity="0.85"
                d="M70.3585 127.652C70.3521 127.77 70.3488 127.888 70.3486 128.007V128.01L70.3486 147.182L70.3486 147.183C70.3489 147.955 70.5531 148.714 70.9406 149.382L72.2383 148.63L70.9406 149.382C71.1911 149.815 71.5127 150.199 71.8898 150.521L70.4922 151.363C70.4917 151.364 70.4911 151.364 70.4905 151.365C70.2794 151.491 70.0387 151.559 69.7928 151.562C69.5463 151.565 69.3034 151.502 69.0888 151.381C68.8742 151.26 68.6956 151.083 68.5712 150.871C68.447 150.658 68.3813 150.416 68.3808 150.17V130.999C68.3808 130.999 68.3808 130.999 68.3808 130.999C68.3809 130.34 68.5514 129.693 68.8757 129.12C69.1999 128.547 69.6669 128.067 70.2311 127.728C70.2312 127.728 70.2313 127.728 70.2313 127.728C70.2315 127.728 70.2316 127.728 70.2318 127.728L70.3585 127.652Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="3"
              />
            </g>
          </svg>
        </div>
      </div>
      <HoverCard>
        <HoverCardTrigger>
          <div
            className="mb-5 flex max-w-fit cursor-pointer items-center justify-center space-x-2 rounded-full border border-border bg-white
            px-4 py-2 text-sm text-gray-600 shadow-1 transition-colors hover:bg-background-inverted hover:font-bold hover:text-foreground-inverted"
          >
            <p>Playground - #ah08s-x_28-s</p>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-[570px] font-sans">
          <div className="flex justify-between space-x-4">
            {/*<Avatar>*/}
            {/*  <AvatarImage src="https://github.com/vercel.png" />*/}
            {/*  <AvatarFallback>VC</AvatarFallback>*/}
            {/*</Avatar>*/}
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
              <div className="flex items-center pt-2">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                <span className="text-xs text-muted-foreground">Joined December 2021</span>
              </div>
            </div>
          </div>
          <div>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <div>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-bl from-pink-50 via-pink-500 to-pink-500 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/*<Icons.logo className="h-6 w-6" />*/}
                    <div className="mb-2 mt-4 flex items-center gap-x-1.5 text-lg font-medium">
                      <span>Bits</span>
                      <span className="inline-block h-2 w-2 rounded-full bg-[var(--crimsion-9)]" />
                      <span>Playground</span>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </div>
              </li>
              <div>Re-usable components built using Radix UI and Tailwind CSS.</div>
              <div title="Installation">How to install dependencies and structure your app.</div>
              <div title="Typography">Styles for headings, paragraphs, lists...etc</div>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
      <p
        className="fixed left-0 top-0 flex hidden w-full justify-center border-b border-border bg-gradient-to-b from-[var(--mauve-2)]
            p-3 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit
            lg:static lg:w-auto  lg:rounded-xl lg:border"
      >
        <span className="inline-flex items-center gap-x-1 font-mono font-bold">
          <span>Playground</span> <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground"></span>
          <span>#384-28zdha</span>
        </span>
      </p>
    </div>
  )
}

export default Header
