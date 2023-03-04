import { order } from "../src/widget";

describe("Packs to send", () => {
  test("Should send no packs when 0 or less widgets are ordered", () => {
    expect(order(0)).toEqual([]);
  });

  test("Should send 1 pack of 250 when 1 widget is order", () => {
    expect(order(1)).toEqual([250]);
  });

  test("Should send 1 pack of 250 when 250 widgets are ordered", () => {
    expect(order(250)).toEqual([250]);
  });

  test("Should send 1 pack of 500 when 251 widgets are ordered", () => {
    expect(order(251)).toEqual([500]);
  });

  test("Should send 1 pack of 500 & 1 pack of 250 when 501 widgets are ordered", () => {
    expect(order(501)).toEqual([500, 250]);
  });

  test("Should send 2 packs of 5,000, 1 pack of 2,000 & 1 pack of 250 when 12,001 widgets are ordered", () => {
    expect(order(12001)).toEqual([5000, 5000, 2000, 250]);
  });
});
