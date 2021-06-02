const initialState = [
    {
        author: "helsinkiandrew",
        comment_text: null,
        created_at: "2021-05-26T13:00:11.000Z",
        created_at_i: 1622034011,
        num_comments: 743,
        objectID: "27289924",
        parent_id: null,
        points: 721,
        story_id: null,
        story_text: null,
        story_title: null,
        story_url: null,
        title: "Amazon acquires MGM for $8.5B",
        url: "https://www.re"
    }
]

export default function articles(state = initialState, action) {
    switch (action.type) {
      default:
        return state
    }
  }