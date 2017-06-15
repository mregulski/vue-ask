export default {
    getStories(limit, offset) {
        // pretend it's a response from some api
        // ignore limit/offset because it's not the point
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(_stories), 500);
        })
    },

    getComments(storyId) {
        // just give the same comments for each story
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(_comments), 500)
        })
    },

    getUser(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(_users.random()), 500)
        })
    }
}

function User(id, name) {
    this.id = id
    this.name = name
    this.avatar = "https://source.unsplash.com/random/100x100?face&sig=" + id
}

const _users = ["Eva", "S.E.N. Waweru", "Patricia", "David", "Joseph", "Andrew", "Dr Halima", "Bob", "Anna", "Xavier", "Sonja"]
    .map((name, i) => new User(i, name))
    .reduce((acc, cur) => { // build a 'hashmap'
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
        content: "Fugiat ex fugiat amet do irure eiusmod aute fugiat magna voluptate. Sint veniam cillum enim proident nisi culpa nulla quis in duis labore ut ea. Irure mollit nostrud culpa anim irure veniam excepteur. Nulla labore minim incididunt non pariatur ut sunt sit ullamco. Tempor aute ut nisi consectetur Lorem sint commodo duis culpa id irure. Lorem sunt reprehenderit elit proident aliquip Lorem qui.",
        status: "asked",
        score: 0,
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
        content: "Duis nisi consectetur amet consequat. Ea ut cupidatat nulla sint reprehenderit sunt et id officia adipisicing. Amet incididunt proident ullamco exercitation consectetur minim anim in et tempor Lorem culpa. Ex laboris ipsum labore et minim dolor mollit id sit aliqua consectetur do ex culpa. Adipisicing aliqua sunt non cillum nostrud commodo dolore deserunt esse quis. Consectetur commodo commodo incididunt do ad velit occaecat irure voluptate et quis.",
        status: "asked",
        score: 34,
        activity: [
            { id: 7, user: _users.David, action: "commented" },
            { id: 8, user: _users.Joseph, action: "commented" },
            { id: 9, user: _users['Dr Halima'], action: "commented" },
            { id: 10, user: _users.Patricia, action: "answered" },
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
        content: "Et cupidatat ex elit ad amet incididunt magna laboris quis eu. Aliqua nisi quis occaecat minim ea dolor est laborum quis reprehenderit. Ut ex velit do ea cillum quis. Est ad irure pariatur reprehenderit pariatur ad ullamco Lorem ut nulla laborum dolore cupidatat est.",
        score: -15,
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
        questionId: 1,
        author: _users.Patricia,
        time: "yesterday",
        score: 8,
        content: "Numbers or tingling in your feet should be reported to your doctor at your regular visits. Mollit ad proident culpa aliquip magna ex labore. Cupidatat sint laborum pariatur consectetur voluptate adipisicing sunt voluptate. Cillum sit cupidatat aliquip duis amet laborum cupidatat anim excepteur. In ullamco in exercitation velit irure qui. Dolore voluptate ipsum proident officia ullamco dolor ad esse excepteur ea duis. Voluptate exercitation reprehenderit est quis aliquip laborum laborum.",
        responses: [
            {
                id: 3,
                parentId: 1,
                author: _users.David,
                time: "yesterday",
                score: 2,
                content: "You should check your feet daily for redness, calluses, cracks or skin breakdown.",
                responses: [
                    {
                        id: 4,
                        parentId: 3,
                        author: _users.Xavier,
                        time: "2 hours ago",
                        score: 0,
                        content: "Proident esse dolor laborum veniam eu sit do voluptate."
                    }
                ]
            }

        ]
    },
    {
        id: 2,
        questionId: 1,
        author: _users.Joseph,
        time: "two days",
        score: -3,
        content: "When your blood sugar is low, your body gives out signs that you need food. Different people have different symptoms. You will learn to know your symptoms.",
        responses: []
    }

]

