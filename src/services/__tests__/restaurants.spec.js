import fetchRestaurantInfo from "../restaurants";

describe("Service > restaurants", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should return restaurnant info object", async () => {
    const sampleResponse = {
      neighborhood: "Fitzrovia",
      restaurants: [{ res: 1 }]
    };
    fetch.mockResponseOnce(JSON.stringify(sampleResponse));

    const result = await fetchRestaurantInfo();

    expect(result).toEqual(sampleResponse);
  });
});
