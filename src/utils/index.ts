export function chunkArray (items: Array, size) {
  const chunks = []
  items = [].concat(...items)

  while (items.length) {
    chunks.push(
      items.splice(0, size)
    )
  }

  return chunks
}
