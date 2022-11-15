import { describe, it } from "vitest";
import getData from "../../utils/getData";

describe("fetch API", () => {
  it("Llamar una API y retornar datos", async () => {
    const data = await getData("https://rickandmortyapi.com/api/character"); // returns the mocked data from the mock server
    await expect(data.id).toBe(1);
  });
});
