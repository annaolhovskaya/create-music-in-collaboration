import httpService from "./http.service";

const dawEndpoint = "daw/";

const dawService = {
    fetchAll: async () => {
        const { data } = await httpService.get(dawEndpoint);
        return data;
    }
};

export default dawService;
