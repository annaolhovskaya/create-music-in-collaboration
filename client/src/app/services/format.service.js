import httpService from "./http.service";

const workFormatEndpoint = "workformat/";

const workformatService = {
    fetchAll: async () => {
        const { data } = await httpService.get(workFormatEndpoint);
        return data;
    }
};

export default workformatService;
