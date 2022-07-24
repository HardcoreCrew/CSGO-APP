import createApp from './app.js'
import dotenv from 'dotenv'


dotenv.config()
const app = createApp()
const port = process.env.API_PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
