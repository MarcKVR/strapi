module.exports = ({ env }) => ({
    upload: {
        provider: 'aws-s3',
        config: {
            providerOptions: {
                accessKeyId: env('AWS_ACCESS_KEY_ID'),
                secretAccessKey: env('AWS_ACCESS_SECRET'),
                region: env('AWS_REGION'),
                params: {
                    Bucket: env('AWS_BUCKET_NAME'),
                }
            }
        }
    }
});