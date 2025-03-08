import Image from 'next/image';

type Props = {
  className?: string;
  url: string;
  title: string;
  description: string;
  links: string[];
}

export const WideCard = (props: Props) => {
  const {
    className,
    url,
    title,
    description,
  } = props;

  return (
    <div className={`flex justify-center ${className}`}>
      <p>
        <Image
          src={ url }
          alt=''
          width={200}
          height={200}
          className='rounded-l-2xl'
        />
      </p>
      <div className='w-96 h-[200px] border border-zinc-200 rounded-r-2xl'>
        <div className='mt-4 ml-4'>
          <h2 className='text-xl'>{ title }</h2>
          <p className='mt-3'>{ description }</p>
        </div>
      </div>
    </div>
  )
};