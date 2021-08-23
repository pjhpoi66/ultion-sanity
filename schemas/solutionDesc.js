export default {
    name: "solutionDesc",
    type: "document",
    title: "Solution Desc",
    fields: [
        {
            name: "descTitle",
            type: "string",
            title: "Desc Title",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            description:
                "Some frontends will require a slug to be set to be able to show the post",
            options: {
                source: "descTitle",
                maxLength: 96,
            },
        },
        {
            name: "solutionTitle",
            title: "Main Solution",
            type: "reference",
            to: [{type: 'solution'}],
        },
        {
            name: "descContent",
            type: "text",
            title: "Desc Content",
        },
        {
            name: "subTitle",
            type: "string",
            title: "Sub Title",
        },
        {
            name: "subContent",
            type: "text",
            title: "Sub Content",
        },
        {
            name: "descImage",
            type: "image",
            title: "Desc image",
        },
        {
            name: "publishedAt",
            type: "datetime",
            title: "Published at",
            description: "This can be used to schedule post for publishing",
        },
    ]
};
