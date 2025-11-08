module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        env: { },                   // Edit this to customize environment variables (see documentation)
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "npm start electron",
        ],
      }
    },
  ]
}
