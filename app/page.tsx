'use client'
import Header from '@/components/header'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Footer from '@/components/footer'
import { MixerHorizontalIcon, Pencil1Icon, DragHandleHorizontalIcon } from '@radix-ui/react-icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FileUpload } from '@/components/file-upload'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type DownloadItem = {
  id: string | number
  icon: string
  name: string
  size: number
  fileType: string
  progress: number
}
const items: Partial<DownloadItem>[] = [
  { name: 'coverletter_back_end_developer', fileType: 'pdf', size: 4608 },
  { name: 'resume_back_end_developer', fileType: 'pdf', size: 1238 },
  // More items...
]

const implementations = {
  native: {
    id: 'native',
    short: 'Native Implementation',
    long: 'Native Web Drag & Drop API',
  },
  rdnd: {
    id: 'rdnd',
    short: 'With React Drag N Drop',
    long: 'Low Level React Drag N Drop',
  },
  brdnd: {
    id: 'brdnd',
    short: 'With Beautiful React DnD',
    long: 'Beautiful React DnD NPM Package',
  },
}

const fileIcons = {
  pdf: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 256 256">
      <path d="M208,88H152V32Z" opacity="0.2"></path>
      <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
    </svg>
  ),
  code: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 256 256">
      <path d="M208,88H152V32Z" opacity="0.2"></path>
      <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
    </svg>
  ),
  audio: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 256 256">
      <path d="M72,160l24-24v88L72,200H48V160ZM152,32V88h56Z" opacity="0.2"></path>
      <path d="M99.06,128.61a8,8,0,0,0-8.72,1.73L68.69,152H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H68.69l21.65,21.66A8,8,0,0,0,104,224V136A8,8,0,0,0,99.06,128.61ZM88,204.69,77.66,194.34A8,8,0,0,0,72,192H56V168H72a8,8,0,0,0,5.66-2.34L88,155.31ZM152,180a40.55,40.55,0,0,1-20,34.91A8,8,0,0,1,124,201.09a24.49,24.49,0,0,0,0-42.18A8,8,0,0,1,132,145.09,40.55,40.55,0,0,1,152,180Zm61.66-97.66-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v80a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H168a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z"></path>
    </svg>
  ),
  image: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 256 256">
      <path d="M104,152l48,72H24l36-56,16.36,25.45ZM152,32V88h56Z" opacity="0.2"></path>
      <path d="M110.66,147.56a8,8,0,0,0-13.32,0L76.49,178.85l-9.76-15.18a8,8,0,0,0-13.46,0l-36,56A8,8,0,0,0,24,232H152a8,8,0,0,0,6.66-12.44ZM38.65,216,60,182.79l9.63,15a8,8,0,0,0,6.67,3.67A7.91,7.91,0,0,0,83,197.89l21-31.47L137.05,216Zm175-133.66-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v96a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z"></path>
    </svg>
  ),
  csv: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 256 256">
      <path d="M208,88H152V32Z" opacity="0.2"></path>
      <path d="M48,180c0,11,7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,0,1,85.78,206.4,30.06,30.06,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180Zm79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84-1.25-.81-1.23-1-1.12-1.9a4.57,4.57,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.83-.56A8,8,0,0,0,142,145.86c-2.12-.55-21-5.22-32.84,2.76a20.58,20.58,0,0,0-9,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.14,3.93-4.6,3.06-15.17,1.56-19.55.36A8,8,0,0,0,109.94,214a61.34,61.34,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.82,20.82,0,0,0,9.19-15.23C154,179,137.49,174.17,127.6,171.31Zm83.09-26.84a8,8,0,0,0-10.23,4.84L188,184.21l-12.47-34.9a8,8,0,0,0-15.07,5.38l20,56a8,8,0,0,0,15.07,0l20-56A8,8,0,0,0,210.69,144.47ZM216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z"></path>
    </svg>
  ),
  text: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 256 256">
      <path d="M208,88H152V32Z" opacity="0.2"></path>
      <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path>
    </svg>
  ),
}
const FileIcon = ({ type, ...props }: { type: keyof typeof fileIcons }) => {
  return fileIcons[type](props)
}
const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    type: 'csv' as const,
    href: '#',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    type: 'audio' as const,
    href: '#',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    type: 'code' as const,
    href: '#',
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    type: 'text' as const,
    href: '#',
  },
]

function RecentDownloads() {
  return (
    <div className="flex w-full flex-col justify-items-center gap-y-2">
      <ul role="list" className="divide-y divide-border">
        {people.map(person => (
          <li key={person.email} className="flex items-center justify-between gap-x-6 py-4">
            <div className="flex min-w-0 gap-x-4">
              <FileIcon type={person.type} />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-muted-foreground">{person.email}</p>
              </div>
            </div>
            <a
              href={person.href}
              className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset ring-ring hover:bg-accent"
            >
              View
            </a>
          </li>
        ))}
      </ul>
      <Button variant="outline">View all</Button>
    </div>
  )
}

