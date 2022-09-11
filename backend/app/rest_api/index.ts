import createApp from './app'


const { app, port } = createApp()
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
