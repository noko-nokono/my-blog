import { formatDate } from "@/utils/date";

type Props = {
  title: string;
  date: string;
  path: string;
}

export const List = (props: Props) => {
  const { title, date, path } = props;

  return (
    <li className="my-2">
      <a href={path} target="_blank">
        <time
          dateTime={date}
          className="mr-4"
        >
          {formatDate(date)}
        </time>
        {title}
      </a>
    </li>
  )
};