function Downloads({ items }: { items: DownloadItem[] }) {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map(item => (
        <li key={item.id} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
          <div className="flex w-0 flex-1 items-center">
            <svg className="h-12" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.5 36V4C0.5 2.067 2.067 0.5 4 0.5H17.9C18.7987 0.5 19.663 0.845712 20.3138 1.46552L28.4138 9.1798C29.1074 9.8404 29.5 10.7564 29.5 11.7143V36C29.5 37.933 27.933 39.5 26 39.5H4C2.067 39.5 0.5 37.933 0.5 36Z"
                fill="white"
                stroke="#E5E9EB"
              />
              <path
                d="M5.77156 24H7.52937V21.7415H8.72255C10.388 21.7415 11.4285 20.7543 11.4285 19.245C11.4285 17.75 10.4093 16.7273 8.77582 16.7273H5.77156V24ZM7.52937 20.3565V18.1442H8.39585C9.1842 18.1442 9.60679 18.5703 9.60679 19.245C9.60679 19.9162 9.1842 20.3565 8.39585 20.3565H7.52937ZM14.9232 24C17.1391 24 18.5134 22.6328 18.5134 20.3601C18.5134 18.0909 17.1391 16.7273 14.9197 16.7273H12.235V24H14.9232ZM13.9928 22.5014V18.2259H14.8309C16.0809 18.2259 16.752 18.794 16.752 20.3601C16.752 21.9332 16.0809 22.5014 14.8557 22.5014H13.9928ZM19.4797 24H21.2375V21.0774H24.1281V19.6463H21.2375V18.1548H24.4442V16.7273H19.4797V24Z"
                fill="#F76659"
              />
            </svg>
            <div className="ml-4 flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="truncate font-medium">{item.name}</span>
              <span className="flex-shrink-0 text-gray-400">4.5mb</span>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Download
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}

const DraggableElement = ({
  className,
  active: { title, description },
}: {
  className?: string
  active: {
    title: string
    description?: string
    id: string
  }
}) => (
  <div className={cn('bg-muted sm:rounded-lg', className)}>
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-base font-semibold leading-6">{title}</h3>
      <div className="mt-2 max-w-xl text-sm text-muted-foreground">
        <p>
          {description ??
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.'}
        </p>
      </div>
      <div className="mt-5 flex w-full items-center justify-between">
        <Button variant="outline" className="gap-x-2">
          <Pencil1Icon />
          <span>Edit data</span>
        </Button>
        <Button className="cursor-grab gap-x-2">
          <DragHandleHorizontalIcon />
          <span>Drag Me</span>
        </Button>
      </div>
    </div>
  </div>
)

export default function Home() {
  const [attemptingUpload, setAttemptingUpload] = useState(false)
  const [activeImplementation, setActiveImplementation] = useState<{ short: string; long: string; id: string }>({})
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  p-24">
      <Header />
      <div className="grid h-full w-full grow pt-16 lg:gap-y-12">
        <div className="mx-auto w-full max-w-sm">
          <Tabs defaultValue="new">
            <Card className="rounded-lg shadow-2">
              <CardHeader className="border-b border-border px-6 py-4 shadow-sm">
                <TabsList className="flex justify-between bg-card">
                  <div className="flex grow justify-center">
                    <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
                      <TabsTrigger value="new">New Upload</TabsTrigger>
                      <TabsTrigger value="recent">Recent</TabsTrigger>
                    </div>
                  </div>
                  <TabsTrigger
                    value="settings"
                    className="rounded-full bg-white p-2 text-muted-foreground ring-1 ring-inset ring-ring
                        hover:bg-accent"
                  >
                    {/*<MixerHorizontalIcon className="h-5 w-5" aria-hidden="true" />*/}
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path>
                      <path d="M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"></path>
                    </svg>
                  </TabsTrigger>
                </TabsList>
              </CardHeader>
              <TabsContent value="new" className="mt-0">
                <CardContent className={cn('rounded-b-lg bg-muted pt-4', { 'bg-info-muted': attemptingUpload })}>
                  <FileUpload onHoverChange={isHovered => setAttemptingUpload(isHovered)} />
                  <div className="flex hidden flex-col px-4 py-6 sm:px-0">
                    <h2 className="text-sm font-medium leading-6 text-gray-900">Attachments</h2>
                    <div className="mt-2 text-sm text-gray-900  sm:mt-0">
                      <ul role="list" className="divide-y divide-gray-100 rounded-md">
                        <Downloads items={items} />
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
              <TabsContent value="recent">
                <CardContent>
                  <RecentDownloads />
                </CardContent>
                <CardFooter className="rounded-b-2xl bg-muted pt-3">
                  <p className="flex items-center gap-x-1 text-sm text-muted-foreground">
                    <span>synced</span>
                    <span className="font-medium">3hr ago</span>
                  </p>
                </CardFooter>
              </TabsContent>
              <TabsContent value="settings">
                <CardContent></CardContent>
              </TabsContent>
            </Card>
          </Tabs>
        </div>
        <aside className="space-y-8">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-2 text-sm text-muted-foreground">What is this?</span>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-5xl grid-cols-4  gap-8">
            <DraggableElement active={activeImplementation} className="col-span-2 row-start-1" />
            <div className="col-span-2 col-start-3 row-span-2 row-start-1 bg-white ring-1 ring-ring sm:rounded-lg">
              <div className="flex h-full flex-col justify-between gap-y-4 px-4 py-5 sm:p-6">
                <div>
                  <h3 className="text-base font-semibold leading-6 lg:text-3xl">
                    An Exploration of Drag & Drop on the web
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-muted-foreground lg:mt-4 lg:text-xl">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur
                      pariatur.
                    </p>
                  </div>
                </div>
                <div>
                  <Button variant="outline">Read post</Button>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-start-2 bg-white ring-1 ring-ring sm:rounded-lg">
              <div className="flex flex-col justify-between gap-y-4 px-4 py-5 sm:p-6">
                <div>
                  <h3 className="text-base font-semibold leading-6">With React D&D</h3>
                  <div className="mt-2 max-w-xl text-sm text-muted-foreground">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur
                      pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 row-start-2 bg-white ring-1 ring-ring sm:rounded-lg">
              <div className="flex flex-col justify-between gap-y-4 px-4 py-5 sm:p-6">
                <div>
                  <h3 className="text-base font-semibold leading-6">With React Beautiful DnD</h3>
                  <div className="mt-2 max-w-xl text-sm text-muted-foreground">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </main>
  )
}
