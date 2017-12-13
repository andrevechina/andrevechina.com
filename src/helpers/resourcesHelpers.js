import helloImg from '../images/hello.jpg'

export default function isResourceLoaded () {
  return new Promise((resolve) => {
    const hello = new Image()
    hello.onload = resolve
    hello.src = helloImg
  })
}
