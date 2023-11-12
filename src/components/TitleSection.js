export default function TitleSection({ subtitle, title }) {
  return (
    <div className='space-y-1 px-3 mb-12 @desktop:px-0 @desktop:mb-14'>
      <span className='text-sm font-semibold text-white text-opacity-70 @desktop:text-xl'>{subtitle}</span>
      <h2 className='font-poppins text-3xl @desktop:text-5xl/tight'>{title}</h2>
    </div>
  )
}
