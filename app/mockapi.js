export default {
    getStories(limit, offset) {
        limit = limit || 5
        offset = offset || 0
        // pretend it's a response from some api
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(_stories), 500);
        })
    },

    getComments(storyId) {
        // just give the same comments for each story
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(_comments), 500)
        })
    }
}

function User(id, name) {
    this.id = id
    this.name = name
    this.avatar = "https://source.unsplash.com/random/100x100?face&sig=" + id
}

const _users = ["Eva", "S.E.N. Waweru", "Patricia", "David", "Joseph", "Andrew", "Dr Halima", "Bob", "Anna", "Xavier", "Sonja"]
    .map((n, i) => new User(i, n))
    .reduce((acc, cur) => {
        acc[cur.name] = cur
        return acc
    }, {})

_users.random = function () {
    let keys = Object.keys(this)
    return this[keys[Math.floor(Math.random() * keys.length)]]
}.bind(_users)

const _stories = [
    {
        id: 0,
        author: _users.Eva,
        question: "Will insulin make my patient gain weight?",
        status: "asked",
        activity: [
            { id: 0, user: _users['S.E.N. Waweru'], action: "commented" },
            { id: 1, user: _users.Patricia, action: "commented" },
            { id: 2, user: _users.David, action: "commented" },
            { id: 3, user: _users.Joseph, action: "answered" },
            { id: 4, user: _users.random(), action: "commented" },
            { id: 5, user: _users.random(), action: "commented" },
            { id: 6, user: _users.random(), action: "commented" },
        ]
    },
    {
        id: 1,
        author: _users.Andrew,
        question: "Questioning the Idea of Good Carbs, Bad Carbs?",
        status: "asked",
        activity: [
            { id: 7, user: _users.David, action: "commented" },
            { id: 8, user: _users.Joseph, action: "commented" },
            { id: 9, users: _users['Dr Halima'], action: "commented" },
            { id: 10, users: _users.Patricia, action: "answered" },
            { id: 11, user: _users.random(), action: "commented" },
            { id: 12, user: _users.random(), action: "commented" },
            { id: 13, user: _users.random(), action: "commented" },
            { id: 14, user: _users.random(), action: "commented" },
            { id: 15, user: _users.random(), action: "commented" },
            { id: 16, user: _users.random(), action: "commented" },
        ]
    },
    {
        id: 2,
        author: _users.Joseph,
        question: "Vegan diet to stop diabetes progress",
        status: "asked",
        activity: [
            { id: 17, user: _users['Dr Halima'], action: "commented" },
            { id: 18, user: _users.Patricia, action: "commented" },
            { id: 19, user: _users.Eva, action: "answered" },
        ]
    }
]

const _comments = [
    {
        id: 1,
        user: _users.Patricia,
        time: "yesterday",
        score: 8,
        content: "Numbers or tingling in your feet should be reported to your doctor at your regular visits.",
        responses: [
            {
                id: 3,
                user: _users.David,
                time: "yesterday",
                score: 2,
                content: "You should check your feet daily for redness, calluses, cracks or skin breakdown."
            }
        ]
    },
    {
        id: 2,
        user: _users.Joseph,
        time: "two days",
        score: -3,
        content: "When your blood sugar is low, your body gives out signs that you need food. Different people have different symptoms. You will learn to know your symptoms.",
        responses: []
    }

]

