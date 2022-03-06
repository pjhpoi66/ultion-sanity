export default {
    name: "solution",
    type: "document",
    title: "Solution",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Solution Title",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            description:
                "Some frontends will require a slug to be set to be able to show the post",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "topText",
            type: "string",
            title: "Top Text",
        },
        {
            name: "mainImage",
            type: "image",
            title: "Main image",
        },
        {
            name: "publishedAt",
            type: "datetime",
            title: "Published at",
            description: "This can be used to schedule post for publishing",
        },
    ],
};