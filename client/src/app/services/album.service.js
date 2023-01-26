import httpService from "./http.service";

const albumEndpoint = "album/";

const albumService = {
    fetchAll: async () => {
        const { data } = await httpService.get(albumEndpoint);
        return data;
    }
};

export default albumService;
