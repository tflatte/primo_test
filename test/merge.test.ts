import { merge } from "../src/merge"

describe("Merge function tests", () => {
  it("merges two sorted lists of equal length", () => {
    const list1 = [15, 35, 55]
    const list2 = [25, 45, 65]
    const result = merge(list1, list2)
    expect(result).toEqual([15, 25, 35, 45, 55, 65])
  })

  it("handles a empty list", () => {
    const list1: number[] = []
    const list2 = [25, 45, 65]
    const result = merge(list1, list2)
    expect(result).toEqual([25, 45, 65])
  })

  it("handles both empty lists", () => {
    const list1: number[] = []
    const list2: number[] = []
    const result = merge(list1, list2)
    expect(result).toEqual([])
  })

  it("handles lists with duplicate number", () => {
    const list1 = [15, 35, 35, 55]
    const list2 = [25, 45, 65, 65]
    const result = merge(list1, list2)
    expect(result).toEqual([15, 25, 35, 35, 45, 55, 65, 65])
  })

  it("handles lists of different lengths", () => {
    const list1 = [15, 35, 55, 75]
    const list2 = [25, 45, 65]
    const result = merge(list1, list2)
    expect(result).toEqual([15, 25, 35, 45, 55, 65, 75])
  })

  it("handles lists with negative numbers", () => {
    const list1 = [-35, -25, -15]
    const list2 = [-55, -45]
    const result = merge(list1, list2)
    expect(result).toEqual([-55, -45, -35, -25, -15])
  })
})
