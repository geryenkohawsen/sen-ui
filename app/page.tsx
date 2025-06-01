export default function PageTop() {
  return (
    <div className="m-auto">
      {/* <div className="animate-slidein opacity-0 [--slidein-delay:300ms]">
        <p className="text-center text-9xl font-extrabold text-white/95">WIP</p>
      </div>
      <div className="animate-slidein opacity-0 [--slidein-delay:500ms]">
        <p className="text-center text-9xl font-extrabold text-white/95">WIP</p>
      </div>
      <div className="animate-slidein opacity-0 [--slidein-delay:700ms]">
        <p className="text-center text-9xl font-extrabold text-white/95">WIP</p>
      </div> */}
      <p className="flex flex-col gap-8 text-9xl font-extrabold text-slate-100/95 lg:flex-row">
        <span className="animate-slidein opacity-0 [--slidein-delay:300ms]">
          WIP
        </span>
        <span className="animate-slidein opacity-0 [--slidein-delay:500ms]">
          WIP
        </span>
        <span className="animate-slidein opacity-0 [--slidein-delay:700ms]">
          WIP
        </span>
      </p>
    </div>
  )
}
