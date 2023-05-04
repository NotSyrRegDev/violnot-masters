import { apiSlice } from '../../app/api/apiSlice'

export const reportsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPredict: builder.query({
            query: () => '/predict',
        }),

})
})
export const { useGetPredictQuery } = reportsApiSlice