export const formatDate = (dateString: string) => {
  // Dateオブジェクトに変換
  const date = new Date(dateString);

  // 年、月、日を取得
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  // フォーマットした文字列を返す
  return `${year}/${month}/${day}`;
}