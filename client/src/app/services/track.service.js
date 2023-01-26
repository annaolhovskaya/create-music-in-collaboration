import httpService from "./http.service";

const trackEndpoint = "track/";

const trackService = {
    fetchAll: async () => {
        const { data } = await httpService.get(trackEndpoint);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            trackEndpoint + payload._id,
            payload
        );
        return data;
    },
    removeTrack: async (trackId) => {
        const { data } = await httpService.delete(trackEndpoint + trackId);
        return data;
    },
    uploadTrack: async (payload) => {
        console.log("payload from service", payload);
        const { data } = await httpService.post(
            trackEndpoint + payload._id,
            payload,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );
        console.log(data);
        // return data;
    }
};

export default trackService;
