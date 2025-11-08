module.exports = {
  run: [

    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Cerzi/videoswarm.git app",
        ]
      }
    },

    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "npm install",
          "npm run electron:build"
        ]
      }
    },
    
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
