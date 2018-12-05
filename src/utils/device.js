const userAgent = window.navigator.userAgent;
const isIOS = /(iPhone|iPad|iPod|iOS)/i.test(userAgent);
const isAndroid = userAgent.includes('Android');

export {
  isIOS,
  isAndroid
}
