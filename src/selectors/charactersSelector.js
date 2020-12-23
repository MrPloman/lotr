import dataService from "../services/data.service";

export const charactersSelector = async function ({limit = 6, page = 1}) {
  const {getAll} = dataService;
  const req = await getAll(`/character?limit=${limit}?page=${page}`)
    .then((r) => {
      const action = {
        type: "list",
        payload: r.data,
      };
      return {state: "success", action};
    })
    .catch((error) => {
      return {state: "error", error};
    });
  return req;
};
