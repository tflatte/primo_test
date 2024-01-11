export function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  const merged: number[] = []
  let i = 0
  let j = 0

  while (i < collection_1.length || j < collection_2.length) {
    if (
      j === collection_2.length ||
      (i < collection_1.length && collection_1[i] < collection_2[j])
    ) {
      merged.push(collection_1[i])
      i++
    } else {
      merged.push(collection_2[j])
      j++
    }
  }

  return merged
}
