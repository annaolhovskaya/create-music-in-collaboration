import httpService from "./http.service";

const styleEndpoint = "style/";

const styleService = {
    fetchAll: async () => {
        const { data } = await httpService.get(styleEndpoint);
        return data;
    }
};

export default styleService;
