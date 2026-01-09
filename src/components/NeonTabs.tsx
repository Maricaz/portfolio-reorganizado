import { cn } from '@/lib/utils'
import { useRef, useEffect } from 'react'

interface Tab {
  value: string
  label: string
}

interface NeonTabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (value: string) => void
  className?: string
}

export function NeonTabs({
  tabs,
  activeTab,
  onChange,
  className,
}: NeonTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const activeTabRef = useRef<HTMLButtonElement>(null)

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (activeTabRef.current && containerRef.current) {
      const container = containerRef.current
      const tab = activeTabRef.current

      const containerRect = container.getBoundingClientRect()
      const tabRect = tab.getBoundingClientRect()

      // Only scroll if tab is out of view
      if (
        tabRect.left < containerRect.left ||
        tabRect.right > containerRect.right
      ) {
        tab.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      }
    }
  }, [activeTab])

  return (
    <div className={cn('flex w-full items-center', className)}>
      <div
        ref={containerRef}
        className="flex w-full overflow-x-auto no-scrollbar gap-2 p-1 touch-pan-x"
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value
          return (
            <button
              key={tab.value}
              ref={isActive ? activeTabRef : null}
              onClick={() => onChange(tab.value)}
              className={cn(
                'px-6 py-2 rounded-full font-medium whitespace-nowrap text-sm md:text-base',
                isActive ? 'btn-neon' : 'btn-neon-ghost',
              )}
              role="tab"
              aria-selected={isActive}
              aria-current={isActive ? 'page' : undefined}
              aria-controls={`panel-${tab.value}`}
              id={`tab-${tab.value}`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
