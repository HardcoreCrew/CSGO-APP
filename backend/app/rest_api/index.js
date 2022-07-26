import createApp from './app.js'


const { app, port } = createApp()
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
