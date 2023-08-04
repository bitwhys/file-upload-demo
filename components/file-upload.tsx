'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'
export const FileUpload = ({ onHoverChange }: { onHoverChange: (v: boolean) => void }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onDragOver={evt => {
        setHovered(true)
        onHoverChange(true)
      }}
      onDragLeave={evt => {
        setHovered(false)
        onHoverChange(false)
      }}
      type="button"
      className={cn(
        'relative block w-full rounded-2xl border-2 border-dashed p-12 text-center',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        hovered ? 'hovered border-info bg-info-muted text-info' : 'bg-muted text-muted-foreground',
      )}
    >
      <span className="inline-flex w-full justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn('h-12 w-12', { hidden: hovered })}
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path
            d="M208,88v24H69.77a8,8,0,0,0-7.59,5.47L32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H200A8,8,0,0,1,208,88Z"
            opacity="0.2"
          ></path>
          <path d="M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64l27.73,20.8a16.12,16.12,0,0,0,9.6,3.2H200v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z"></path>
        </svg>
        <svg className={cn('h-12 w-12', { hidden: !hovered })} fill="currentColor" viewBox="0 0 256 256">
          <path d="M208,88H152V32Z" opacity="0.2"></path>
          <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"></path>
        </svg>
      </span>
      <span className="mt-2 block h-[40px] text-sm font-semibold">
        <span className={cn({ hidden: !hovered })}>Upload file(s)</span>
        <span className={cn({ hidden: hovered })}>Click to browse or drag and drop your files</span>
      </span>
    </button>
  )
}
