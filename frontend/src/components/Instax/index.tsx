import Image from 'next/image';

type Props = {
  url: string;
  title: string;
}

export const Instax = (props: Props) => {
  const {
    url,
    title,
  } = props;

  return (
    <div className='border-2 border-solid border-slate-200 shadow-md p-4'>
      <p className='border-2 border-solid border-slate-200'>
        <Image
          src={ url }
          alt=''
          width={200}
          height={200}
          className='filter contrast-150 brightness-150'
        />
      </p>
      <h4 className='h-20 flex justify-center items-center text-lg'>
        { title }
      </h4>
    </div>
  )
};
