export default `
# Show
type Show {
  _id: String
  name: String
  category: String
  frequency: String
  premiereDate: String
  listed: Boolean
  tracked: Boolean
  episodes: [Episode]
}
`;
