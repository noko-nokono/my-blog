import { formatDate } from "@/utils/date";

type Props = {
  title: string;
  date: string;
  path: string;
  likeCount: number;
  emoji: string;
}

export const List = (props: Props) => {
  const { title, date, path, likeCount, emoji } = props;

  return (
    <li>
      <a href={path} target="_blank" className="sm:w-[212px] h-56 w-72 flex flex-col justify-betweenbg-white border border-solid border-slate-200 rounded-md drop-shadow">
        <div className="h-32 bg-[#CFE4FE] flex justify-center items-center">
          <span className="text-4xl">{ emoji }</span>
        </div>
        <div className="h-32 flex flex-col justify-between p-4">
          <h4 className="text-sm">{title}</h4>
          <div className="flex items-center gap-1 text-xs">
            <time
              dateTime={date}
              className="mr-4"
            >
              {formatDate(date)}
            </time>
            <span>♡{ likeCount.toString() }</span>
          </div>
        </div>
      </a>
    </li>
  )
};
