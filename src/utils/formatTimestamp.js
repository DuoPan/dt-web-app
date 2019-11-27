export default function (timestamp) {
  var theDate = new Date(timestamp)
  const year = theDate.getFullYear()
  const month = theDate.getMonth() + 1
  const date = theDate.getDate()
  return `${date}/${month}/${year}`
}