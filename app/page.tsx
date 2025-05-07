import Image from 'next/image'

export default function PageTop() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-6 p-6">
      <Image
        src="/images/sen-ui-logo.png"
        alt="sen-ui Logo"
        width={882}
        height={436}
        objectFit="contain"
        className="h-[80px] w-auto"
      />
      <div className="overflow-hidden">
        <p className="animate-pulse bg-gradient-to-r from-[#4eb2cb] via-[#2f89a4] to-[#22667f] bg-clip-text text-center text-9xl font-extrabold tracking-wide text-ellipsis text-transparent">
          WIP WIP WIP
        </p>
      </div>
    </div>
  )
}
