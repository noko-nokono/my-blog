type Props = {
  title: string;
}

export const Label = (props: Props) => {
  const { title } = props;

  return (
    <li className="text-center border border-solid border-slate-200 rounded-full px-2 py-1">
      { title }
    </li>
  )
};