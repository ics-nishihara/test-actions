import {sum} from "./sum.ts"
import {describe, expect, test} from '@jest/globals';

describe("sum",()=>{
  test("成功するケース；adds 1 + 2 to equal 3",()=>{
    expect(sum(1,2)).toBe(3);
  }),
  test("失敗するケース；adds 1 + 2 to equal 3",()=>{
    expect(sum(1,2)).toBe(1);
  })
})