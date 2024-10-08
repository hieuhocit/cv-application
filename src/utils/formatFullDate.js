export default function formatFullDate(date) {
  if(!(date instanceof Date)) return '';
  return (
    date.getFullYear().toString().padStart(4,'0') +
    '-' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    date.getDate().toString().padStart(2, '0')
  );
}
