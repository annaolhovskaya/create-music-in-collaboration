import httpService from "./http.service";

const experienceEndpoint = "experience/";

const experienceService = {
    get: async () => {
        const { data } = await httpService.get(experienceEndpoint);
        return data;
    }
};

export default experienceService;
