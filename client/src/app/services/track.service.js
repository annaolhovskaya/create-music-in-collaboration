import httpService from "./http.service";

const trackEndpoint = "track/";
const uploadTrackEndpoint = "uploadTrack/";

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
        const { data } = await httpService.post(uploadTrackEndpoint, payload, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return data;
    },
    removeUploadTrack: async (payload) => {
        const { data } = await httpService.delete(
            uploadTrackEndpoint + payload.link,
            payload
        );
        return data;
    },
    createNoteDB: async (payload) => {
        const { data } = await httpService.post(trackEndpoint, payload);
        return data;
    }
};

export default trackService;
