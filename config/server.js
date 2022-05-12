module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://immense-oasis-56579.herokuapp.com/"),
  app: {
    keys: env.array(
      "30ijTkniyHu7zLp4yjgkng==,89YnkRUF5ORzUVoEryBlsg==,IiXZZBFlPSc2b5ecs22s+g==,XseXLd9ZzVDng/ZqnZWkMw=="
    ),
  },
});
// API token N8yVQmR/VSaFdlv3knNVeg

// admin jwtsecret 9XP6rtjUj9l8mBeZlvnetw

// jwtsecret       JKKAFbz+w44RZxACsWzllQ
