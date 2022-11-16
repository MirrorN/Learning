declare let count: number
declare let username: string
declare function add(x: number, y: number): number
declare function changeDirection(direction: 'UP' | 'DOWN')

interface Point {
  x: number
  y: number
}
type FormatPoint = (point: Point) => void
declare const formatPoint: FormatPoint

export { count, username, add, changeDirection, formatPoint }
