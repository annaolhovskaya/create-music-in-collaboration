import httpService from "./http.service";

const experienceEndpoint = "experience/";

const experienceService = {
    fetchAll: async () => {
        const { data } = await httpService.get(experienceEndpoint);
        return data;
    }
};

export default experienceService;
