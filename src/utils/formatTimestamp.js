export default function (timestamp) {
  var theDate = new Date(timestamp);
  return theDate.toGMTString();
}

