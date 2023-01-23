const user = {
    name: "Tiago",
    id: "5dc1ff2d-1d20-439d-adef-247df0a39a52",
    activeProject: "TK", // active project to load at chat page
    projects: [
        {
            id: "",
            name: "", // project name
            ownerId: "",
            members: [{ userId: "", name: "" }],
            channels: [
                {
                    id: "",
                    name: "General",
                    messages: [
                        {
                            id: "",
                            text: "",
                            user: {
                                name: "",
                                id: ""
                            },
                            timestamp: "2023-01-23T10:06:15.325Z"
                        },
                    ]
                }
            ],
            directMessages: [
                {
                    id: "",
                    name: "",
                    messages: [
                        {
                            messageId: "",
                            text: "",
                            user: {
                                name: "",
                                id: ""
                            },
                            timestamp: "2023-01-23T10:06:15.325Z"
                        },
                    ]
                }
            ],
        },
    ],
};

const time = new Date().toISOString();
console.log(time);