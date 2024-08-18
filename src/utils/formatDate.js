export default function formatDate(date) {
  if(!(date instanceof Date)) return '';
  return (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getFullYear();
}